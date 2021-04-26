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
let favFood = prompt('Do you think that I like programing ? if yes insert Y else insert N ').toUpperCase()
//console.log(favFood)
switch (favFood) {
    case 'Y':
        alert('great your answer is true')
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
        alert('true answer my favorite animal is the fox')
        break;
    case 'N':
        alert('wrong answer i like an animals specially the fox ')
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
        break
    default:
        text = 'this is not an expected value try again'
        console.log(text);
        break;
}
document.write("<pre>");
alert('welcom ' + userName + ' and thanks for doing the quiz,I wish to you the best ');
document.write(" <p> ^_^ thanks " + userName +  " for doing the quiz, I wish to you the best ^_^ </p>  ");
