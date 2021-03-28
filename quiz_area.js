player1_name = localStorage.getItem("mathPerson1");
player2_name = localStorage.getItem("mathPerson2");
symbolz = "x";

function ready_up(){
    document.getElementById("player1_name").innerHTML =player1_name+":";
    document.getElementById("player2_name").innerHTML =player2_name+":";
    document.getElementById("quizzerinator").innerHTML =player1_name;
    document.getElementById("answerinator").innerHTML =player2_name;
}
function next_up_is(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    equation = number1 + symbolz + number2+"<br>";
    inputplace = "<h4>Answer:</h4> <input id='answer'><br>";
    button = "<button onclick='checkers()' class='btn btn-info'>confirm</button>";
    document.getElementById("output").innerHTML = equation + inputplace + button;
}