var max,min,e,f,d,t,n,q;

max = 1309; 
min= -1309;
t = 0;
n = 1;
function moverse(){
  e = document.getElementById("botoncillo");
  f = document.getElementById("botoncillo2");
  
  e.addEventListener("click", muv1);
  f.addEventListener("click", muv2);
  
  e.addEventListener("click",aber);
  f.addEventListener("click",aber);
  
  
}

function muv1(){
    d = document.getElementById("pagg");
    d.scrollLeft = min + t;
    t = d.scrollLeft;
    n = n - 1;
    if (n == 0){n = 1};
}
function muv2(){
    d = document.getElementById("pagg");
    d.scrollLeft = max + t;
    t = d.scrollLeft;
    n = n + 1;
    if (n == 8){n = 7};
}

function aber(){
    document.getElementById("demo").innerHTML= n +' de 7';
}
