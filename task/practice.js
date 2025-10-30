// ================================
// 1. PROMISES
// ================================
// A Promise represents a value that may be available now, later, or never.

const fetchDataPromise = new Promise((resolve, reject) => {
    const success = true; // simulate API call success
    if (success) {
        resolve("Promise resolved: Data received!");
    } else {
        reject("Promise rejected: Error fetching data.");
    }
});

// Using .then() and .catch() to handle result
fetchDataPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// ================================
// 2. ASYNC / AWAIT
// ================================
// Makes asynchronous code look like synchronous code.

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Async/Await: Data received!"), 2000);
    });
}

async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();

// ================================
// 3. EVENT LOOP
// ================================
// JS runs synchronous code first, then handles async tasks from the queue.

console.log("Event Loop Start");

setTimeout(() => {
    console.log("Inside setTimeout (0ms)");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise.then");
});

console.log("Event Loop End");

// Expected output order:
// Event Loop Start
// Event Loop End
// Inside Promise.then
// Inside setTimeout (0ms)

// ================================
// 4. DEBOUNCING
// ================================
// Function runs only after user stops performing an action (like typing).

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// Simulate search API call
function searchAPI(query) {
    console.log("Debounce API Call for:", query);
}

// Simulate user typing
const simulatedTyping = debounce(searchAPI, 500);
simulatedTyping("J");
simulatedTyping("Ja");
simulatedTyping("Jav");
simulatedTyping("JavaScript");
// Only the last call will trigger after 500ms

