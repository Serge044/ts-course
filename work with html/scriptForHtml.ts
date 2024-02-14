console.log("Hello TS!");

const input = document.querySelector("input") as HTMLInputElement;
// or
// const input = <HTMLInputElement>document.querySelector("input")

const someNumber: number = +input.value;

console.log(someNumber.toFixed());
