'use strict'
document.write("<pre>");
let userName = prompt('please enter your name?')
console.log('welcom ' + userName);
document.write("<pre>");

let sureQuestion = prompt('are you ready to have this quiz? if yes insert Y else insert N ').toUpperCase()
//console.log(sureQuestion)
switch (sureQuestion) {
    case 'Y':
        alert('pres ok to continue')
        break;
    case 'N':
        alert('close the Tab to leave this site')
        break
    default:
        text = 'this is not an expected value try again'
        console.log(text);
        break;
}

let score = 0;
let favFood = prompt('Do you think that I like programing ? if yes insert Y else insert N ').toUpperCase()
//console.log(favFood)
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
        console.log(text);
        break;
}
let sportQuestion = prompt('do you think that i like see sports match? if yes insert Y else insert N ').toUpperCase()
//console.log(sportQuestion)
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
        console.log(text);
        break;
}
let animalsQuestion = prompt('do you think that i like animals? if yes insert Y else insert N ').toUpperCase()
//console.log(sureQuestion)
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
        console.log(text);
        break;
}
let farmmingQuestion = prompt('do you think that i like farmming ? if yes insert Y else insert N ').toUpperCase()
//console.log(farmmingQuestion)
switch (farmmingQuestion) {
    case 'Y':
        alert('thas true ' + userName + ' you are great')
        score = score + 1;
        break;
    case 'N':
        alert('no ' + userName + ' its wrong answer')
        break
    default:
        text = 'this is not an expected value try again'
        console.log(text);
        break;
}
let sleepingQuestion = prompt('do you think that i love sleeping? if yes insert Y else insert N ').toUpperCase()
//console.log(sleepingQuestion)
switch (sleepingQuestion) {
    case 'Y':
        alert(userName + ' I know that you guessing that but its wrong answer ')
        break;
    case 'N':
        alert(' yes i hate sleeping ')
        score = score + 1;
        break
    default:
        text = 'this is not an expected value try again'
        console.log(text);
        break;
}

for (let i = 4; i >= 1; i--) {
    let myAge = prompt('please guess my Age ');
    if (myAge > 28) {
        //console.log(myAge);
        //console.log('it is too high');
        alert('it is too high')
    } else if (myAge < 28) {
        //console.log(myAge);
        //console.log('it is too low');
        alert('it is too low')
    } else if (myAge == 28) {
        //console.log(myAge);
        //console.log('it is true');
        alert('it is true')
        score++;
        break;

    }
}

let animals = ['fox', 'dog ', 'cat', 'goat', 'Owl', 'horse'];
let userAns = prompt('Guess What is my fav animal ? ');
let flag = false;
for (let t = 1; t < 6; t++) {
    for (let f = 0; f < animals.length; f++) {
        if (userAns == animals[f]) {
            alert('You got it  ');
            //console.log('You got it !! ');
            //console.log('You got it !! ');

            flag = true;
            score++;
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
