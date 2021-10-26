//Samet Hira
//Software Developer

//The const stores the value of an unchangeable number.
const GETAL_EEN = 12;
const GETAL_TWEE = 6;
const GETAL_DRIE = 10;
const GETAL_VIER = 5;
const GETAL_VIJF = 12;

//It calculates the numbers in the order stated in the written theory.
const OPTELLEN = (GETAL_EEN + GETAL_TWEE);
const VERMENIGVULDIGEN = (OPTELLEN * GETAL_DRIE);
const DELEN = (VERMENIGVULDIGEN / GETAL_VIER);
const MINNEN = (DELEN - GETAL_VIJF );

//After calculating the numbers, it stores the last calculated number.
const UITSLAG = MINNEN;

//It shows the result of the calculation on the website.
document.write("<br><br>12+6*10/5-12= " + UITSLAG); 