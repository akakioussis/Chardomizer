    var randomName = faker.name.findName(); // Caitlyn Kerluke
    var randomEmail = faker.internet.email(); // Rusty@arne.info
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties]
    var boy = document.querySelector(".boy");
    var left = document.querySelector(".left");
    var middle = document.querySelector(".middle");
    var occupation = [" ranger ", " warrior ", " mage "];
    var clothing = [" rags ", " steel armor ", " snakeskin "];
    var random = Math.floor(Math.random() * 2);
    var description = [randomName + " is a " + occupation[random] + ", wearing " + clothing.random];

    boy.onclick = function () {
        left.textContent = randomName;
        middle.textContent = description;
        console.log(randomName);
    }