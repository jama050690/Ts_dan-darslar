// (number, string, boolean, undefined, null, unknown, never, any);

// strict typing
// const str: string = 'salom';
// const num: number = 123;
// const bool: boolean = true
// const und: undefined = undefined;
// const nll: null = null;

// let a: string | number = 123
// a = "nimadir"

//  dinamic typing
// let str = "hi"
// str = 123 // error

// let unkn: unknown = 123;
// if (typeof unkn == 'string') {
//   console.log(unkn);
// } else if (Array.isArray(unkn)) {
//   unkn.forEach((item) => {
//     console.log(item);
//   });
// }

// function fn(p1: number, p2: number): string {
//   return `${p1 + p2}`;
// }

// function fn1(): never {
//   throw new Error('Qanaqadir error');
//   // infinty loop
// }

// function fn2(a: any, b: any): any {
//     return String(a + b);
// }

// const arr2: Array<string> = ['nimadir', 'salom', 'hayr'];
// const arr: string[] = ['nimadir', 'salom', 'hayr'];
// const arr: readonly string[] = ['nimadir', 'salom', 'hayr'];
// const x: [string, number, boolean] = ["Hi", 123, false]

// const obj: {
//     name: string
//     age: number
// } = {
//     name: "Toshmat",
//     age: 24
// }

// type UserTypes = {
//   name: string;
//   age: number;
//   address?: string
// };

// const obj: UserTypes = {
//   name: 'Toshmat',
//   age: 24,
// };

// type HasName = {
//   name: string;
// };

// type HasAge = {
//   age: number;
// };

// type UserTypes = HasName & HasAge;

// const obj: UserTypes = {
//   name: 'Toshmat',
//   age: 24,
// };

// interface IBaseUserType {
//   name: string;
//   age: number;
// }

// interface IUser extends IBaseUserType {
//   address?: string;
// }

// const user: IBaseUserType = {
//   name: 'Toshmat',
//   age: 24,
// };

// const user1: IUser = {
//   name: 'Eshmat',
//   age: 34,
//   address: "Toshkent, O'zbekiston"
// };

// interface IAddress {
//   region: string;
//   country: string;
// }

// screenflow.dev

// interface IUser {
//   name: string;
//   age: number;
//   address: IAddress;
// }

// const obj: IUser = {
//   name: 'Toshmat',
//   age: 33,
//   address: {
//     region: 'Toshkent',
//     country: 'Uzbekistan',
//   },
// };
