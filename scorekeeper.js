var input = document.querySelectorAll('input');
var inputvalue = input[0];
var p1button = input[1];
var p2button = input[2];
var resetbutton = input[3];

// console.log(p1button);
var p1score = 0;
var p2score = 0;

var h1 = document.querySelector("h2");
console.log(h1);
var p1display = document.querySelector('#p1display');
console.log(p1display);
var p2display = document.querySelector('#p2display');
var gameover = false;
var winningscore = 5;

var p = document.querySelector('p span');

p1button.addEventListener('click',function(){
  // console.log(p1button);

if(!gameover){
p1score++;
// console.log(p1score);
p1display.textContent = p1score;
if(p1score === winningscore){
p1display.classList.add('winner');
gameover = true;
}
}
})


p2button.addEventListener('click',function(){
if(!gameover){
p2score++;
// console.log(p2score);
p2display.textContent = p2score;
if(p2score === winningscore){
p2display.classList.add('winner');
gameover = true;
}
}

})

function reset(){
p1score = 0;
p2score = 0;
p1display.textContent = 0;
p2display.textContent = 0;
p1display.classList.remove('winner');
p2display.classList.remove('winner');
gameover = false;

}

resetbutton.addEventListener('click',reset)

inputvalue.addEventListener('change', function(){
p.textContent = inputvalue.value;
winningscore = Number(inputvalue.value);
reset();
})
