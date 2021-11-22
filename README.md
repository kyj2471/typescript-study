# typescript

### 셋팅하기

먼저 폴더를 만들어 주고난 후 npm init -y 를 통하여 package.json파일을 만들어줍니다
그러고 난 후 tsconfig.json파일을 만들어줍니다.

```js
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  }
}
```

config제이슨 파일을 만들때 위의 코드처럼 직접 작성해도 상관없습니다.
하지만 다른 방법도 있는데 우선

```js
npm i -g typescript
```

를 통하여 타입스크립트를 설치해 줍니다. 그러고 난 후

```js
tsc --init
```

을 하게되면 자동으로 `tsconfig.json`파일이 생성되는 것을 확인할수있습니다.

그런데 만약 타입스크립트 설치가 잘되지 않는다면 앞에 sudo를 붙혀서 한번 해보시고 그래도 문제가 있다면
`https://pie001.github.io/entry/tech-note/0065/`사이트를 참고하여 해결할 수 있습니다.

### tsconfig.json

tsconfig 파일에 있는 설정이 어떤건지 알아 보겠습니다.

- **target** : 컴파일된 코드가 어떤 환경에서 실행할지 정의해 줍니다. 이제 타입스크립트 자체에서 제공해주는 컴파일 기능을 통하여 컴파일링을 할 때 `let`,`const`와 같은 코드를 es5문법에 맞게 `var`로 변경 해 줄것입니다.

- **Module** : compile된 코드가 어떤 모듈시스템을 사용할지 정의해 줍니다. common으로 하게 되면 `export default tony`를 하게 된다면 컴파일된 js환경에서는 `exports.defaul = hi`로 변경하겠지만 es2015로 하면 `export default tony`를 그대로 유지할 것 입니다.

- **strict** : 모든 타입 체크 옵션을 활성화 해줍니다.

- **esModuleInterop** : commonjs모듈 형태로 된 것을 es2015모듈 형태로 불러올 수 있습니다.

- **outDir** : compile된 파일들이 저장되는 경로를 지정해 줄 수 있습니다. 이제 저희가 컴파일한 결과물인 JS코드들은 ./dist라는 폴더 아래에 나타날 것입니다.

### 타입스크립트 한번 써보기

```js
// practice.ts

const person: string = "Tony";
```

확장자는 .ts를 사용하고 여기 코드에서 `:string`부분이 해당 값이 문자열이라는 타입을 지정해 주는 것입니다.
dist라는 폴더를 만들고 `tsc`라는 명령어를 터미널에 입력하면 dist에 practice.js라는 파일이 생성되고

```js
var person = "Tony";
```

위와 같은 코드로 컴파일 된 결과가 출력됩니다.
몇가지 타입에 대해서 한번 간단히 보겠습니다.

```js
let count = 7;
count += 1;
count = "hello tony"; // error

const message: string = "hi tony";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["tony", "chloe"];

messages.push(123); // error : messages가 string배열로 선언되있어서 숫자 불가능

let color: "red" | "orange" | "yellow" = "red"; //red,orange,yellow 중 하나임
color = "blue"; //error
```

이런식으로 우리가 앞으로 타입스크립트를 사용할 때 특정 변수나 상수에 타입을 지정해 줄 수 있고 지정한 타입과 다른 값이 설정을 하려하면 에러가 발생합니다.
그리고 tsc라는 명령어를 통해 컴파일을 시도할때 터미널에 관련부분 에러를 보여주고 컴파일을 진행하지 않습니다.
이런식으로 runtime error가 발생하지 않도록 개발단계에서 우리는 에러를 처리할 수 있게 해줍니다.

## 여기까지 공부하고 왜 타입스크립트를 쓰는가에 대해서

#### javascript 런타임

기본적으로 런타임이란 프로그램이 실행되는 환경을 이야기합니다. 지금까지 사용했던 js에서는 브라우저나 노드가 될 수 있겠다.
자바스크립트는 런타임에서 타입이 결정되는 `dynamically typed`언어이다.
그런데 런타임 오류는 너무 치명적이다. 최악의 상황에는 프로그램이 멈추기 떄문이다.
물론 개발과정에서 `try-catch`를 사용하여 프로그램이 멈추는 상황을 피하기위해 개발을 하겠지만 예상하지 못하는 부분에서 에러가 발생하면 프로그램이 죽어버리는 참사가 발생할 수도있다.

#### 그러면 typescript는 뭐가 다를까?

타입스크립트는 자바스크립트와 다르게 `statically typed`언어 이다.
그래서 자바스크립트와 다르게 타입스크립트는 위에서 확인했듯이 컴파일 환경에서 에러가 발생하고 에러 발생시 컴파일을 해주지 않고 터미널에 에러를 띄워준다.
그렇기 때문에 타입스크립트는 컴파일 과정에서 에러를 잡아 주게 될 것이고 자바스크립트처럼 런타임환경에서 발생하는 에러를 컴파일 즉 개발단계에서 핸들링해 줄수있다.
이런 이유로 타입스크립트 환경에서 개발된 앱은 자바스크립트로 개발된 앱에 비해 훨씬 안정감있게 운영이 될 것이다.

