let count = 7;
count += 1;
// count = "hello tony";  error

const message: string = "hi tony";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["tony", "chloe"];

// messages.push(123);  error : messages가 string배열로 선언되있어서 숫자 불가능

let color: "red" | "orange" | "yellow" = "red"; //red,orange,yellow 중 하나임
// color = "blue"; error
