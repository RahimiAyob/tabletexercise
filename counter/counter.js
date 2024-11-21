const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const faster = document.getElementById("faster");
const gobackhome = document.getElementById("gobackhome");
var numtext = document.getElementById("number");
increment.onclick = addnum;
decrement.onclick = subnum;
faster.onclick = fasteradd;
gobackhome.onclick = backhome;
var num = parseInt(numtext.innerHTML);

function addnum(){
    num++;
    numtext.innerHTML = num;
    check727();
}

function subnum(){
    num--;
    numtext.innerHTML = num;
    check727();
}

function fasteradd(){
    num = num + 100;
    numtext.innerHTML = num;
}

function backhome(){
  window.location.href = "/tabletexercise/index.html";
}
function check727() {
  if (num===727){
    numtext.innerHTML = "wysi";
  }
}
