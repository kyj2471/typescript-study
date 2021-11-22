type Junior = {
  name: string;
  age?: number;
};

type Senior = Junior & {
  skills: string[];
};

const junior: Junior = {
  name: "Tony",
};

const senior: Senior = {
  name: "Van",
  skills: ["android", "frontEnd"],
};

type Dev = Junior[];
const dev: Dev = [junior, senior];

type Colored = "red" | "pink" | "blue";
const colored: Colored = "blue";
const manyColor: Colored[] = ["red", "blue"];
