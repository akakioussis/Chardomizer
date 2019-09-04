// /* Objects */

// function Occupation(name) {
//     this.name = name;
// }

// function Clothing(name, quality) {
//     this.name = name;
//     this.quality = quality;
// }

// function Person(name) {
//     this.name = faker.name.findName();
//     this.occupation = new Occupation("Unemployed");

//     this.setOccupation = function (occupation) {
//         this.occupation = occupation;
//     };

//     this.setClothes = function (clothes) {
//         this.clothes = clothes;
//     };
// }


// /* Other stuff */
// let left = document.querySelector(".left");
// let middle = document.querySelector(".middle");


// const occupations = [new Occupation("Warrior"), new Occupation("Mage"), new Occupation("Ranger")];
// const clothes = [new Clothing("Leather", "Common"), new Clothing("Copper Chestplate", "Uncommon")];

// function getRandom(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }

// function generatePerson() {
//     let person = new Person(faker.name.findName());
//     person.setOccupation(getRandom(occupations));
//     person.setClothes(getRandom(clothes));
//     console.log(person);
//     return person;
// }

// function displayPerson(person) {
//     left.textContent = person.name;
//     middle.textContent = person.name + " is a " + person.occupation.name;
// }

// // function displayPerson() {
// //     left.textContent = person.name;
// //     middle.textContent = person.name + " is a " + person.occupation.name;
// // }

// document.querySelector(".boy").onclick = function () {
//     generatePerson();
//     displayPerson();
// }

// // displayPerson();




/* Objects */

function Occupation(name) {
    this.name = name;
}

function Clothing(name, quality) {
    this.name = name;
    this.quality = quality;
}

function Person() {
    this.name = faker.name.findName();
    this.occupation = new Occupation("Unemployed");

    this.setOccupation = function (occupation) {
        this.occupation = occupation;
    };

    this.setClothes = function (clothes) {
        this.clothes = clothes;
    };
}

/* Other stuff */
const occupations = [new Occupation("Warrior"), new Occupation("Mage"), new Occupation("Ranger")];
const clothes = [new Clothing("Leather", "Common"), new Clothing("Copper Chestplate", "Uncommon")];

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePerson() {
    let person = new Person();

    person.setOccupation(getRandom(occupations));
    person.setClothes(getRandom(clothes));

    return person;
}

function displayPerson(person) {
    document.querySelector(".left").textContent = person.name;
    document.querySelector(".middle").textContent = person.name + " is a " + person.occupation.name;
}

document.querySelector(".boy").onclick = function () {
    let generatedPerson = generatePerson();
    displayPerson(generatedPerson);
};