---

## 다시 typescript로 돌아가서...

### 함수에서 타입 정의하기

이번에는 함수에서 타입을 정의해 보겠습니다.

```js
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);
```

위의 코드 처럼 타입스크립트 사용하면 파라미터로 어떤 타입을 넣어야 하는지 알 수 있습니다.
x,y파라미터는 `number`이여야하고 그옆에 `:number`는 이 `sum`이라는 함수가 실행되고 결과물은 `number`이여야 한다고 명시해 주는것입니다.
Number 라고 명시를 해줬는데 return에 number가 아닌 다른 타입이라던가 null과 같은것을 설정해주면 당연히 에러가 납니다.

만약 함수에서 아무것도 리턴을 안한다면 `void`라는것을 결과값 타입으로 지정해 주면됩니다.

```js
function returnNothing(): void {
  console.log("nothing return");
}
```

---

## Interface

`interface`는 클래스나 객체를 위한 타입을 지정할 때 사용하는 문법입니다...하면 너무 이해가 가지 않습니다.
더 자세히 설명하면 인터페이스는 일반적으로 타입체크를 위해 사용되고 변수, 함수, 클래스에 이용할 수 있습니다.
인터페이스는 여러 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것이라 생각하면 이해하기 쉽습니다.

**인터페이스에 선언된 프로퍼티나 메소드의 구현을 강제해서 일관성을 유지할 수 있도록 하는 것 입니다.**

인터페이스가 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하지만 인스턴스를 직접 생성은 할 수 없고 모든 메서드는 추상 메서드 입니다.
하지만 추상 클래스의 추상 메소드와는 다르게 `abstract`키워드는 사용하지 않습니다.
말만 어렵지 막상보면 어렵지 않습니다.

```js
// interface.ts

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
```

여기서 사용된 `Implement`키워드는 해당 클래스가 위에 선언된 `Shape interface`의 조건을 충족하겠다는 뜻이고 당연히 조건을 충족하지 못하면 컴파일 에러가 뜹니다.
이렇게 하고 난 후 `npm build`를 하고 `node dist/interface`를 해보면 78.5398...과 50이라는 결과물을 확인 할 수 있습니다.
그런데 위에서 `width, height, radius`의 타입이 `Number`라는걸 두번이나 설정하게됩니다.
같은 의미를 가지는 코드가 많아지는것은 좋지 못한 코드라 생각합니다.
타입스크립트에서 `constructor`의 파라미터에 `public, private acceessor`을 사용하면 직접 하나하나 설정하는 작업을 생략할 수 있습니다.

```js
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private _width: number, private _height: number) {
    this._width = _width;
    this._height = _height;
  }
  getArea() {
    return this._width * this._height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

```

위와 같이 코드가 조금더 간편히 볼 수 있게 변했습니다.

보시면 `private`쪽에 `width`와 `height`는 언더바로 표시하였습니다.
이것은 클래스 스코프내에서만 작동하는 private을 사용할 떄는 언더바 표시를 해주는 것이 암묵적인 약속으로 개발자들 사이에서 사용된다고 합니다.
잘은 모르겠지만 나중에 유지보수를 할 때 보게되면 해당 값이 어디서 선언되어 어디서 작동하는지 빠르게 파악이 가능할 것 같다는 생각을 합니다.
저는 앞으로 이런식으로 코드를 작성하려구 합니다!

### 일반 객체에서 interface

클래스가 아닌 일반 객체에서 사용하면?

```js
interface Person {
  name: string
  age?: number
}

interface Developer{
  name: string
  age?: number
  skills: string[]
}

const person : Person = {
  name:"Tony",
  age:29
}

const developer:Developer ={
  name:"Chloe",
  age:20,
  skills:["javascript", "typescript"]
}
```

위와 같이 `interface`를 사용해 볼 수 있습니다.
여기서 `age ?:`에서 `?`는 설정을 해줘도 되고 안해줘도 된다는 뜻으로 아래 `person`에서 `age:29`가 없어도 에러가 출력되지 않습니다.
하지만 보시면 `Person, Developer`둘다 같은 `name`과 `age`를 사용합니다.
역시 반복적인 같은 역할을 하는 코드니 없애주겠습니다.

```js
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
```

위 코드처럼 `interface`를 선언시 다른 `interface`를 `extends`해서 상속 받을 수 있습니다.

## Type Alias

`type alias`는 특정 타입에 별칭을 붙혀주는 용도입니다. 객체를 위한 타입, 배열, 그 어떤 타입이던 별칭을 지어줄 수 있습니다.
`interface`랑 굉장히 유사합니다.
차이점으로는 원시값, 유니온 타입, 튜플 등에도 타입을 지정해 줄 수 있습니다.

