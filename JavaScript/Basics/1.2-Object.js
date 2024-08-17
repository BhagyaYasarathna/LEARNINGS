var ourDog = {
    name: "Camper",
    legs: 4,
    tails: 1,
    friends: ["everything"],
};

// Accessing Object Properties

var nameValue = ourDog.name;
var legsValue = ourDog.legs;

var tailsValue = ourDog["tails"];

// Updating Object Properties

ourDog.name = "Happy Camper";

// Adding New Properties to an Object

ourDog["bark"] = "woof";

// Deleting Properties from an Object

delete ourDog.bark;

// Testing Objects for Properties

console.log(ourDog.hasOwnProperty("name"));

// Complex Objects

var myMusic = [
    {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: ["CD", "8T", "LP"],
        gold: true,
    },
    {
        artist: "Bhagya Yasarathna",
        title: "Piano Woman",
        release_year: 1972,
        formats: ["CD", "YT", "LP"],
        gold: true,
    },
];

// Nested Objects

var myStorage = {
    car: {
        inside: {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        outside: {
            trunk: "jack",
        },
    },
};

var gloveBoxContainer = myStorage.car.inside["glove box"];

// Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"],
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"],
    },
];
var secondTree = myPlants[1].list[1];

// Record Collections : Every element has an id

var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It rock", "You Give Love a Bad Name"],
    },
    2648: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It rock", "You Give Love a Bad Name"],
    },
    2748: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It rock", "You Give Love a Bad Name"],
    },
};
// Making a Copy of the Original Collection
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
    if (value == "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(2648, "artist", "Bhagya Yasarathna"));
