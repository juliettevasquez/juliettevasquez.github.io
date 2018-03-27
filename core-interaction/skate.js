
//when a click happens
window.addEventListener("click", onWindowClick)

function onWindowClick(evt) {
  console. log(evt.x, evt.y)
  //figure out where to put it
  var myBike=
  document.getElementById("bike")
  myBike.style.top= evt.y+ "px"
  myBike.style.left = evt.x + "px"

}

//figure out where to put it


//set the top and left CSS of the board
