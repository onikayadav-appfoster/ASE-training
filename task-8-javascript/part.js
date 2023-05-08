let form=document.querySelector('form');
let divi=document.getElementsByClassName('vide');

let coldiv=[];
let t=no;
let i=0;
form.addEventListener('submit', event => {
  
<<<<<<< Updated upstream

  const no=Number(document.querySelector('#no').value);
  const split=Number(document.querySelector('#split').value);

 
 while(t>0)
 {
=======
  var t=no;
  var i=0;
  let no=Number(document.getElementById("no").value);
  let split=Number(document.getElementById("split").value);
  const coldiv=new Array(split).fill(0);
  //let colm = coldiv;
  while(t>0)
  {
>>>>>>> Stashed changes
    if(i==split)
    { i=0; }
    coldiv[i]++;
    i++;
    t--;
<<<<<<< Updated upstream
 }

 function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
=======
  }
  if(split>no || split==0 || no==0)
  {
    var cont=document.createElement("div");
    cont.innerHTML= <button>Wrong Input</button>
  }
    /*function generateRandomColor(){
      let maxVal = 0xFFFFFF; // 16777215
      let randomNumber = Math.random() * maxVal; 
      randomNumber = Math.floor(randomNumber);
      randomNumber = randomNumber.toString(16);
      let randColor = randomNumber.padStart(6, 0);   
      return `#${randColor.toUpperCase()}`
    }*/
  console.log(coldiv);
    //divi.innerHTML="";
  
  for(let i=0;i<split;i++)
  {
    var cnt=document.createElement("div");
    var colw= Math.floor(coldiv[i]/no)*100;
    var clr = Math.floor(Math.random()*16777215).toString(16);
    cnt.style.backgroundColor = `${clr}` ;
    cnt.style.width = `${colw[i]}%`;
    cnt.innerHTML=`${coldiv[i]}`;
    cnt.style.float='left';
    divi.appendChild(cnt);
  }
>>>>>>> Stashed changes
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