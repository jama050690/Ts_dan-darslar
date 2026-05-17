//  TypeScript'dagi asosiy primitive va maxsus typelarni eslatib o'tadi.
// (number, string, boolean, undefined, null, unknown, never, any);

// strict typing
// Bu yerda har bir o'zgaruvchiga aniq type berish ko'rsatilgan.
// const str: string = 'salom';
// const num: number = 123;
// const bool: boolean = true
// const und: undefined = undefined;
// const nll: null = null;

// let a: string | number = 123
// a = "nimadir"

// `|` belgisi union type bo'lib, bitta o'zgaruvchi bir nechta typedan birini olishi mumkin.

//  dinamic typing
// TypeScript qiymatga qarab typeni o'zi aniqlab oladi, bu holat type inference deyiladi.

// let str = "hi"
// str = 123 // error

// let unkn: unknown = 123;
// `unknown` xavfsizroq `any`, ishlatishdan oldin type tekshirish talab qilinadi.
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

// Funksiya parametrlari va return type alohida ko'rsatilgan.

// function fn1(): never {
//   throw new Error('Qanaqadir error');
//   // infinty loop
// }
// `never` funksiya hech qachon normal qiymat qaytarmasligini bildiradi.

// function fn2(a: any, b: any): any {
//     return String(a + b);
// }
// `any` har qanday qiymatni qabul qiladi, lekin type xavfsizligini pasaytiradi.

// const arr2: Array<string> = ['nimadir', 'salom', 'hayr'];
// const arr: string[] = ['nimadir', 'salom', 'hayr'];
// const arr: readonly string[] = ['nimadir', 'salom', 'hayr'];
// const x: [string, number, boolean] = ["Hi", 123, false]
// Array uchun ikki xil yozilish bor: `Array<T>` va `T[]`. `readonly` o'zgartirishni cheklaydi.
// Tuple esa massiv ichidagi elementlar tartibi va typelarini aniq belgilaydi.

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

// `?` belgisi property ixtiyoriy ekanini bildiradi.

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
// `&` intersection type bo'lib, bir nechta typeni bitta typega birlashtiradi.

// const obj: UserTypes = {
//   name: 'Toshmat',
//   age: 24,
// };

// interface IBaseUserType {
//   name: string;
//   age: number;
// }
// `interface` odatda object shaklini ifodalash uchun qulay ishlatiladi.

// interface IUser extends IBaseUserType {
//   address?: string;
// }
// `extends` orqali bitta interface boshqasidan meros oladi.

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
// Alohida interface yozish murakkab objectlarni bo'lib tushuntirishni osonlashtiradi.

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


//const person: [name:string, age:number] = ['Sardor', 17];
//person.push(`nimadir`);
// Tuplega `push` qilish texnik jihatdan mumkin bo'lishi mumkin, lekin bu tuple ma'nosini buzadi.

//type Car = {
//name: string;
//}

// infterface Car {
   // year: number;
//}

//const car: Car = {
  //  name: 'Cobalt',
  //  brand: 'Chevrolet',
    //year: 2020
// };

// type DoFlyType = {
//   canFly: boolean;
// };

// type DOSWimType = {
//   canSwim: boolean;
// };

// type DuckType = DoFlyType & DOSWimType &{

// }

// Bu yerda duck type uchish va suzish xususiyatlarini birlashtiryapti.

// Casting orqali type ni o'zgartirish
// Type assertion kompilyatorga "bu qiymatni shu type deb ol" degan signal beradi.

// const x:unknown = {
//     (x as string).toLocaleLowerCase();
//     (<number>x).toFixed(2);
// }

// // Funkiyada type berish
// function fn (p1:number, ...p:tring[]): string {
// return p1.toString();
// }
// `...p` rest parametr bo'lib, qolgan argumentlarni massiv sifatida yig'adi.

// Funcksiyada return qaytmasa void ishlatiladi:

// function fn(p1:number):void {
//     console.log(p1);
// }

//Dinamik funksiyaga type berish(Generik) bita type berish
// Generic funksiya bitta mantiqni turli typelar bilan ishlatishga yordam beradi.

// function fn<T>(p2: T): T {
// return p2;
// }
// fn <string>('salom').charAt(0);
// fn <number>(123).toFixed(2);

// Bir necha type berish GEnerikda
// Generic ichida bir nechta type parametr berish ham mumkin.

// function fn <T,N>(P1:T, P2:N) {
//     return P1;}
// fn<string, number>('salom', 123);

// Class va ?: Sintaksis Sugar (JS da ES6)da

// Classlarda type berish
// Class ichida field, constructor va methodlarga ham type beriladi.

// class Sharp {
//     x: number;
//     y: number;
//     constructor(x:number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     drawSharp():void {
//         console.log(this.x,this.y);
        
//     }

// }

//classlarda Generik ishlatish  
// Generic class ichidagi storage faqat belgilangan type bilan ishlaydi.

// class Storage<T> {
//     storage: T[] = [];
//     add(data: T){
//         this.storage.push(data);
//     }
// }
// const s = new Storage<string>();

// const sobit ={
//     name:'Sobit',
//     age: 17
// }
// s.add('sobit');

// interface Icar {
//     brand: string;
//     year: number;

// }
// const  S2 = new Storage<Icar>();
// S2.add({
//     brand: 'Chevrolet',
//     year: 2020
// }); 


// Classlarda private va public, protected holatlari mavjud
//Public:Default yozilsa yozilmasa ham public hisoblanadi, class ichida va tashqarisida ishlatilishi mumkin
//Private: class ichida ishlatilishi mumkin, class tashqarisida ishlatilishi mumkin emas
//Protected: class ichida va child classlarda ishlatilishi mumkin, class tashqarisida ishlatilishi mumkin emas
// Access modifierlar encapsulation qilishga yordam beradi.

//OOP da 4 ta tamoyil bor: Encapsulation, Abstraction, Inheritance, Polymorphism
// Bu tamoyillar classlar bilan ishlashning asosiy nazariy poydevori hisoblanadi.

// class Animal {
// name: string | undefined;
// constructor(readonly private name: string) {
//     this.name = name;   
// private isWild: boolean = true;
// }
//   protected action(act: string): void {
//     console.log(`${this.name} is ${act}ing`);
    
// }
// class Bird extends Animal {
//     protected action(act:string):void {
//         console.log(act);
//     }
// }

// const Lion = new Animal('Lion');

// const kivi = new Bird ('Kivi ';
//     kivi.action('fly')
// )
// }

// interface IAnimal {
//     name: string;
//     action(act:string): void;
// }
// type PartialAnimal = Partial<IAnimal>;
// `Partial<T>` utility type barcha propertylarni ixtiyoriy qilib beradi.

// const obj: PartialAnimal = {
//     name: 'Lion'
// }  

// type IXUSer = Pick <UserActivation,'age'|name>;
// const person: IXUSer = {
//     age: 24
//     name: 'Toshmat'
// };
// `Pick<T, K>` berilgan typedan kerakli propertylarni tanlab oladi.

// type ISUser = Omit < ISUser, 'adress'>;
// const person: ISUser = {
//     name: 'Toshmat',
//     age: 24
// }
// `Omit<T, K>` esa aksincha, ayrim propertylarni chiqarib tashlaydi.
