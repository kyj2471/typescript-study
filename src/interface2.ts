interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "Tony",
  age: 29,
};

const developer: Developer = {
  name: "Chloe",
  age: 20,
  skills: ["javascript", "typescript"],
};

const tuckPerson: Person[] = [person, developer];
