/*var gm=0,fb=0,li=0,tw=0;
document.getElementById("tw").onclick = function()
{
              document.getElementById("allowed3").innerHTML = 'you have used tw';
              tw =1;
};
document.getElementById("fb").onclick = function()
{
              document.getElementById("allowed1").innerHTML = 'you have used fb';
   fb = 1;
};
document.getElementById("gm").onclick = function()
{
              document.getElementById("allowed2").innerHTML = 'you have used gm';
    gm = 1;
};
document.getElementById("li").onclick = function()
{
              document.getElementById("allowed4").innerHTML = 'you have used li';
li = 1;
 };
if(gm == 1)
{
              document.getElementById("social1").innerHTML = 'you have used gmail';
}*/
document.body.onload = function()
{
  x = document.getElementById("fb").style; 
  if(localStorage.getItem('Facebook') == 'active')
{x.color = 'white';
 x.background = 'black';}
else {x.color = 'black'; 
x.background = 'white';
}
  y = document.getElementById("tw").style; 
  if(localStorage.getItem('Twitter') == 'active')
{y.color = 'white';
 y.background = 'black';}
else 
  {y.color = 'black'; 
y.background = 'white';
}
   w = document.getElementById("gm").style; 
  if(localStorage.getItem('Gmail') == 'active')
{w.color = 'white';
 w.background = 'black';}
else {w.color = 'black'; 
w.background = 'white';
}
  z = document.getElementById("li").style; 
  if(localStorage.getItem('Linkedin') == 'active')
{z.color = 'white';
 z.background = 'black';}
else {z.color = 'black'; 
z.background = 'white';
}
 
};

document.getElementById("fb").onclick = function(){
 x = document.getElementById("fb").style;
  if( x.color == 'black'|| x.color =='')
  {
   x.color = 'white';
   x.background = 'black';
     localStorage.setItem('Facebook', 'active');
  }
  else
  {
                 x.color = 'black';
                  x.background = 'white';
   localStorage.setItem('Facebook','inactive');
  }


};
document.getElementById("tw").onclick = function(){
 x = document.getElementById("tw").style;
  if( x.color == 'black'|| x.color =='')
  {  x.background = 'black';
   x.color = 'white';
     localStorage.setItem('Twitter', 'active');
  }
  else
  {
                 x.color = 'black';
                  x.background = 'white';

   localStorage.setItem('Twitter','inactive');
  }
};
document.getElementById("gm").onclick = function(){
 x = document.getElementById("gm").style;
  if( x.color == 'black'|| x.color =='')
  {  x.background = 'black';
   x.color = 'white';
     localStorage.setItem('Gmail', 'active');
  }
  else
  { 
                  x.background = 'white';    
                 x.color = 'black';
   localStorage.setItem('Gmail','inactive');
  }
};
document.getElementById("li").onclick = function(){
 x = document.getElementById("li").style;
  if( x.color == 'black'|| x.color =='')
  {
  x.background = 'black';
   x.color = 'white';
     localStorage.setItem('Linkedin', 'active');
  }
  else
  {
                  x.background = 'white';
                 x.color = 'black';
   localStorage.setItem('Linkedin','inactive');
  }
};
