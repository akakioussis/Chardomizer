    let randomName = faker.name.findName(); // Caitlyn Kerluke
    let randomCard = faker.helpers.createCard(); // random contact card containing many properties]
    let boy = document.querySelector(".boy");
    let left = document.querySelector(".left");
    let middle = document.querySelector(".middle");

    function randomizer() {
        let randomName = faker.name.findName(); // Caitlyn Kerluke
        let occupation = ["ranger", "warrior", "mage"];
        let clothing = ["leather clothing", "iron armor", "tattered rags"];
        let random = Math.floor(Math.random() * 3);
        let description = [randomName + " is a " + occupation[random] + ", wearing " + clothing[random]];
        left.textContent = randomName;
        middle.textContent = description;
        console.log(randomName);
    }

    // boy.onclick = randomizer();
    boy.onclick = function () {
        randomizer();
    }