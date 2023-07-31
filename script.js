const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const man = document.getElementById('man');
const computer = document.getElementById('computer');
const winner = document.getElementById('winner');

rock.addEventListener('click', display);
paper.addEventListener('click', display);
scissor.addEventListener('click', display);

const choices = [rock, paper, scissor]

function display() {
    man.innerHTML = this.innerHTML;
    computer_display();
    callWinner();
}

function computer_display() {
    const num = Math.trunc((Math.random() * 3));
    computer.innerHTML = choices[num].innerHTML;
}

const winningConditions = [
    ['r', 's'],
    ['p', 'r'],
    ['s', 'p']
]


function callWinner() {
    let choices = [man.innerHTML, computer.innerHTML];
    
    for (condition of winningConditions) {
        if (choices[0] == condition[0] && choices[1] == condition[1]) {
            winner.innerHTML = "YOU WIN!";
            return;
        } else if (choices[0] == condition[1] && choices[1] == condition[0]) {
            winner.innerHTML = "YOU LOSE!";
            return;
        }else {
            winner.innerHTML = "YOU TIE!";
        }
    }



} 
