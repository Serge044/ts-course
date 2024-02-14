import { is } from "cheerio/lib/api/traversing";

let username: any = "Serge";
const age: number = 1024;

function myName(name: string): string {
  if (name) {
    return `My name is ${name}`;
  } else {
    return "Error";
  }
}

console.log(myName(username));

const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
  const data: number = JSON.parse(response);
  return data;
};

function transferEurToUsd(
  available: boolean,
  amount: number,
  commission: number
): void {
  if (available) {
    let res: number = fetchCurr(currRate) * amount * commission;
    console.log(res);
  } else {
    console.log("Unavailable");
  }
}

transferEurToUsd(true, 500, 1.05);

const creasteError = (msg: string): never => {
  throw new Error(msg);
};

// -------------------

const someData = {
  name: "Serge",
  isCoder: true,
  justNum: 110,
};

const showData = (data: {
  name: string;
  isCoder: boolean;
  justNum: number;
}): string => {
  return `Name ${data.name}, is coder = ${data.isCoder} and just number is ${data.justNum}.`;
};

console.log(showData(someData));

const strings: string[] = ["dev", "design", "bi"];
const nums: number[] = [1, 2, 3];
const nums2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// ------------------------

const userDataTuple: [boolean, number, string] = [true, 40, "John"];

const [bthd, userAge, userName] = userDataTuple;

// ------------------------

// Union type
const msg: string | number = 5;

// ------------------------

// Narrowing
function printMsg(message: string | number): void {
  if (typeof message === "string") {
    console.log(message.toLowerCase());
  } else {
    console.log(message + 1);
  }
}

printMsg("Hello");
printMsg(2);

// ---------------- Literal types ----------------

let message2: "Serge" = "Serge";

function startServer(
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server srarted" {
  console.log(`Server was started on ${protocol}://server:${port}`);

  return "Server srarted";
}

startServer("https", 3001);

// ---------------- Type alias ----------------

type AllowedName = "Serge" | "Sandra" | "Lada";

function sayHeyName(name: AllowedName): void {
  console.log(`Hey, ${name}!`);
}

sayHeyName("Lada");

type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

type Role = { role: string };

type ConfigWithRole = Config & Role;

type StartFunc = (protocol: "http" | "https", port: 3000 | 3001) => string;

const serverConfig: Config = {
  protocol: "https",
  port: 3000,
};

const backupConfig: Config = {
  protocol: "http",
  port: 3001,
};

const serverConfigWithRole: ConfigWithRole = {
  protocol: "https",
  port: 3000,
  role: "admin",
};

const startServer2: StartFunc = (
  protocol: "http" | "https",
  port: 3000 | 3001
): string => {
  console.log(protocol, port);

  return "Server started";
};

// ---------- Intrface ----------

interface IConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
}

interface IRole {
  role: string;
}

// interface IConfigWithRole extends Config, Role {}
// or extend
interface IConfigWithRoleAndTest extends Config, Role {
  test: string;
}

const serverConfigWithRoleAndTest: IConfigWithRoleAndTest = {
  protocol: "https",
  port: 3000,
  role: "admin",
  test: "test test test",
};

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: "absolute",
  top: "20px",
  left: "20px",
};

const serverConfig2 = {
  protocol: "https",
  port: 3000,
};

const backupConfig2 = {
  protocol: "http",
  port: 3001,
  test: "test",
};

interface BasicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (config: BasicConfig): "Server started" => {
  console.log(
    `Server was started on ${config.protocol}://server:${config.port}`
  );

  return "Server started";
};

startNewServer(serverConfig2);

// will be ok even if we are not using all values from backupConfig2
startNewServer(backupConfig2);

// ---------- Optional property and readonly ----------

interface User {
  readonly login: string;
  pass: string;
  age: number;
  // here address is optional
  address?: string;
}

const user: User = {
  login: "admin",
  pass: "qwerty",
  age: 99,
};

user.pass = "new_pass";
// Cannot assign new value to 'login' because it is a read-only property.
// user.login = "new_login";

const user2: Readonly<User> = {
  login: "admin2",
  pass: "qwerty2",
  age: 992,
};

// Cannot assign to 'age' because all values are read-only property.
// user2.age = 1;

// All data in arr is readonly, you can't change existing value or push new value
const basicPorts: readonly number[] = [3000, 3001, 5000];

// ---------- Enums ----------

enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

