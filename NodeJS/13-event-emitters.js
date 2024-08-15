const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//     console.log(`data received`);
// });

// customEmitter.on("response", () => {
//     console.log(`some other logic here`);
// });

// customEmitter.emit("response");

// We can pass arguments in the emit function
customEmitter.on("response", (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
    console.log(`some other logic here`);
});

customEmitter.emit("response", "john", 34);
