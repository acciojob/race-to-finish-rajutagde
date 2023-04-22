window.promises = [];
window.promises = [];

for (let i = 0; i < 5; i++) {
promises.push(
new Promise((resolve) => {
const delay = Math.floor(Math.random() * 5) + 1;
setTimeout(() => resolve(delay), delay * 1000);
})
);
}
// Do not change the code above this
// add your promises to the array `promises`
