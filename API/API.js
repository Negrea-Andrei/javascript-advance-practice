//*Servers that are created for serving data for external use (in websites or apps) are often referred to as APIs or ‘Application Programming Interfaces’.

/*There are multiple ways of requesting data from an API, but all of them basically do the same thing. For the most part, 
APIs are accessed through URLs, and the specifics of how to query these URLs change based on the specific service you are using. 
For example, WeatherAPI has several types of data that you can request. To get the current weather in a specific location, 
you can pass in the name of a city (optionally, you can also pass a zip code & even an ip-address!) as a URL query string parameter*/

/*This brings us to another point about APIs. In most cases, you will have to create an account and request an “API key”
from the API service before attempting to fetch data from their endpoints.
 Once obtained, an API key will usually have to be included with every data request, such as another URL query string parameter*/

 /*On one hand, issuing API keys allows an API service to better track abuse of their systems and data. On the other hand, 
 it can also be a way for those services to mitigate and recuperate operating costs.*/

 //!Because your API key is your key to these services and data, securing them is an important habit, especially if you are using a paid tier.

 //!Fetch

 //*Web browsers have begun to implement a new native function for making HTTP requests, and that’s the one we’re going to use and stick with for now. Meet fetch:

// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });

//!CORS ==> read this! https://javascript.info/fetch-crossorigin