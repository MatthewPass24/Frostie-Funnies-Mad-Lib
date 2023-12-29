
document.getElementById('generateMadLib').addEventListener('click', function () {
    let number = prompt('Enter a number')
    let clothing = prompt('Enter an article of clothing')
    let noun = prompt('Enter a noun:')
    let adjective = prompt('Enter a adjective')
    let animal = prompt ('Enter an animal ')
    let dessert = prompt ('Enter a dessert')
    let movie = prompt ('Enter a Christmas movie')
    let story = `On a December morning, Jack and his brother Mason woke up and saw ${number} feet of snow. Wanting to play, they grabbed their ${clothing} and when they were outside, Mason called for his friends. Together they built a big ${noun} and decided to have a ${adjective} snowball fight. Suddenly a huge ${animal} came and destroyed their creation, sending them inside. Finally they had some hot chocolate with ${dessert} and watched ${movie} together.`;

    let madLibOutputDiv = document.getElementById('madLibOutput');
    madLibOutputDiv.innerHTML = `<p>${story}</p>`;
});