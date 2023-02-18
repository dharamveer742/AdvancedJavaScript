/* callback functions can also be used to implement asynchronous(functions) programming in  js but callback hell is the problem "callback hell" made our code hard to understand
   :-Inversion of control
   :- complex :- debbugging and handling errors is not easy
   :- error handling can get very difficult with nested callbacks, making us handle errors at every nesting level.


  PROMISE :- Promises are the foundation of asynchronous programming in javascript . 
            A promise is an object returned by an asynchronous function which represents the current state of the operation ( fetch() )
            At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

            With a promise-based API, the asynchronous function starts the operation and returns a Promise object. You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.
*/


// fetch() API,  is the modern, promise-based replacement for XMLHttpRequest.

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {   // passing a handler into then method of returned promise 
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");



/* CHAINING PROMISES 
With the fetch() API, once you get a Response object, you need to call another function to get the response data. 
In this case, we want to get the response data as JSON, so we would call the json() method of the Response object. 
It turns out that json() is also asynchronous. So this is a case where we have to call two successive asynchronous functions.


*/
/*
console.log("chaining promises");
const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
fetchPromise2.then((response)=>{
    responseJSON = response.json();    // an approach similar to callback hell
    responseJSON.then((data)=>{
        console.log(data[0].name);

    })
})  */


console.log("chaining promises");
const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.jso");
fetchPromise2.then((response)=>{
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();   // A Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number
})
.then((data)=>{
    console.log(data[0].name);
})
.catch((error)=>{
    console.error(`could not get products: ${error}`);
})


/* Instead of calling the second then() inside the handler for the first then(), we can return the promise returned by json(), and call the second then() on that return value. 
This is called promise chaining and means we can avoid ever-increasing levels of indentation when we need to make consecutive asynchronous function calls.  */
