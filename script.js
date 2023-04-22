window.promises = [];

for (let i = 0; i < 5; i++) {
promises.push(
new Promise((resolve) => {
const delay = Math.floor(Math.random() * 5) + 1;
setTimeout(() => resolve(delay), delay * 1000);
})
);
}

Promise.any(promises).then((result) => {
const output = document.getElementById("output");
output.innerText = Resolved after ${result} second(s);
});