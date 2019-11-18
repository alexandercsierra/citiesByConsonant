//code to extract cities from wikipedia.org

// var city = Array.prototype.slice.call(document.querySelectorAll('td > a'));
// var names = [];
// function findCities (arr){ for (let i=0; i<arr.length; i++) {if (typeof arr[i].innerHTML === "string"); {names.push(arr[i].innerHTML);}} return names;}
// findCities(city);
// console.log(JSON.stringify(names));







let cities = [];



//function will take parameters of a state string and a state array of cities
function findAMatch (str, arr){
  
  var stateComp = str.toLowerCase();
  //create an array of consonants for state string
  var state = str.match(/[b-df-hj-np-tv-z]/gi);
  var cityName = [];
  var numOfCities = cityName.length;
  //loop through the array of cities
  for (let i=0; i<arr.length; i++){
    var cityU = arr[i];
    var city = cityU.toLowerCase();
    
    cityName = city.match(/[b-df-hj-np-tv-z]/gi);

    if (cityName !== null && cityName.length === state.length){

        if (checkIfDuplicateExists(cityName) === false){
            let dupCity = checkIfSame(cityName, state, city);
            //prevents duplicates from being added to the final array
            if (cities.includes(dupCity) === false){
                cities.push(dupCity);
                if (dupCity === stateComp && dupCity !== "new york"){
                    cities.pop();
                    return "no match";
                }
            }
        //   cities.push(checkIfSame(cityName, state, city));
        } 
    }
  } var citiesList = cities.filter(item => item !==undefined);
  if (citiesList.length > 0) {
    return "The current list of matching cities: " + citiesList;
  } else {
      return "nothing yet";
  }
//   return "The current cities found to have the same consonants as their state are: " + citiesList;
}


function checkIfSame(arr1, arr2, str){
  counter =0;
  for (let j=0; j<arr1.length; j++){
    // if (str === "new york" && arr1[j] === "new york"){
    //     console.log(str);
    //     console.log(arr[j]);
    //     return "new york";
    // }
    // else 
    // if (arr2.includes(arr1[j]) && arr1[j] !== "new york"){
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
