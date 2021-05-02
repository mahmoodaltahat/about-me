'use strict'
document.write("<pre>");

let userName = prompt('please enter your name?');
function Naming() {
    document.write("<pre>");
    return userName;
}
Naming();


function quizSuring() {
    let sureQuestion = prompt('are you ready to have this quiz? if yes insert Y else insert N ').toUpperCase()
    switch (sureQuestion) {
        case 'Y':
            alert('pres ok to continue')
            break;
        case 'N':
            alert('close the Tab to leave this site')
            break
        default:
            text = 'this is not an expected value try again'
            break;
    }
}
quizSuring();

let score = 0;
function favFood() {

    let favFood = prompt('Do you think that I like programing ? if yes insert Y else insert N ').toUpperCase()
    switch (favFood) {
        case 'Y':
            alert('great your answer is true')
            score = score + 1;
            break;
        case 'N':
            alert('ohh No its wrong answer')
            break
        default:
            text = 'this is not an expected value try again'
            break;
    }
}
favFood();

function sport() {
    let sportQuestion = prompt('do you think that i like see sports match? if yes insert Y else insert N ').toUpperCase()
    switch (sportQuestion) {
        case 'Y':
            alert('haha wrong answer i prefer reading')
            break;
        case 'N':
            alert('true answer you are doing great!')
            score = score + 1;
            break
        default:
            text = 'this is not an expected value try again'
            break;
    }
}
sport();

function pets() {
    let animalsQuestion = prompt('do you think that i like animals? if yes insert Y else insert N ').toUpperCase()
    switch (animalsQuestion) {
        case 'Y':
            alert('true answer ')
            score = score + 1;
            break;
        case 'N':
            alert('wrong answer i like an animals ')
            break
        default:
            text = 'this is not an expected value try again'
            break;
    }
}
pets();


function farming() {
    let farmmingQuestion = prompt('do you think that i like farmming ? if yes insert Y else insert N ').toUpperCase()
    switch (farmmingQuestion) {
        case 'Y':
            alert('thas true  you are great')
            score = score + 1;
            break;
        case 'N':
            alert('no its wrong answer')
            break
        default:
            text = 'this is not an expected value try again'
            break;
    }
}
farming();

function Sleep() {
    let sleepingQuestion = prompt('do you think that i love sleeping? if yes insert Y else insert N ').toUpperCase()
    switch (sleepingQuestion) {
        case 'Y':
            alert(' I know that you guessing that but its wrong answer ')
            break;
        case 'N':
            alert(' yes i hate sleeping ')
            score = score + 1;
            break
        default:
            text = 'this is not an expected value try again'
            break;
    }
}
Sleep();

function Age() {
    for (let i = 4; i >= 1; i--) {
        let myAge = prompt('please guess my Age ');
        if (myAge > 28) {

            alert('it is too high')
        } else if (myAge < 28) {

            alert('it is too low')
        } else if (myAge == 28) {

            alert('it is true')
            score++;
            break;

        }
    }
}
Age();


let animals = ['fox', 'dog', 'cat', 'goat', 'Owl', 'horse'];
function fAnimals() {
    let userAns = prompt('Guess What is my fav animal ? ');

    let flag = false;
    for (let t = 1; t < 6; t++) {
        for (let f = 0; f < animals.length; f++) {
            if (userAns == animals[f]) {
                alert('You got it  ');


                flag = true;
                score++;
                return score;
                break;
            }


        }
        if (flag == true) { break; }
        else {
            alert(userAns + " Is a Wrong Answer Please try again ");
            userAns = prompt('Try Again');

        }
    }


    if (flag == false) {
        alert('Try harder Next Time');
        alert('The right answers is : ' + animals);
        document.write('<br>');
        document.write('my fav animal is answers is : ' + animals);

    }
    return animals;
}
fAnimals();




document.write('<br>');
document.write('<p> My age is 28 years </p>')
document.write('<br>');
document.write('<p> my fav animals are: ' + animals + '</p>');
document.write("<pre>");
alert('Your Score is ' + score + '/7 ');
document.write('<br>');
document.write('<p> you have guessed ' + score + 'question about me </p>');
document.write('<br>');
document.write('<br>');
alert('welcom ' + userName + ' and thanks for doing the quiz,I wish to you the best ');
document.write(" <p> ^_^ thanks " + userName + " for doing the quiz, I wish to you the best ^_^ </p>  ");
