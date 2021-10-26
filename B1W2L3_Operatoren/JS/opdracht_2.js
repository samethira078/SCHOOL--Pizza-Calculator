//Samet Hira
//Software Developer

//It starts a function and only succeeds to work if the user has pressed the button associated with the "onclick" line.
function mijnAntwoord(){

//It searches for the ID of an HTML line and grabs its user-typed input value.
var input = document.getElementById("number").value;

//Checks if the user has entered a number or has not entered anything.
if(isNaN(input) || input == ""){
alert("Je hebt geen nummer ingevoerd. Probeer het opnieuw.")}

//Checks that the user has not entered 0.
else if(input == "0"){
alert("Tafel van 0 werkt niet. Probeer het opnieuw.");} 
			
//If the rules above are false, it continues to calculate the table.
else {
document.write("<h1>" + "Tafel van " + input + "</h1>");
for (let num = 1; num < 11; num++){
document.write(num * input + "<br>")
}}};
