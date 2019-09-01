    let boy = document.querySelector(".boy");
    let left = document.querySelector(".left");
    let middle = document.querySelector(".middle");


    function Person(name, occupation, clothing) {
        this.name = name;
        this.occupation = occupation;
        this.clothing = clothing;
    }

    function randomizer() {
        let randomName = faker.name.findName(); // Caitlyn Kerluke
        let occupation = ["ranger", "warrior", "mage"];
        let clothing = ["leather clothing", "iron armor", "tattered rags"];
        let random = Math.floor(Math.random() * 3);
        let description = [randomName + " is a " + occupation[random] + ", wearing " + clothing[random]];
        left.textContent = randomName;
        middle.textContent = description;
        console.log(randomName);
        console.log(randomPerson);
        let randomPerson = new Person(faker.name.findName(), "Tit Fucker", "Trap socks");
    }


    randomizer();

    boy.onclick = function () {
        randomizer();
    }