enum TimingFunc {
  EASE = "ease",
  EASE_IN = "ease in",
  LINEAR = "linear",
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  console.log(elem, dir, tFunc);
}
frame("id", Directions.RIGHT, TimingFunc.EASE_IN);

// ---------- Unknown type ----------

const someUserData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const data = safeParse(someUserData);

function transferData(d: unknown): void {
  if (typeof d === "string") {
    console.log(d.toLocaleLowerCase());
  } else if (typeof d === "object" && d !== null) {
    console.log(d);
  } else {
    console.error("Some Error");
  }
}

transferData(data);

type T0 = any | unknown;
type T1 = number | unknown;
type T2 = any & unknown;
type T3 = number & unknown;

// ------------------------

const PI = 3.14;
let PIClone: typeof PI;

interface Department {
  name: string;
  budget: number;
}

const department = {
  name: "FED",
  budget: 100000,
};

interface Project {
  name: string;
  projectBudget: number;
}

function transformDepartment(department: Department, amount: number): Project {
  return {
    name: department.name,
    projectBudget: amount,
  };
}

const myProject = transformDepartment(department, 150000);
console.log(myProject);

// ---------- Type Guard ----------
function isNumber(n: unknown): n is number {
  return typeof n === "number";
}

console.log(isNumber(5));

interface Car {
  engine: string;
  wheels: {
    season: string;
    amount: number;
  };
}

interface Ship {
  engine: string;
  sail: string;
}

const myCar: Car = {
  engine: "diesel",
  wheels: {
    season: "winter",
    amount: 4,
  },
};

const myExBoat: Ship = {
  engine: "absent",
  sail: "absent",
};

function isCar(car: Car | Ship): car is Car {
  // Now not working without ?. Do not know why.
  return (car as Car).wheels?.amount !== undefined;
}

function isShip(ship: Car | Ship): ship is Ship {
  return (ship as Ship).sail !== undefined;
}

function aboutVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    console.log(`This car has ${vehicle.wheels.season} wheels.`);
  } else if (isShip(vehicle)) {
    console.log(`This ship has ${vehicle.sail} sail.`);
  } else {
    // Type never
    return vehicle;
  }
}

aboutVehicle(myCar);
aboutVehicle(myExBoat);

// ---------- Function Overloads ----------

interface Square {
  side: number;
  area: number;
}

interface Rect {
  a: number;
  b: number;
  area: number;
}

function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;
function calculateArea(a: number, b?: number): Square | Rect {
  if (b) {
    const rect: Rect = {
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}

// Наводячи на функцію зразу видно її опис завдяки тому що всі можливі варіанти було описано безпосередньо перед функцією
console.log(calculateArea(2, 3));
console.log(calculateArea(2));

// ---------- Generics types and interfaces ----------

const numbers = [1, 2, 3];

interface ProcessingFn {
  <T>(data: T): T;
}

function processing<T>(data: T): T {
  return data;
}

let newFunc: ProcessingFn = processing;

// ---------- Generics type

type User123<T> = {
  login: T;
  age: number;
};

// тип віку зазначений заздалегідь, а тип для login створюємо в момент безпосереднього створення юзера
const user123: User123<string> = {
  login: "some str",
  age: 25,
};

// ----------

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data123: OneOrMany<number[]> = [5, 5];

// ---------- Generic interface

interface ParentsOfUser {
  mother: string;
  father: string | null;
}

// за допомогою extends ми встановлюємо обмеження.
// тепер у ParentsData обовʼязково мають бути поля із ParentsOfUser, а решта може бути доповнена на розгляд девелопера.

interface User1234<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

const user1234: User1234<{
  mother: string;
  father: string | null;
  married: boolean;
}> = {
  login: "some str",
  age: 25,
  parents: {
    mother: "best in the world",
    father: null,
    married: false,
  },
};

// ----------

const depositMoney = <MyT extends number | string>(amount: MyT): MyT => {
  console.log(`req to the server with amount ${amount}`);
  return amount;
};

console.log(depositMoney(500));
console.log(depositMoney("500$"));
// ERROR. Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// console.log(depositMoney(false));

// ---------- Generics classes ----------

class ClassUser<T, S> {
  name: T;
  age: S;

  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }
}

const Carl = new ClassUser<string, number>("Carl", 30);

// ---------- Generics Readonly, Partial, Required) ----------

interface IState {
  data: string;
  tag: string;
}

function action(state: Readonly<IState>) {
  // Error. Cannot assign to 'data' because it is a read-only property.
  // state.data = "new data";
}

// завдяки Partial всі властивості всередині обʼєкту не є обовʼязковими. тут ми використовуємо лише data і не використовуємо tag
// Required назпаки робить всі властивості обовʼязковими, навіть якщо раніше вони такими не було(наприклад було tag?: string;)
const state: Partial<IState> = {
  data: "smth",
};

// ---------- Operator keyof ----------
interface ICompany {
  name: string;
  debts: number;
}

type CompanyKeys = keyof ICompany;
// const keys: CompanyKeys = 'debts'

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
  name: "HH",
  debts: 500,
};

