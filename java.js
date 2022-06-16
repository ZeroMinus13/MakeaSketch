const contain = document.querySelector('#container');
const div = document.getElementsByTagName('div');
const h1 = document.querySelector('h1');
const resetbtn = document.getElementById('Reset');
const btn4 = document.getElementById('4');
const btn16 = document.getElementById('16');
const btn32 = document.getElementById('32');
const btn64 = document.getElementById('64');

function numb4() {
  let Numb = 16;
  text = '';
  for (let i = 1; i < Numb; i++) {
    text += "div" + i + ' ';
    result = text.split(' ');
  };
  divCreation();
};

function numb16() {
  let Numb = 256;
 text = ''; 
 for (let i = 1; i < Numb; i++){
   text+="div" + i + ' '  ;
   result = text.split(' '); 
  };
  divCreation();  
}

function numb32() {
  let Numb = 1024;
 text = '' ;
 for (let i = 1; i < Numb; i++){
   text+="div" + i + ' '  ;
   result = text.split(' '); 
  };
  divCreation1();  
};
function numb64() {
  let Numb = 4096;
 text = '' ;
 for (let i = 1; i < Numb; i++){
   text+="div" + i + ' '  ;
   result = text.split(' '); 
  };
  divCreation1();  
}

function divCreation() {
for (let i = 0; i < result.length; i++ ){
    let div = document.createElement('div');
    div.setAttribute('id', 'sketch');
    div.className = 'sketch';
    div.style.cssText = "border: 0  px solid black; height: 41px; width: 41px";
    contain.appendChild(div);
    color = () => div.style.backgroundColor = "black";
    colorBlack = () => div.style.backgroundColor = "white ";
    rainbow = () => div.style.backgroundColor = `rgb(${math()},${math()},${math()})`
    div.addEventListener('mouseover', rainbow);
  }
}

function divCreation1() {
  for (let i = 0; i < result.length; i++ ){
      let div = document.createElement('div');
      div.setAttribute('id', 'sketch');
      div.className = 'sketch';
      div.style.cssText = "border: 0  px solid black; height: 20.5px; width: 20.5px";
      contain.appendChild(div)  ;
      color = () => div.style.backgroundColor = "black";
      colorBlack = () => div.style.backgroundColor = "white ";
      rainbow = () => div.style.backgroundColor = `rgb(${math()},${math()},${math()})`
      div.addEventListener('mouseover', rainbow);
      }
  }

function reset() {
  while (contain.lastChild) {
    contain.removeChild(contain.lastChild);
   }
}

h1.addEventListener('mouseover', showCoords)
let math = () => Math.floor(Math.random() * 255);

  function showCoords(event) {
 h1.style.color = `rgb(${math()},${math()},${math()})` ; 
}

btn4.addEventListener('click', numb4);
btn16.addEventListener('click', numb16);
btn32.addEventListener('click', numb32);
btn64.addEventListener('click', numb64);
resetbtn.addEventListener('click', reset);
