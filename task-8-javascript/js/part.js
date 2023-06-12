
  function refdet () {
    let clr=document.getElementById("submit");
    let out=document.getElementById("split");
    clr.onclick=splitcol();
   //out.ondblclick=location.reload();
    
  }

function splitcol() {
  
  
  
  let no = Number(document.getElementById("no").value);
  let split = Number(document.getElementById("split").value);
  let col=document.getElementById("vide");
  
  if (no < split || no <= 0 || split <= 0) 
  {
    
    var c = document.createElement("div");
    c.style.width = "150px";
    c.style.marginLeft="20px";
    c.style.marginBottom="10px";
    c.innerHTML='<button class="btn btn-primary">Wrong Input</button>';
    col.appendChild(c);
  } 
  else 
  {
    let coldiv = Array.from({ length: split }).fill(0);
    let i=0;
    let t=no;
    while(t>0)
    {
     if(i==split)
     { i=0; }
     coldiv[i]++;
     i++;
     t--;
    }
    let colm = coldiv.slice(0);
    for (let i = 0; i < split; i++) {
      colm[i] = ((colm[i] * 100) / no);
    }
    console.clear();
    console.log(colm);
    for (let i = 0; i < split; i++) {
      var c = document.createElement("div");
      c.style.width = `${colm[i]}%`;
      c.style.height = "100px";
      c.style.textAlign = "center";
      c.style.display= "inline-block";
      c.style.marginBottom= "10px";
      
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      c.style.backgroundColor = bgColor;

      c.innerHTML = `${coldiv[i]}`;
      col.appendChild(c);
    }
   
  }
  if(col!=0)
    split.onchange=location.reload();
  
}