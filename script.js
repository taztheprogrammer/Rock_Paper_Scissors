const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const man = document.getElementById('man');
const computer = document.getElementById('computer');

rock.addEventListener('click', display);
paper.addEventListener('click', display);
scissor.addEventListener('click', display);

const choices = [rock, paper, scissor]

function display() {
    man.innerHTML = this.innerHTML;
    computer_display();
}

function computer_display() {
    const num = Math.trunc((Math.random() * 3));
    computer.innerHTML = choices[num].innerHTML;
}

