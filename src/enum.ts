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
