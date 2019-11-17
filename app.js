//code to extract cities from wikipedia.org

var city = Array.prototype.slice.call(document.querySelectorAll('td > a'));
var names = [];
function findCities (arr){ for (let i=0; i<arr.length; i++) {if (typeof arr[i].innerHTML === "string"); {names.push(arr[i].innerHTML);}} return names;}
findCities(city);
console.log(JSON.stringify(names));







let cities = [];



//function will take parameters of a state string and a state array of cities
function findAMatch (str, arr){
  //create an array of consonants for state string
  var state = str.match(/[b-df-hj-np-tv-z]/gi);
  var cityName = [];
  //loop through the array of cities
  for (let i=0; i<arr.length; i++){
    var cityU = arr[i];
    var city = cityU.toLowerCase();
    
    cityName = city.match(/[b-df-hj-np-tv-z]/gi);
    // console.log(cityName);
    // console.log(state);
    if (cityName !== null && cityName.length === state.length){
        // console.log(checkIfSame(cityName, state, city));
        if (checkIfDuplicateExists(cityName) === false){
          cities.push(checkIfSame(cityName, state, city));
      }
    }
  } var citiesList = cities.filter(item => item !==undefined);
  return citiesList;
}


function checkIfSame(arr1, arr2, str){
  counter =0;
  for (let j=0; j<arr1.length; j++){
    if (arr2.includes(arr1[j])){
      counter++;
    }
  } if (counter === arr1.length){
    // cities.push(str);
    // console.log(cities);
    return str;
  }
}

function checkIfDuplicateExists(w){
    return new Set(w).size !== w.length 
}

// findAMatch("alabama", alabama);
