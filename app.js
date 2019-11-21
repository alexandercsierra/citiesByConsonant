//code to extract cities from wikipedia.org

// var city = Array.prototype.slice.call(document.querySelectorAll("td > a"));
// var names = [];
// function findCities(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i].innerHTML === "string");
//     {
//       names.push(arr[i].innerHTML);
//     }
//   }
//   return names;
// }
// findCities(city);
// console.log(JSON.stringify(names));

var body = document.querySelector("body");
var input = document.querySelector("input");
var button = document.querySelector("button");
var feedback = document.querySelector(".feedback");
var currentList = document.querySelector(".currentList");
var reset = document.querySelector(".reset");
var secondPara = document.querySelector(".secondPara");
var firstPara = document.querySelector(".firstPara");
var citiesList = [];

// var inputVal = input.value;

button.addEventListener("click", function(e) {
  feedback.textContent = "";
  
  e.preventDefault();
  var inputVal = input.value;
  if (states.includes(inputVal.toLowerCase())) {
    for (let i = 0; i < states.length; i++) {
      if (states[i] === inputVal.toLowerCase()) {
        // console.log (states[i], stateVars[i]);
        // return "yay, here's your array" + stateVars[i];
        findAMatch(inputVal.toLowerCase(), stateVars[i]);
        // console.log(citiesList);
        //why returns two of the second?
        currentList.textContent = currentCities(citiesList);
        
      }
    }
  } else {  
    feedback.textContent = "Oops enter a valid state name, please";
    input.value="";
    
  }
  inputVal = "";
});

reset.addEventListener("click", function(e){
  location.reload();
});





let cities = [];

//function will take parameters of a state string and a state array of cities
function findAMatch(str, arr) {
  body.style.backgroundColor = "black";
  var stateComp = str.toLowerCase();
  //create an array of consonants for state string
  var state = str.match(/[b-df-hj-np-tv-z]/gi);
  var cityName = [];
  var numOfCities = cityName.length;
  //loop through the array of cities
  for (let i = 0; i < arr.length; i++) {
    var cityU = arr[i];
    // console.log(cityU);
    var city = cityU.toLowerCase();


    cityName = city.match(/[b-df-hj-np-tv-z]/gi);

    if (cityName !== null && cityName.length === state.length) {
      if (checkIfDuplicateExists(cityName) === false) {
        let dupCity = checkIfSame(cityName, state, city);
        //prevents duplicates from being added to the final array
        if (cities.includes(dupCity) === false && dupCity !== undefined) {
          cities.push(dupCity);
          body.style.backgroundColor = "green";
          // if (citiesList.length > 0){
          //   let last = citieslength[citiesList.length-1];
          // } else {
          //   last = citiesList.length[0];
          // }
          // feedback.textContent = "Awesome, you found one!" + (last) + ", " + input.value;

          if (dupCity === stateComp && dupCity !== "new york") {
            cities.pop();
            return "No Match";
          }
        }
      }
    }
  }
  citiesList = cities.filter(item => item !== undefined);

  respond(citiesList, arr);
}

function checkIfSame(arr1, arr2, str) {
  counter = 0;
  for (let j = 0; j < arr1.length; j++) {
    // if (str === "new york" && arr1[j] === "new york"){
    //     console.log(str);
    //     console.log(arr[j]);
    //     return "new york";
    // }
    // else
    // if (arr2.includes(arr1[j]) && arr1[j] !== "new york"){
    if (arr2.includes(arr1[j])) {
      counter++;
    }
  }
  if (counter === arr1.length) {
    // cities.push(str);
    // console.log(cities);
    return str;
  }
}

function checkIfDuplicateExists(w) {
  return new Set(w).size !== w.length;
}

function respond(citiesList, arr) {
  let last = citiesList[citiesList.length - 1];
  //create capitalized version of city; or loop through array and change all cities to lowercase
  let match = "";
  let lastMatch = "";
  for (i=0; i<arr.length; i++){
    if (arr[i].toLowerCase() === citiesList[0]){
      match = arr[i];
    } else if (arr[i].toLowerCase() === last){
      lastMatch = arr[i];
    }
  }
  // console.log("This is before the ifs: " + arr.includes(lastMatch));
  // console.log(lastMatch);
  let counter = ["one", "two", "three", "four"];
  if (citiesList.length > 0) {
    console.log(citiesList[0]);
    if (citiesList.length === 1 && (arr.includes(match)=== true)) {
      console.log("first answer");
      feedback.textContent =
        "Awesome, you found one: " + cap(citiesList[0]) + ", " + cap(input.value);
      input.value = "";
    } else if (citiesList.length === 1 && (arr.includes(match)=== false)){
      feedback.textContent = "no match";
      input.value = "";
    }
    else if (citiesList.length > 1 && citiesList.length < 5) {
      if (arr.includes(lastMatch) === true) {
        console.log("some answers");
        feedback.textContent =
          "Awesome, you've found another: " + cap(last) + ", " + cap(input.value) + "! Only " + (5-citiesList.length) + " left to find.";
        input.value = ""; 
        // return "The current list of matching cities: " +  lcitiesList;
      } else {
        feedback.textContent = "Try Again";
        input.value = "";
      } 
    } else if (citiesList.length === 5) {
      console.log("all the answers");
      body.style.backgroundColor = "blue";
      feedback.textContent =
        "Congrats you found them all! Mobile Alabama, Alford Florida, Saline Lousiana, New York New York, and Hawi, Hawaii!";
      firstPara.style.fontSize = "3rem";
      firstPara.style.textAlign = "center";
      firstPara.style.marginTop = "4%";
      firstPara.textContent = "Great Job!";
      reset.classList.remove("hide");
      secondPara.classList.add("hide");
      input.value = "";
    }input.value = "";
  } else {
    feedback.textContent = "No matches here, sorry.";
    input.value = "";
  }
}


function currentCities(arr){
  var str = "Cities found: ";
  

  if (arr.length === 0){
    str = "";
    return str;
  } else if (arr.length === 1){
    str += cap(arr[0]);
    return str;
  } else if (arr.length > 1 && arr.length < 5){
    for (i=0; i<arr.length; i++){
      if (arr[i+1] !== undefined){
        // console.log("This is before concat" + str);
      str += cap(arr[i]) + ", ";
      // console.log("This is after concat" + str);
      } 
      else {
        str += cap(arr[i]);
        console.log("This is in the else:" + str);
        return str;
      }
    }
  } else if (arr.length === 5){
    currentList.textContent = "";
  }
// return str;
}

function cap (str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}




// findAMatch("alabama", alabama);
