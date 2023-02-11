// const timesToRepeat = 10;
const samleString = `padla`;
//let answer = ``
//for (let i = 0; i < timesToRepeat; i++) {
//answer = answer + samleString
//}
//console.log (answer)

// Sconsole.log("".padStart(timesToRepeat * samleString.length, samleString));

function addTwo(number) {
  return number + 2;
}
const finalAnswer = addTwo(5);
console.log(finalAnswer);

let string = `Yulia is gonna give me a blowjob`;
string = string.substring(9, 22);
console.log(string);

const sentence = `PaDla HuYadLa`;
const lowercasesentence = sentence.toLowerCase();
console.log(lowercasesentence);

const number = 5.5;
const roundedNumber = Math.round(number);
console.log(roundedNumber);
const testStringOne = `My dick is huge!`;
const testStringTwo = `My dick is small!`;
const testStringThree = `huge`;
console.log(testStringOne.includes(testStringThree));
console.log(testStringThree.includes(testStringTwo));
console.log(Date.now());

//the commons below is stricly recommended for the procedure//
const person = {
  name: `Sergei the Great`,
  city: `kobulety`,
  state: `Georgia`,
  favoriteOccupation: `having sex`,
  wannaSexNow: true,
  numberOfSex: 100,
};
console.log(person);
console.log(person.name);

const person1 = {
  name: `Anna`,
  ageRange: `20-25`,
};

const person2 = {
  name: `Babulya`,
  ageRange: `55-60`,
};

function suggestTheMovie(person) {
  if (person.ageRange === `20-25`) {
    console.log(`I think Muyagi will suits you`);
  } else if (person.ageRange === `55-60`) {
    console.log(`The Homecoming will do`);
  } else {
    console.log(`no one gives a fuck about your dreams, Sergei`);
  }
}

suggestTheMovie(person1);

const Julia = {
  speak() {
    console.log(`woof-woof`);
  },
};
Julia.speak();

const me = {
  name: {
    first: `Sergei`,
    last: `Trifonov`,
  },
  location: {
    street: `sahara`,
    city: `kobuleti`,
    state: `georgia`,
  },
  getAddress() {
    return `${this.name.first} ${this.name.last} ${this.location.street} ${this.location.city} ${this.location.state}`;
  },
};

console.log(me.getAddress());

const primeNumbers = [1, 3, 5, 7, 8, 9];
console.log(primeNumbers.length);
console.log(primeNumbers.join(`!!!`));

const cities = [`Razuvaevka`, `Moscow`, `New-York`, `Amsterdam`, `Phuket`];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
  console.log(i, cities[i]);
  // this time i shows only the number of cities,
  // where cities[i] shows us the cities itself ( city + 1,+1.. according to the function)
  // i + cities[i] give us both variants
}

function logCity(city) {
  console.log(city);
}
cities.forEach(logCity);

const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

const button = document.querySelector(`.event-button`);
button.addEventListener(`click`, function () {
  alert(`hey there!`);
});

const input = document.querySelector(`.work-without-nap`);
const paragrahp = document.querySelector(`.some-p`);

input.addEventListener(`keyup`, function () {
  paragrahp.innerText = input.value;
});

const colorInput = document.querySelector(`.color-input`);
const colorBox = document.querySelector(`.color-box`);

colorInput.addEventListener(`change`, function () {
  colorBox.style.backgroundColor = colorInput.value;
});
document
  .querySelector(`.button-container`)
  .addEventListener(`click`, function (event) {
    alert(`you clicked on button ${event.target.innerText}`);
  });

const secondAttempt = `zadacha`;
let solving = `1`;
for (let i = 0; i < 10; i++) {
  solving = solving + secondAttempt;
}
console.log(solving);

const timesToRepeat = 10;
const character = `dagon`;
let answer = `my`;
for (let i = 0; i < timesToRepeat; i++) {
  answer = answer + character;
}
console.log(answer);
