
// CREATE NEW TRIP OBJECT

function trip(tripName, startCity, startState, destCity, destState, tripLength, fuelPrice, carMPG, fuelCost) {
  this.tripName = tripName;
  this.startCity = startCity;
  this.startState = startState;
  this.destCity = destCity;
  this.destState = destState;
  this.tripLength = tripLength;
  this.fuelPrice = fuelPrice;
  this.mpg = carMPG;
  this.fuelCost = fuelCost;
};

// SAVE AND DISPLAY TRIP BUTTON

var savedTrips = [];

displayTripBtn.addEventListener('click', saveAndDisplayTrip);

function saveAndDisplayTrip(elem) {
  elem.preventDefault();
  
  var currTripName = document.getElementById("tripName").value;
  var currStartCity = document.getElementById('startCity').value;
  var currStartState = document.getElementById('startState').value;
  var currDestCity = document.getElementById('destCity').value;
  var currDestState = document.getElementById('destState').value;
  
  initialDisplay.style.display = "none";
  secondDisplay.style.display = "block";
  
  if (localStorage.savedTrips) {
    savedTrips = JSON.parse(localStorage.getItem('savedTrips'));
  }
  
  var currentTrip = new trip(currTripName, currStartCity, currStartState, currDestCity, currDestState, '', '', '');
  savedTrips.push(currentTrip);
  console.log(savedTrips);
  
  var link = document.getElementById("googleMap");
  link.src = 'https://www.google.com/maps/embed/v1/directions?origin=' + currStartCity + ',+' + currStartState + ',+United+States&destination=' + currDestCity + ",+" + currDestState + ',+United+States&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU';
    
  localStorage.setItem('savedTrips', JSON.stringify(savedTrips));
};


// DETERMINE COSTS BUTTON

var listName;
determineCostBtn.addEventListener('click', saveAndDisplayCosts);

function saveAndDisplayCosts(elem) {
  elem.preventDefault();
  var tripLength = document.getElementById('tripLength').value;
  var fuelPrice = document.getElementById("fuelPrice").value;
  var carMPG = document.getElementById('carMPG').value;
  
  var totalFuelPrice = Math.floor(tripLength / carMPG * fuelPrice)
  
  document.getElementById("resultDisplay").innerHTML = '$' + totalFuelPrice;

  initialDisplay.style.display = 'none';
  secondDisplay.style.display = 'none';
  finalDisplay.style.display = 'block';
  
  savedTrips[savedTrips.length - 1].fuelCost = totalFuelPrice
  savedTrips[savedTrips.length - 1].tripLength = tripLength
  savedTrips[savedTrips.length - 1].fuelPrice = fuelPrice
  savedTrips[savedTrips.length - 1].mpg = carMPG
  
  localStorage.setItem('savedTrips', JSON.stringify(savedTrips));
};



