
document.getElementById('generateMadLib').addEventListener('click', function () {
    let name = prompt('Enter a name')
    let name2 = prompt('Enter a different name')
    let number = prompt('Enter a number')
    let clothing = prompt('Enter an article of clothing')
    let room = prompt('Enter a part of a house')
    let adjective = prompt('Enter an adjective')
    let animal = prompt ('Enter an animal ')
    let dessert = prompt ('Enter a dessert')
    let movie = prompt ('Enter a Christmas movie')
    let story = `On a December morning, ${name} and their sibling ${name2} woke up and saw ${number} feet of snow. Wanting to play, they grabbed their ${clothing} and when they were outside, they called for the neighbors to come. Together they built a big snow fort with a huge${room} and decided to have a ${adjective} snowball fight.  Suddenly a huge ${animal} came and destroyed their fort, sending the kids inside. Finally they had some hot chocolate with ${dessert} and watched ${movie} together.`;

    let madLibOutputDiv = document.getElementById('madLibOutput');
    madLibOutputDiv.innerHTML = `<p>${story}</p>`;
});