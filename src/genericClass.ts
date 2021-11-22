class Queue<T> {
  protected data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

//number

const numberQueue = new Queue<number>();

numberQueue.push(0);
numberQueue.push(+"1");
console.log(numberQueue.pop()?.toFixed()); //0
console.log(numberQueue.pop()?.toFixed()); //1
console.log(numberQueue.pop()?.toFixed()); //undefined

//string

const stringQueue = new Queue<string>();

stringQueue.push("hello");
stringQueue.push("Tony");

console.log(stringQueue.pop()?.toUpperCase()); //HELLO
console.log(stringQueue.pop()?.toUpperCase()); //TONY
console.log(stringQueue.pop()?.toUpperCase()); //undefined

//custom

const customQueue = new Queue<{ name: string; age: number }>();
customQueue.push({ name: "Tony", age: 29 });
customQueue.push({ name: "Chloe", age: 20 });

console.log(customQueue.pop()); //{ name: 'Tony', age: 29 }
console.log(customQueue.pop()); //{ name: 'Chloe', age: 20 }
console.log(customQueue.pop()); //undefined
