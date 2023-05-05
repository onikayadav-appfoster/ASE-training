let form=document.querySelector('form');
let divi=document.getElementsByClassName('vide');

let coldiv=[];
let t=no;
let i=0;
form.addEventListener('submit', event => {
  

  const no=Number(document.querySelector('#no').value);
  const split=Number(document.querySelector('#split').value);

 
 while(t>0)
 {
    if(i==split)
    { i=0; }
    coldiv[i]++;
    i++;
    t--;
 }

 function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}
const colw=((coldiv[i]/no)*100);
divi.innerHTML="";
  for( let i=0;i<coldiv.length;i++)
  {
    const cont=document.createElement('div');
    const c=rgb(generateRandomColor());
    cont.style.backgroundColor= c;
    divi.style.width = `${colw}%`;
    let part = document.createTextNode(`${coldiv[i]}`);
        divi.appendChild(part);
    cont.style.float='left';
    divi.appendchild(cont);
  }

});