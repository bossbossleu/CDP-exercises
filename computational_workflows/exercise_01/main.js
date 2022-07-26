console.log("this works");

/*
let w = prompt("Width?");
let h = prompt("Height?");

function calculateArea (width, height){
    let area = width * height;
    alert(`the calculate area is ${area}`)

}
calculateArea (w, h)

let greeting = document.querySelector('.greeting');
greeting.innerText = "Goodbye"

console.log(greeting)



const ul = document.querySelector('ul');
const listItem = document.createElement ("li");
listItem.classList.add('List-item');
listItem.textContent='Monday';
ul.appendChild(listItem)

*/

/*
let noun = 'cat';
let verb = 'run';
let adjective = 'happily';
*/

let n = prompt('Tnput a noun: ')
let greeting = document.querySelector('.greeting')

function generatePoem(noun, verb, adjective){
    greeting.innerText = `My ${noun} leaps ${adjective} when I ${verb} a shit.`
    //console.log(`My ${noun} leaps ${adjective} when I ${verb} a shit.`)
}
generatePoem (n, 'run', 'happily');
