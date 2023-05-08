function splitcol()
{
  //let form=document.querySelector('form');
  let divi=document.getElementsByClassName("vide");
 
  
  let t=no;
  let i=0;
  let no=Number(document.getElementById("no").value);
  let split=Number(document.getElementById("split").value);
  const coldiv=new Array(split).fill(0);
  let colm = coldiv;
  while(t>0)
  {
    if(i==split)
    { i=0; }
    coldiv[i]++;
    i++;
    t--;
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
  console.log(colm);
    //divi.innerHTML="";
  
  for(let i=0;i<split;i++)
  {
    var cont=document.createElement("div");
    var colw=Math.floor(coldiv[i]/no)*100;
    var clr =Math.floor{(Math.random()*16777215).toString(16)};
    cont.style.backgroundColor = rgb ({clr}) ;
    cont.style.width = {colw[i]}%;
    cont.innerHTML=`${coldiv[i]}`;
    cont.style.float='left';
    divi.appendChild(cont);
  }
}
