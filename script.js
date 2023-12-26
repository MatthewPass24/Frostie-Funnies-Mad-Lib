let adjective = prompt('Enter an Adjective:')
let noun = prompt('Enter a noun:')
let verb = prompt('Enter a verb:')
let adverb = prompt ('Enter an adverb:')
let number = prompt('Enter a number')
let clothing = prompt('Enter an article of clothing ')

let story = `On a December morning, Jack and his brother Mason woke up and saw ${number} feet of snow. Wanting to play, they grabbed their ${clothing} and when they were outside, Mason called for his friends. Together they made a big ${noun} and deicded to have a ${adjective} snowball fight. ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p> ${story} </p>`