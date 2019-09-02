    let left = document.querySelector(".left");
    let middle = document.querySelector(".middle");
    let occupation = ["ranger", "warrior", "mage"];
    let clothing = [new Clothing("Leather Armor", "simple"), new Clothing("Iron Armor", "masterwork"), new Clothing("Hide Rags", "shitty")];

    function Person(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    function Clothing(material, quality) {
        this.material = material;
        this.quality = quality;
    }

    function randomizer() {
        let random = Math.floor(Math.random() * 3);
        let randomPerson = new Person(faker.name.findName(), occupation[random]);
        let randomClothing = new Clothing(clothing[random].quality, clothing[random].material);
        let description = randomPerson.name + " is a " + occupation[random] + ", wearing a " + clothing[random].quality + " " + clothing[random].material;

        left.textContent = randomPerson.name;
        middle.textContent = description;

        console.log(randomPerson);
        console.log(randomClothing);
    }

    randomizer();

    document.querySelector(".boy").onclick = function () {
        randomizer();
    }