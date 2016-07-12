var savedTrips = []

// SAVED LISTS BUTTON

savedListsBtn.addEventListener('click', handleDisplayLists);

function handleDisplayLists(elem) {
  elem.preventDefault();

  if (localStorage.savedTrips) {
    savedTrips = JSON.parse(localStorage.getItem('savedTrips'));
  } else {
    alert("No lists saved.")
  }
  
  for (var i=0;i<savedTrips.length;i++) {
    document.getElementById("listResults").innerHTML += "<h2 id=listHeader>'" + savedTrips[i].tripName + "' - " + savedTrips[i].startCity + ", " + savedTrips[i].startState + "  to  " + savedTrips[i].destCity + ", " + savedTrips[i].destState + "</h2>";
    
    var mapSource = 'https://www.google.com/maps/embed/v1/directions?origin=' + savedTrips[i].startCity + ',+' + savedTrips[i].startState + ',+United+States&destination=' + savedTrips[i].destCity + ",+" + savedTrips[i].destState + ',+United+States&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU';
    document.getElementById("listResults").innerHTML +='<div class="mapContainer"><div id="gmap_display" class="heiWid" style="background:none"><iframe id="googleMap" class="heiWid" frameborder="0" src="' + mapSource + '"></iframe></div></div>'
    document.getElementById("listResults").innerHTML += '<div id="rightContent"><p> With a total trip distance of ' + savedTrips[i].tripLength + ' miles</p></div>';
    document.getElementById("listResults").innerHTML += "<p> An average fuel cost of $" + savedTrips[i].fuelPrice + "</p>";
    document.getElementById("listResults").innerHTML += "<p> An average MPG rating of " + savedTrips[i].mpg + " miles per gallon</p>";
    document.getElementById("listResults").innerHTML += "<p> The total estimate fuel cost for this trip was:<p>"
    document.getElementById("listResults").innerHTML += '<p id="resultDisplay"> $' + savedTrips[i].fuelCost + '</p>';
  }
};

// DELETE ALL LISTS

deleteAllLists.addEventListener('click', handleDeleteClick);
function handleDeleteClick(elem) {
  elem.preventDefault()
  alert("All lists successfully deleted!");
  localStorage.clear();
};









