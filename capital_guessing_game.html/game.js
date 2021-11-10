


let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playagainButton = document.querySelector('#playagain')

// TODO display the country's name in the randomCountryElement 
let  randomCountries = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)];

randomCountryElement.innerHTML = randomCountries.name

// TODO add a click event handler to the submitButton.  When the user clicks the button,
submitButton.addEventListener('click',function(){

    let userInput = userAnswerElement.value
    // read the text from the userAnswerElement 
    let url = `https://api.worldbank.org/v2/country/${randomCountries['alpha-2']}?format=json`

// fetching data /   Use fetch() to make a call to the World Bank API
    fetch(url)
    .then( (res) => res.json())
        .then( (CountryData) => {
            console.log(CountryData)
            let capitalCities = CountryData[1][0]['capitalCity']
            // 
            // make the comparison case insensitive. if the user input is lowercase 
            if(userInput.toLowerCase() == capitalCities.toLowerCase()){

                // display an appropriate message in the resultTextElement to tell the user if they are right or wrong
                resultTextElement.innerHTML = " That is Correct"
                
            }else{

                resultTextElement.innerHTML = " Wrong Try again"       
             }
        })

    })


// TODO finally, connect the play again button.

playagainButton.addEventListener('click', function(){

randomCountries = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)];

randomCountryElement.innerHTML = randomCountries.name

//  Clear the user's answer, select a new random country,
resultTextElement.innerHTML = '' 

userAnswerElement.value = ''


 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 
   

})

console.log(countriesAndCodes) 


// 1 )TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.
 // You don't need to log countriesAndCodes - just proving it is available 


// 2) TODO when the page loads, select an element at random from the countriesAndCodes array

// 3) TODO display the country's name in the randomCountryElement 

// 4) TODO add a click event handler to the submitButton.  When the user clicks the button,
//  5) read the text from the userAnswerElement 
//  6) Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  7)Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
// 8) If the API call was successful, extract the capital city from the World Bank API response.
//  9)Compare it to the user's answer. 
//  10) You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  11) Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

// 