/* The JavaScript provides "use strict"; expression to enable the strict mode. If there is any silent  error or mistake in the code, it throws an error. 
EX: x=10; console.log(x); 
This will give output but actually we have not declared x variable if we use "use strict" then it will throw an error.  */ 

'use strict';

const api_key = 'fd263bbe773d72928125405bd405400f';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// Fetch data from the server using `url` & pass the result in JSON data using `callback` function

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };