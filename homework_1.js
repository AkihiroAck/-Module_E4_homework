// Написать, функцию, которая принимает в качестве аргумента объект и
// выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.


const person = {city: "Moscow"}

const student = Object.create(person);

student.ownCity = "Piter";
student.ownTest = "Test";


function getOwnProperty(obj) {
  Object.getOwnPropertyNames(obj).forEach(e => {
    console.log(`${e}: ${obj[e]}`);
  });
};

getOwnProperty(student)

