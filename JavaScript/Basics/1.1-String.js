var firstName = "Bhagya";
var lastName = "Yasarathna";

// Escape Charactor
// \'  :  Single quote
// \"  :  Double quote
// \\  :  Blackslash
// \n  :  newline
// \r  :  Carriage return
// \t  :  Tab
// \b  :  Backspace
// \f  :  Form feed
var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

var myStr = "FirstLine\n\t\\SecondLine\nThirdline";
console.log(myStr);

// Concatenating String

var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

// Length of a String

var firstName = "Bhagya";
var firstNameLength = firstName.length;
console.log(firstNameLength);

// Accessing Characters in a String Using Indexing
var firstName = "Bhagya";
console.log(firstName[0]);

// Strings are Immutable. Here the meaning is not that the string cannot be changed. But the individual characters cannot be changed. But the whole string chan be changed.
firstName[0] = "Y";
console.log(firstName);
// Eventhough we set the first letter to be 'Y', this still outputs the "Bhagya" as firstName

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result +=
        "The " +
        myAdjective +
        " " +
        myNoun +
        " " +
        myVerb +
        " to the store " +
        myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
