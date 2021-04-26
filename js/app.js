'use strict'
document.write("<pre>");
let userName = prompt('please enter your name?')
document.write("<span> welcom " + userName + " into this quiz</span>");
console.log('welcom ' + userName);
document.write("<pre>");

let sureQuestion = prompt('are you ready to have this quiz?')
switch (sureQuestion) {
    case 'Y':
        alert('pres ok to continue')
        break;
    case 'N':
            alert('close the Tab to leave this site')
            break
    default:
        text ='this is not an expected value try again'
        alert(text)
        console.log( text);
        break;
}


let favFood = prompt('Do you think that I like programing ? if yes insert Y else insert N ')
switch (favFood) {
    case 'Y':
        alert('great your answer is true')
        break;
    case 'N':
            alert('ohh No its wrong answer')
            break
    default:
        text ='this is not an expected value try again'
        alert(text)
        console.log( text);
        break;
}


document.write("<span> welcom " + favFood + " into this quiz</span>");
console.log('welcom ' + favFood);
document.write("<pre>");


document.write("<pre>");
let sportQuestion = prompt('do you think that i like see sports match?')
switch (sportQuestion) {
    case 'Y':
        alert('haha wrong answer i prefer reading')
        break;
    case 'N':
            alert('true answer you are doing great!')
            break
    default:
        text ='this is not an expected value try again'
        alert(text)
        console.log( text);
        break;
}
document.write("<span> welcom " + userName + " into this quiz</span>");
console.log('welcom ' + userName);
document.write("<pre>");


document.write("<pre>");
let animalsQuestion = prompt('do you think that i like animals?')

switch (animalsQuestion) {
    case 'Y':
        alert('true answer my favrout animal is the fox')
        break;
    case 'N':
            alert('wrong answer i like an animals espechaly the fox ')
            break
    default:
        text ='this is not an expected value try again'
        alert(text)
        console.log( text);
        break;
}
document.write("<span> welcom " + userName + " into this quiz</span>");
console.log('welcom ' + userName);
document.write("<pre>");


document.write("<pre>");
let farmmingQuestion = prompt('do you think that i like farmming')

switch (farmmingQuestion) {
    case 'Y':
        alert('thas true'+ userName + 'you are great')
        break;
    case 'N':
            alert('no'+ userName + 'its wrong answer')
            break
    default:
        text ='this is not an expected value try again'
        alert(text)
        console.log( text);
        break;
}
document.write("<span> welcom " + userName + " into this quiz</span>");
console.log('welcom ' + userName);
document.write("<pre>");


document.write("<pre>");
let sleepingQuestion = prompt('do you think that i love sleeping')

switch (sleepingQuestion) {
    case 'Y':
        alert(userName + 'i know that you guessing that but its wrong answer ')
        break;
    case 'N':
            alert('yes i hate sleeping ')
            break
    default:
        text ='this is not an expected value try again'
        alert(text)
        console.log( text);
        break;
}
document.write("<span> welcom " + userName + " into this quiz</span>");
console.log('welcom ' + userName);
document.write("<pre>");


