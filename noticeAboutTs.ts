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

// const testFunc = (name: string, age: number, gender: string): string => {
// 	return `Hi ${name}, age - ${age}, gender - ${gender}`;
// }

// console.log(testFunc("hou", 22, 'male'));

/**
 *
 */

//object 넘기기

interface Human {
	name: string;
	age: number;
	gender: string;
}

const person = {
	name: 'hou',
	age: 22,
	gender: 'male'
};

const testFunc = (person: Human): string => {
	return `Hi ${person.name}, age - ${person.age}, gender - ${person.gender}`;
}

console.log(testFunc(person));

export {};