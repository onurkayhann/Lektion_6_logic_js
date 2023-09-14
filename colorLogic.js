// JAVASCRIPT

// ADD BUTTON ONCLICK FIRST WAY
function changeColor() {
    document.getElementById('my-color-id').style.color = 'green';
}

// VARIABLES

function variables() {
    var name = '';
    var age = 0;

    name = 'Benny ';
    age = 15;

    // Result = Benny & 15

    alert(name + age);
    console.log(name + age); // Shows up in INSPECTION WINDOW
}

function arrays() {
    var score = [100, 150, 250, 1000];

    // alert(score);
    alert(score[3]);

    console.log(score);

    // Index
    // Element
    // [] ==
}

// PROMPT
function userLogin() {
    var result = prompt('Please type login credentials');

    alert('Ditt lösenord är: ' + result);
}

// FOR LOOP

function loopExercise() {
    for (let index = 0; index < 10; index++) {
        alert(index);
    }
}

function calculateScore() {
    var playerScore = [150, 275, 600, 123, 834];
    var sum = 0;

    for (let index = 0; index < playerScore.length; index++) {
        sum += playerScore[index];

        alert(sum);
    }
}

// document.querySelector("button").addEventListener("click", changeColor); SECOND WAY TO ADD BUTTON ONCLICK

// ID
// document.getElementById('my-color-id').style.color = 'green';

// CLASS
// document.querySelector('.my-color').style.color = 'aqua'; // querySelector väljer det som är överst, dvs första bästa.

// document.querySelectorAll('.my-color').style.color = 'pink';
