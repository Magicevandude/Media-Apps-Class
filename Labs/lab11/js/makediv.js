// my cats array
let cats = ["Bree", "Dee", "Spencer"];


   
//global variables
var catnames = cats.length;
var divlist;
   

   // for loop to display the contents of the array in an HTML div
   for (i = 0; i < catnames; i++) {

    //create element for div id
     divlist = document.createElement('div');

    //create div class
     divlist.className = 'mycats';

     //index for cat list
     divlist.innerHTML = cats[i];
     document.getElementsByTagName('h1')[0].appendChild(divlist);
   }

   