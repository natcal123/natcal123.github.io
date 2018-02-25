// get my input element
var input =
document.getElementById("input")
console.log(input)


// detect when user types in input
myInput.addEventListener("input", onInput)

function onInput() {
  // check if their input  == passward
  var passward = "secret"

  if (passward == myInput.value) {
    // if they match, show beach.jpg
    console.log("password match")

    var myImg = document.createElement("img")

    myImg.src = "beach.jpg"

    document.bofy.appendChild(myImg)
  } else {
    console.log("no match")

  }

}
