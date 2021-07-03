/**
 *
 */

// const name = 'hou'
// 	, age = 22
// 	, gender = 'male';

// //if you add ? on argument, that argu will be optional.
// const testFunc = (name, age, gender?) => {
// 	console.log(`Hi ${name}, age - ${age}, gender - ${gender}`);
// }

// testFunc(name, age, gender);

/**
 *
 */

// const testFunc = (name: string, age: number, gender: string) => {
// 	console.log(`Hi ${name}, age - ${age}, gender - ${gender}`);
// }

// testFunc("hou", '22', 'male');

/**
 *
 */

const testFunc = (name: string, age: number, gender: string): string => {
	return `Hi ${name}, age - ${age}, gender - ${gender}`;
}

console.log(testFunc("hou", 22, 'male'));

export {};