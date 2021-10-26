//Samet Hira
//Software Developer

//It starts a function and only succeeds to work if the user has pressed the button associated with the "onclick" line.
function mijnSom(){

//Alert that number starts with 12.
alert("Uw begin getal is 12.");

//Starting number.
const GETAL_EEN_INPUT = 12;

/* Prompt for the user to enter a number. 
If it's a number, it continues, if not, it keeps asking until the person enters a number. */
var GETAL_TWEE_INPUT = prompt("Vul uw eerste getal in: ");
while(isNaN(GETAL_TWEE_INPUT)){
GETAL_TWEE_INPUT = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
		}
var GETAL_DRIE_INPUT = prompt("Vul uw tweede getal in: ");
while(isNaN(GETAL_DRIE_INPUT)){
GETAL_DRIE_INPUT = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
		}
var GETAL_VIER_INPUT = prompt("Vul uw derde getal in: ");
while(isNaN(GETAL_VIER_INPUT)){
GETAL_VIER_INPUT = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
		}
var GETAL_VIJF_INPUT = prompt("Vul uw vierde getal in: ");
while(isNaN(GETAL_VIJF_INPUT)){
GETAL_VIJF_INPUT = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");}

//It changes the numbers to int & calculates the numbers in the order stated in the written theory.
const OPTELLEN_INPUT = (Number(GETAL_EEN_INPUT) + Number(GETAL_TWEE_INPUT));
const VERMENIGVULDIGEN_INPUT = (Number(OPTELLEN_INPUT) * Number(GETAL_DRIE_INPUT));
const DELEN_INPUT = (Number(VERMENIGVULDIGEN_INPUT) / Number(GETAL_VIER_INPUT));
const MINNEN_INPUT = (Number(DELEN_INPUT) - Number(GETAL_VIJF_INPUT));

//It shows the result of the calculation on the website with the operators as strings.
document.write(GETAL_EEN_INPUT + "+" + GETAL_TWEE_INPUT + "*" + GETAL_DRIE_INPUT + "/" + GETAL_VIER_INPUT + "-" + GETAL_VIJF_INPUT + "=  " + MINNEN_INPUT); }