printDebts(hh, "name", "debts");

// ---------- Operator typeof ----------

const google = {
  name: "Google",
  debts: 1000,
};

type GoogleKeys = keyof typeof google;
// "name" | "debts"
const keys: GoogleKeys = "name";

// ---------- Indexed Access Types ----------

interface ISmth {
  name: string;
  debts: number;
  departments: DepartmentSmth;
  managements: {
    owner: string;
  };
}

interface DepartmentSmth {
  [key: string]: string;
}

const mySmth: ISmth = {
  name: "IDK",
  debts: 350,
  departments: {
    sales: "sales",
    developer: "dev",
  },
  managements: {
    owner: "John",
  },
};

type CompanyDebtsType = ISmth["name"];
type CompanyOwnerType = ISmth["managements"]["owner"];
type CompanyDepartmentsType = ISmth["departments"][number];
type CompanyDepartmentsTypes = ISmth["departments"];
type Test = ISmth[keyof ISmth];

// ---------- Conditional types ----------

// Condition ? true : false

type FromUserOrFromDataBase<T extends string | number> = T extends string
  ? IDataFromUser
  : IDataFromDataBase;

interface IDataFromUser {
  weight: string;
}

interface IDataFromDataBase {
  calories: number;
}
// const test123: IDataFromDataBase
const test123: FromUserOrFromDataBase<number> = {
  calories: 123,
};

type ToArray<Type> = Type extends any ? Type[] : never;

// ---------- Mapped types ----------

type Keys = "name" | "age" | "role";

type User21 = {
  [K in Keys]: string;
};

const sam: User21 = {
  name: "Sam",
  age: "20",
  role: "hobbit",
};

// ----------

type Currencies = {
  readonly usa: "usd";
  china?: "cny";
  ukraine: "uah";
};

type CreateCustomCurr<T> = {
  -readonly [P in keyof T as `custom${Capitalize<string & P>}`]-?: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

type PlayersNames = "john" | "karl";

// ----------

type Animation = "fade" | "swipe";
type Direction = "in" | "out";

type MyNewAnamation = `${Animation}${Capitalize<Direction>}`;

// ---------- Utility types: Pick, Omit, Extract, Exclude, Record ----------

type CurrWithoutChina = Omit<Currencies, "china">; // виключити щось із певного типу

type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">; // фільтрація по властивостям

type CountriesWithoutChina = Exclude<keyof Currencies, "china">; // виделення з union type
type FadeType = Exclude<Animation, "swipe">; // виделення з union type

type SwipeType = Extract<Animation | Direction, "swipe">; // вибір підхолящого типу

type gameDataCurr = Record<PlayersNames, CustomCurrencies>; // створення обʼєкту, де ключами є перше значення, а значеннями друге значення

const gameData: gameDataCurr = {
  john: {
    customUsa: "string",
    customChina: "string",
    customUkraine: "string",
  },
  karl: {
    customUsa: "string",
    customChina: "string",
    customUkraine: "string",
  },
};

// ----------

function calculate(a: number, b: number): number {
  return a * b;
}

type CalculateRT = ReturnType<typeof calculate>; // отримуємо тип повертаємого значення із функції

let anotherRes: CalculateRT = 7;

type CalculatePT = Parameters<typeof calculate>[0]; // отримати тип першого аргумента із функції calculate

type PT1 = Parameters<(a: number, b: string) => void>; // отримати типи аргументів із функції написаної всередині

// ---------- Working with server, JSON ----------

let toDoList: ToDo[] = [];

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    if ("id" && "userId" in json) {
      toDoList.push(json); // if one obj
    } else if (Array.isArray(json)) {
      toDoList = json; // if arr of obj
    } else {
      console.log("Ouuu. SMTH!");
    }
    console.log(toDoList);
  })
  .catch((error) => console.log(error));

