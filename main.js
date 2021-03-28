function next_page(){
    player1_name = document.getElementById("player1_id").value;
    player2_name = document.getElementById("player2_id").value;

    localStorage.setItem("mathPerson1", player1_name);
    localStorage.setItem("mathPerson2", player2_name);

    window.location = "quiz_area.html";
}