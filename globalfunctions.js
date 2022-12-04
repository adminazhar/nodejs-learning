console.log("Hi Node.js");

setTimeout(() => {
    console.log("Hello Timeout");
    clearInterval(x);
}, 3000);

const x = setInterval(() => {
    console.log("Hell Interval");
}, 1000);