// ---------- promise

const promise = new Promise<string>((resolve, reject) => {
  resolve("Test");
});

promise.then((value) => {
  console.log(value.toLocaleLowerCase());
});

// ---------- Classes ----------

// class Box {
//   width: number;
//   height: number;
//   volume: string;

//   // додаємо перевантаження(overload) для кращої читабельності
//   constructor(volume: string);
//   constructor(width: number);
//   constructor(widthOrVolume: number | string) {
//     if (typeof widthOrVolume === "number") {
//       this.width = widthOrVolume;
//     } else {
//       this.volume = widthOrVolume;
//     }
//   }
// }

class Box {
  width: number;
  height: number;
  volume: number | undefined;
  _content: string | undefined;

  constructor(width: number, volume?: number, content?: string) {
    this.width = width;
    this.volume = volume;
    //символ лодаш( '_' ) це вказівка для інших розробників що дане значення не можна змінювати вручну. Але це лише вказівка, фізично це все ще можна зробити.
    this._content = content;
    this.height = 500;
  }

  calculateVolume(): void {
    if (!this.volume) {
      this.volume = this.width * this.height;
      console.log(`Package volume: ${this.volume} `);
    } else {
      console.log(`Package volume: ${this.volume} `);
    }
  }
  //   // додаємо перевантаження(overload) для кращої читабельності
  checkBoxSize(transport: number): string;
  checkBoxSize(transport: number[]): string;
  checkBoxSize(transport: number | number[]): string {
    if (typeof transport === "number") {
      return transport >= this.width ? "Ok" : "Not ok";
    } else {
      return transport.some((t) => t >= this.width) ? "Ok" : "Not ok";
    }
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
  }
}

const firstBox = new Box(300);

// console.log(firstBox.checkBoxSize([100, 330]));

console.log((firstBox.content = "Test"));
console.log(firstBox.content);

class User78 {
  name: string;
}

const carl = new User78();
carl.name = "Carl";

console.log("Carl's name: ", carl.name);

class PresentBox extends Box {
  wrap: string;

  constructor(wrap: string, width: number) {
    super(width);
    this.wrap = wrap;
  }
}

const presentBox = new PresentBox("yellow", 1);
console.log(presentBox);

// ---------- Implements in Classes ----------

interface IUser {
  login: string;
  pass: string;
  token?: number;
}

interface IValidation {
  valid: boolean;
  isValid: (data: string) => boolean;
}

class UserForm implements IUser, IValidation {
  login: string;
  pass: string;
  valid: boolean = false;
  token?: number;

  isValid(login: string) {
    return login.length > 3;
  }
}

// ----------

class Player {
  private static game: string = "COD";
  // на відміну від private(який існує тільки в TS і зникає після компеляції в JS), використовуючи # значення не можна змінити навіть в JS після компеляції. Але може не підтримуватися в більш старих стандартах(в старших за ES2015)
  #login: string;
  private _pass: string;
  // значення public є значенням по дефолту, тому його вказувати не обовʼязково
  public server: string;
  // protected - захищений від змін ззовні, проте доступний при наслідуванні для потомків
  protected consent: boolean;

  get pass() {
    return this._pass;
  }

  set pass(newPass: string) {
    // Validation
    this._pass = newPass;
  }
}

class CompetitivePlayer extends Player {
  rank: number;

  isConsented() {
    this.consent ? "Yes" : "No";
  }
}

const player = new Player();
// Error. Property 'login' is private and only accessible within class 'Player'.
// player._pass = "qwerty";
player.pass = "new_pass";

console.log(player.pass);

const test99 = new Player();
// Error. Property '#login' is not accessible outside class 'Player' because it has a private identifier.
// test99.#login;

console.log(Math.PI);

// ---------- Abstract Classes ----------

interface IENgine {
  model: string;
  capacity: number;
  startEngine: (time: Date) => string;
}

abstract class AbstractVehicle {
  model: string;
  capacity: number;
  abstract startEngine: (time: Date) => string;
  stopEngine(time: Date): string {
    this.startEngine(new Date());
    return "Engine Stopped";
  }
}

class Vehicle extends AbstractVehicle {
  startEngine = (time: Date) => {
    return "Started";
  };
}
