    let boy = document.querySelector(".boy");
    let left = document.querySelector(".left");
    let middle = document.querySelector(".middle");


    function Person(name, occupation, clothing) {
        this.name = name;
        this.occupation = occupation;
        this.clothing = clothing;
    }

    Person();

    function randomizer() {
        let random = Math.floor(Math.random() * 3);
        let occupation = ["ranger", "warrior", "mage"];
        let clothing = ["leather clothing", "iron armor", "tattered rags"];
        let randomPerson = new Person(faker.name.findName(), occupation[random], clothing[random]);
        let description = [randomPerson.name + " is a " + occupation[random] + ", wearing " + clothing[random]];
        left.textContent = randomPerson.name;
        middle.textContent = description;
        console.log(randomPerson.name)
        console.log(randomPerson);
    }

    randomizer();

    boy.onclick = function () {
        randomizer();
    }