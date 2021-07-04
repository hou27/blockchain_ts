import * as CryptoJS from "crypto-js";

class Block {
  public static calculateHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  public static validateStructure = (anyBlock: Block): boolean =>
    typeof anyBlock.index === "number" &&
    typeof anyBlock.hash === "string" &&
    typeof anyBlock.previousHash === "string" &&
    typeof anyBlock.timestamp === "number" &&
    typeof anyBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    timestamp: number,
    data: string
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

const genesisBlock: Block = new Block(0, "23092490202", "", 123456, "HiHi");

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getNewestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getNewestBlock();
	const nextIndex: number = previousBlock.index + 1;
	const nextTimestamp: number = getNewTimestamp();
	const nextHash: string = Block.calculateHash(
	nextIndex,
	previousBlock.hash,
	nextTimestamp,
	data
	);
	const newBlock: Block = new Block(
	nextIndex,
	nextHash,
	previousBlock.hash,
	nextTimestamp,
	data
	);

	addBlock(newBlock);

	return newBlock;
};

const getHashForBlock = (anyBlock: Block): string =>
  Block.calculateHash(
    anyBlock.index,
    anyBlock.previousHash,
    anyBlock.timestamp,
    anyBlock.data
  );

const isNewBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
	if (!Block.validateStructure(candidateBlock)) {
	console.log("This Block isn't valid");
	return false;
	} else if (previousBlock.index + 1 !== candidateBlock.index) {
	return false;
	} else if (previousBlock.hash !== candidateBlock.previousHash) {
	return false;
	} else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
	return false;
	} else {
	return true;
	}
};

const addBlock = (candidateBlock: Block): void => {
  if (isNewBlockValid(candidateBlock, getNewestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock("second");
createNewBlock("third");
createNewBlock("fourth");

console.log(blockchain);
export {};