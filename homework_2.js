// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.


const person = {city: "Moscow"}

const student = Object.create(person);

student.ownCity = "Piter";
student.ownTest = "Test";


function hasProperty(propName, obj) {
  // return obj.hasOwnProperty(propName); // если нужно проверисть Собственные свойства
  return propName in obj; // если нужно проверисть Все доступные свойства
}

console.log(hasProperty('ownCity', student));
console.log(hasProperty('city', student));
console.log(hasProperty('grade', student));