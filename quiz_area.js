player1_name = localStorage.getItem("mathPerson1");
player2_name = localStorage.getItem("mathPerson2");
symbolz = "x";
player1_score =0;
player2_score =0;


function ready_up(){
    document.getElementById("player1_name").innerHTML =player1_name+":";
    document.getElementById("player2_name").innerHTML =player2_name+":";
    document.getElementById("quizzerinator").innerHTML =player1_name;
    document.getElementById("answerinator").innerHTML =player2_name;
}
function next_up_is(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    final_answer = parseInt(number1) * parseInt(number2);
    equation = number1 + symbolz + number2+"<br>";
    inputplace = "<h4>Answer:</h4> <input id='answer' class='form-control'><br>";
    button = "<button onclick='checkers()' class='btn btn-info'>confirm</button>";
    document.getElementById("output").innerHTML = equation + inputplace + button;
    document.getElementById("number_1").innerHTML = "";
    document.getElementById("number_2").innerHTML = "";

}

function checkers(){
    given_answur = document.getElementById("answer").value;
    currentPlayer = player2_name;
    currentPlayerQ = player1_name;
    if(given_answur == final_answer){
        if(currentPlayerQ == player1_name){
            currentPlayer = player1_name;
            currentPlayerQ = player2_name;
            player1_score = player1_score + 1;
            document.getElementById("player1_correct").innerHTML = player1_score;
            document.getElementById("player2_correct").innerHTML = player2_score - 1;
            document.getElementById("quizzerinator").innerHTML = currentPlayerQ;
            document.getElementById("answerinator").innerHTML = currentPlayer;

        }
        if(currentPlayerQ == player2_name){
            currentPlayer = player1_name;
            currentPlayerQ = player2_name;
            player2_score = player2_score + 1;
            document.getElementById("player2_correct").innerHTML = player2_score;
            document.getElementById("player1_correct").innerHTML = player1_score - 1;
            document.getElementById("quizzerinator").innerHTML = currentPlayerQ;
            document.getElementById("answerinator").innerHTML = currentPlayer;        }
    }
    else{
        if(currentPlayerQ == player1_name){
            currentPlayer = player1_name;
            currentPlayerQ = player2_name;
            document.getElementById("quizzerinator").innerHTML = currentPlayerQ;
            document.getElementById("answerinator").innerHTML = currentPlayer;

        }
        if(currentPlayer == player2_name){
            currentPlayer = player1_name;
            currentPlayerQ = player2_name;
            document.getElementById("quizzerinator").innerHTML = currentPlayerQ;
            document.getElementById("answerinator").innerHTML = currentPlayer;        }
    }
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    document.getElementById("output").innerHTML = "";
}