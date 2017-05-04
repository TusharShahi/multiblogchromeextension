var x = localStorage.getItem('Facebook');
   if(x == 'active')
   {
	      // document.body.innerHTML =  document.body.innerHTML + "facebook";
   		   document.getElementById('fbfeed').style.display = 'inline-block';

   }
var w = localStorage.getItem('Linkedin');
   if(w == 'active')
   {
       //document.body.innerHTML =  document.body.innerHTML + "linkedin";
       	   document.getElementById('feed4').style.display = 'inline-block';
   }
var y = localStorage.getItem('Gmail');
   if(y == 'active')
   {
       //document.body.innerHTML =  document.body.innerHTML + "gmail";
       	   document.getElementById('feed3').style.display = 'inline-block';

   }
var z = localStorage.getItem('Twitter');
   if(z == 'active')
   {

       // document.body.innerHTML =  document.body.innerHTML + "twitter";
       	   document.getElementById('feed2').style.display = 'inline-block';

   }