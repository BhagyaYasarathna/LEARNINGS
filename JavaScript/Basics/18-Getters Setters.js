// class Book {
//     constructor(author) {
//         this._author = author;
//     }

//     // Getter
//     get writer() {
//         return this._author;
//     }

//     // Setter
//     set writer(updatedAuthor) {
//         this._author = updatedAuthor;
//     }
// }

function makeClass() {
    class Thermostat {
        // when we start a variable with _ , it will become a private variable
        constructor(temp) {
            this._temp = (5 / 9) * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
