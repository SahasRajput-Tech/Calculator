//Calculator Program
const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}
function clearDisplay{
display.value = "";
}

function calculate(){
  try{

  }
  catch(error){
    display.value = eval(display.value);
  }
  }