```js
type Junior = {
  name: string,
  age?: number,
};

type Senior = Junior & {
  skills: string[],
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
```

위에서 `&` 는 intersection으로 두개 이상의 타입을 합쳐줍니다 느낌이 extends와 유사합니다.

근데 지금 `interface`와 `type alias`를 보면서 두개가 너무 유사하게 느껴집니다.
어떤상황에서 우린 어떤걸 써야하냐 궁금한데 아무거나 써도 된다입니다.
그냥 일관성있게만 쓰면됩니다 구버전의 typescript는 두개의 차이가 많이 있었는데 이제는 큰 차이가 없습니다.
하지만 라이브러리를 사용하거나 다른 라이브러리를 위한 타입 지원 파일을 작성 하게 될 때는 `interface`사용을 권장합니다.

참고 : https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

## Enum

enum은 연관된 아이템을 함께 묶어서 표현할 수 있는 수단입니다.

```js

let student = {
  studentID: 20210405,
  studentName: "Tony K",
  age: 29,
  gender: "male",
  subject: "Typescript",
};

interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;
  gender: string;
  subject: string;
}

function getStudentDetail(studentID: number): Student {
  return {
    studentID: 20210405,
    studentName: "Tony K",
    age: 29,
    gender: "male",
    subject: "Typescript",
  };
}

```

여기서 만약 `gender`를 단순 `string`이 아닌 `male, female`로만 지정하고 싶다면 어떻게 해야할까? `enum`을 사용하면 된다.

```js
enum GenderType {
  Male,
  Female,
}

let student = {
  studentID: 20210405,
  studentName: "Tony K",
  age: 29,
  gender: "male",
  subject: "Typescript",
};

interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;
  gender: GenderType;
  subject: string;
}

function getStudentDetail(studentID: number): Student {
  return {
    studentID: 20210405,
    studentName: "Tony K",
    age: 29,
    gender: GenderType.Male,
    subject: "Typescript",
  };
}
```

이런 식으로 `enum`은 연관된 아이템들을 묶어 표현할 수 있다.

## Generics

**제네릭은 타입스크립트에서 함수, 클래스, interface, type을 사용할 때 여러 종류 타입에 대해 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.**

JAVA나 C#과 같은 정적타입 언어에서 함수나 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언해 줘야하는데 타입스크립트 또한 정적 타입 언어 입니다.
때문에 함수나 클래스를 정의 하는 시점에 매개 변수나 반환값의 타입을 선언해 줘야 합니다. 그런데 함수나 클래스를 정의하는 시점에서 매개 변수나 반환값의 타입을 선언하기 힘들 때가 있습니다.

### 함수에서 제네릭 사용

```js
function dontKnowType(param: any): any {
  return {
    param,
  };
}
```

우리는 `param`에 어떤 타입이 올지 모르기 때문에 any라는 타입을 사용했습니다.
물론 오류가 없고 컴파일또한 잘 진행 될 것입니다.
하지만 사실상 타입추론이 모두 깨진것입니다. 이런상황에서 제네릭을 사용합니다.

```js
function dontKnowType<T>(param: T) {
  return {
    param,
  };
}

const knowType = dontKnowType(10);
```

이런식으로 대문자 T와 꺽쇠를 사용하여 설정해 줍니다.
제네릭을 사용하면 타입에 뭐가 들어와도 상관이 없으면서도 사용시 타입이 깨지지 않습니다.

### Interface, Type Alias X Generics

```js
interface Skills<T> {
  list: T[];
}

const skills: Skills<string> = {
  list: ["typescript", "javascript", "redux"],
};
```

Skills<string>라는 타입을 사용하면 Skills타입을 지니고 있는 객체인 List배열은 string[]타입을 지니게 됩니다.
위의 코드에서 interface대신 `type`을 사용하면 type alias에서 generics를 사용하는 겁니다.

### 클래스 X 제네릭

클래스에서 제네릭을 사용해 보겠습니다.

```js
class Queue<T> {
  protected data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | null {
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

```

`protected`는 `private, public`과 같은 `accessor`입니다. 그리고 `private`과 유사히 동작합니다.
하지만 `protected`로 선언된 멤버는 파생 클래스 인스턴스에서 액세스 할 수 있습니다 예로들면

```js
class Tony {
  protected name:string
  constructor(name:string) {this.name = name}
}

class RealTony extends Tony {
  private gender : string

  constructor(name:string, genderL string){
    super(name)
    this.gender = gender
  }
  public introduceTony(){
    return `hello my name is ${this.name} and gender is ${this.gender}`
  }
}

```

```js
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

널의 타입은 `object`이고 이것은 자바스크립트의 버그였다고 말씀드린적이 있었다 여기선
`pop(): 타입명 | 타입명` 을 써야하는데 자바스크립트에서 타입명으로 널을 사용하지 않기 때문에 널을 사용하면 안되고 여기선 `undefined`를 사용해야한다.

accessor 참고 : https://infoscis.github.io/2017/05/20/TypeScript-handbook-classes/
