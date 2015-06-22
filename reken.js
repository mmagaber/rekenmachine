
var antwoord = "";
var secondvalue = "";
var operator = "";
var nummer = "";

function calcinput(getal)
{
    //console.log("clac input ");
    //alert("calc input");
    nummer+= getal;
    document.getElementById("scherm"). value += nummer;

}


function multiply(){

    operator = "*";
    document.getElementById("scherm").value += "*";
    secondvalue = nummer;
    nummer = "";

}



function divide(){

    operator = "/";
    document.getElementById("scherm").value += "/";
    secondvalue = nummer;
    nummer = "";

}

function add(){
    operator = "+";
    document.getElementById("scherm").value += "+";
    secondvalue = nummer;
    nummer = "";
}

function substract(){
    operator = "-";
    document.getElementById("scherm").value += "-";
    secondvalue = nummer;
    nummer = "";
}


function compute(){




    nummer = parseInt(nummer);
    secondvalue = parseInt(secondvalue);

    //console.log(nummer);
    //console.log(secondvalue);
    //console.log(operator);
    //console.log("compute functie");

    switch (operator){
        case "*":
            antwoord = secondvalue * nummer;
            break;
        case "/":
            antwoord = secondvalue / nummer;
            break;
        case "+":
            antwoord = secondvalue + nummer;
            break;
        case "-":
            antwoord = secondvalue - nummer;
            break;

    }
    document.getElementById("scherm").value = antwoord;
    nummer = "";
    secondvalue = "";

}

function clr()
{
    //console.log("clear functie");
    nummer = "";
    operator = "";
    document.getElementById("scherm").value = "";
}