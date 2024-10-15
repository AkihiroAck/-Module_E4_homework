// Задание: Переписать консольное приложение из предыдущего юнита на классы.

// P.S.
// Я не понял о каком консольном приложении именно говорилось, т.к. готового приложения особо не было. 
// Кодом экспериментировалось до конца вебинара.
// Я написал похожий код с похожими функциями конструкторами и перевел их в класс ниже, после знаков "-----".
// Надеюсь на понимание.


function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + ' издает звук.');
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function () {
  console.log(this.name + ' гавкает!');
};

const myDog1 = new Dog('Бобик', 'Терьер');
myDog1.speak(); // Вывод: Бобик гавкает!


// -------------------------------------------------------------


class AnimalClass {
  constructor(name) {
    this.name = name;
  };

  speak() {
    console.log(this.name + ' издает звук.');
  };
};

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  };

  speak() {
    console.log(this.name + ' гавкает!');
  };
};


const myDog2 = new DogClass('Бобик', 'Терьер');
myDog2.speak() // Вывод: Бобик гавкает!
