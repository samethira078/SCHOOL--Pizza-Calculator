//Samet Hira
//Software Developer

//It starts a function and only succeeds to work if the user has pressed the button associated with the "onclick" line.
function pizzaBerekenen(){

/* Prompt for the user to enter a number per size. 
If it's a number, it continues, if not, it keeps asking until the person enters a number. */
var small_pizza = prompt("Hoeveel Small Size pizza's wilt u?");
while(isNaN(small_pizza)){
small_pizza = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
}
var medium_pizza = prompt("Hoeveel Medium Size pizza's wilt u?");
while(isNaN(medium_pizza)){
medium_pizza = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
}
var large_pizza = prompt("Hoeveel Large Size pizza's wilt u?");
while(isNaN(large_pizza)){
large_pizza = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
}

//It calculates the price per size by multiplying the price by the quantity.
const SMALL = Number(small_pizza) * 8;
const MEDIUM = Number(medium_pizza) * 10;
const LARGE = Number(large_pizza) * 13;

//Delivery charges.
const VERZENDKOSTEN = 3.99;

//Counts the sizes together.
const OPGETELD = Number(SMALL) + Number(MEDIUM) + Number(LARGE);

//Adds the delivery charges to the total prize.
const TOTAAL = OPGETELD + VERZENDKOSTEN;

//Checks that the total price is less than 50 and not more than 50 to add delivery costs.
if(OPGETELD < 50 || !OPGETELD > 50){

//Shows the total calculated size prize to each dimension.
document.write("Kosten voor Small Pizza's in totaal: €" + SMALL + "<br>");
document.write("Kosten voor Medium Pizza's in totaal: €" + MEDIUM + "<br>");
document.write("Kosten voor Large Pizza's in totaal: €" + LARGE + "<br>");

//Shows the total prize including delivery costs.
document.write("<br>Totaal: €" + OPGETELD + " met verzendkosten van €" + VERZENDKOSTEN + " = €" + TOTAAL + "</br>");}

//If the customer ordered a total price of more than 50 euros, it continues with the same steps excluding delivery costs.
else{

////Shows the total calculated size prize to each dimension.
document.write("Kosten voor Small Pizza's in totaal: €" + SMALL + "<br>");
document.write("Kosten voor Medium Pizza's in totaal: €" + MEDIUM + "<br>");
document.write("Kosten voor Large Pizza's in totaal: €" + LARGE + "<br>");

//Total prize excluding delivery costs.
document.write("<br>Totaal: €" + OPGETELD + "</br>");}
}