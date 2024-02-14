var dog = {
    status: "available",
    data: {
        animal: "dog",
        breed: "volchara",
        sterilized: "no",
        location: "Odesa",
        age: 2,
    },
};
var animalNotAvailable = {
    status: "not available",
    data: {
        message: "Unfortunately not awailable now ;( But visit us later!",
        nextUpdateIn: new Date("December 17, 2023 03:24:00"),
    },
};
function isAvailable(animal) {
    return animal.data.breed !== undefined;
}
function checkAnimalData(animal) {
    if (isAvailable(animal)) {
        return animal.data;
    }
    else {
        return "".concat(animal.data.message, ", you can try in ").concat(animal.data.nextUpdateIn);
    }
}
console.log(checkAnimalData(dog));
console.log(checkAnimalData(animalNotAvailable));
