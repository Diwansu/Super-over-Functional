const $ball = document.getElementsByClassName("ball") 
const $team1score = document.getElementById("score-team1")
const $team1wickets = document.getElementById("wickets-team1")
const $team2score = document.getElementById("score-team2")
const $team2wickets = document.getElementById("wickets-team2")
const resetbutton = document.getElementById("reset")
const strikebutton = document.getElementById("strike")

const strikeAudio = new Audio("http://bit.ly/so-ball-hit")
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")

var team1score = 0
var team2score = 0
var team1wickets = 0
var team2wickets = 0
var turn = 1
var ballfaced = 0

const possibleoutcomes =[ 0,1,2,3,4,5,6,"W"] 

function finished() {
    gameOverAudio.play();
    if (team1score > team2score) alert("India Wins")
    if (team2score > team1score) alert("Pakistan Wins")
    if (team1score == team2score) alert ("TIE")
}

// we are using possible outcomes using arrays.
 
// double equal to checks value, tripe equal to checks value and data types.

//creating event listener.

  strikebutton.onclick = () => {
    strikeAudio.pause()
    strikeAudio.currentTime=0
    strikeAudio.play()

    ballfaced++ 
    if (turn === 1){
        var score = possibleoutcomes[Math.floor (Math.random()*possibleoutcomes.length)]
        console.log(score)
        if (score=== "W") {
             team1wickets++;
             $team1wickets.innerText = team1wickets
             document.querySelector(`#team1-superover div:nth-child(${ballfaced})`).innerHTML = "W"
                  }
       else {
        team1score+= score
        $team1score.textContent = team1score
        document.querySelector(`#team1-superover div:nth-child(${ballfaced})`).innerHTML = score
          // print(f"this is {num}) //num=2 to give output this is 2 in python
          //It tells this is a variable, we use dollar sign with it.otherwise js won't be able to read it.
          // The reason is formatting is used because query selector looks for the variable as it with brackets and periods .
        }
        if (ballfaced ==6 || team1wickets ==2 ){
            turn = 2
            ballfaced =1 

        }
         }
         
         if (turn === 2){
            var score = possibleoutcomes[Math.floor (Math.random()*possibleoutcomes.length)]
            console.log(score)
            if (score  ==="W") {
                 team2wickets++;
                 $team2wickets.innerText = team2wickets
                 document.querySelector(`#team2-superover div:nth-child(${ballfaced})`).innerHTML = "W"
                      }
           else {
            team2score+= score
            $team2score.textContent = team2score
            document.querySelector(`#team2-superover div:nth-child(${ballfaced})`).innerHTML = score }

            if (ballfaced ==6 || team2wickets ==2 || (team2score>team1score)) {
                turn = 3
                finished();
            }

   }
}
resetbutton.onclick= () => {
    window.location.reload ()
}

