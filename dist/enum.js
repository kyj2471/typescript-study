"use strict";
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var student = {
    studentID: 20210405,
    studentName: "Tony K",
    age: 29,
    gender: "male",
    subject: "Typescript",
};
function getStudentDetail(studentID) {
    return {
        studentID: 20210405,
        studentName: "Tony K",
        age: 29,
        gender: GenderType.Male,
        subject: "Typescript",
    };
}
