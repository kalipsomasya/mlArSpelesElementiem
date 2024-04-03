
//time
      function updateDateTime() {
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        document.querySelector('#datetime').textContent = currentDateTime;
      };
      setInterval(updateDateTime, 1000);
//buttn

function getObj(objID)
{
    if (document.getElementById) {return document.getElementById(objID);}
    else if (document.all) {return document.all[objID];}
    else if (document.layers) {return document.layers[objID];}
}
var ie4=document.all;
var ns6=document.getElementById&&!document.all;
cobj=getObj("button1");

function moveIt(){
y=Math.floor(Math.random()*301);
x=Math.floor(Math.random()*401);
if (ie4){
	cobj.style.top  = y;
	cobj.style.left = x;
	}
else if (ns6){
	cobj.style.top  = y+"px";
	cobj.style.left = x+"px";
	}
}