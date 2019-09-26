function checkvalue() {
  var text;
  var lang = document.getElementById("inputValue").value;

  switch(lang) {
    case "JavaScript":
    text = "Yay!" ;
    break;
    case"HTML":
    text = "Ok"
    case "CSS":
    text = "Right";
    break;


    // add case Here

default:
    text = "You need to enter something!";
  }
  document.getElementById("displayText").innerHTML = text;
}
