console.log("Hello TS!");
var input = document.querySelector("input");
// or
// const input = <HTMLInputElement>document.querySelector("input")
var someNumber = +input.value;
console.log(someNumber.toFixed());
