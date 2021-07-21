var a
var b
function setup() {
  createCanvas(400, 400);
  a = prompt("please enter the value a");
  b = prompt("please enter the value b");
  var button1 = createButton("click here to swap")
  button1.mousePressed(swap);
  
}

function draw() {
  background(220);
  //console.log(a);
  //console.log(b);
}
function swap(){
 [a,b]=[a,b];
console.log("the number after swapping is "  +a)
console.log("the number after swapping is "  +b);
}