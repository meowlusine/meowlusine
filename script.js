function Darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

}

var text = ["Mélusine PULIERO","Engineering student"];
var counter = 0;
var elem = document.getElementById("titre");
setInterval(change,4000);

function change(){
  elem.innerHTML = text[counter];
  if(counter+1 >= text.length){
    counter = 0;
  }
  else{
    counter++;
  }
 
}

