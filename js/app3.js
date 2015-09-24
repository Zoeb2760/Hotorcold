
$(document).ready(function(){

  //  global variables
      numbertobeguessed=Math.floor((Math.random() * 100) + 1);
    
     alert(numbertobeguessed);
   
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // to start the game random # created when start game clicked
    // When mybutton is clicked generate a number between 1 and 100
     
     $('.new').on('click', (function () { 
      location.reload(); 
      }));
      
      $('#guessButton').on('click', (function guess() {
      // without  var to be automatically global
   	   guessed = document.getElementById("userGuess").value;
       

       //while count >1
       //guessed2= 
        
         
      //To clear guessed number entry
       document.getElementById("userGuess").value='';
       
   
       // comparevalues
       alert(guessed);
       alert(numbertobeguessed);
       var A = (Math.abs ( guessed - numbertobeguessed ) );
       alert(A);
 

      var arr = [];
        {
        arr.push("" +a);
       }
       alert("aray=" + arr);

        // to add  to list item
          function Add (){
             return ($('#guessList').append('<li>'+guessed+'</li>'));  
            // var  = eturn above 
                 
           }
           Add(); 

         
     // if      (a> add()-guessed) document.getElementById("feedback").innerHTML ="getting warmer"; }
        //      (a> add()-guessed) document.getElementById("feedback").innerHTML ="getting colder"; }
        

         // to count li
        var count = $("#guessList li").length;
        alert("count =" + count);
        document.getElementById("count").innerHTML= count;


       


        
        // checks var a and changs feedback to appropriate comment

        //do {

        if (a >= 50) {  document.getElementById("feedback").innerHTML ="freezing"; }
          else if (a >= 30 && a < 50) { document.getElementById("feedback").innerHTML = "Ice Cold"; }
         //else if (Math.abs(guessed - numbertobeguessed) >= 20 ) { alert("cold"); }
          else if (a >= 20 && a < 30) { document.getElementById("feedback").innerHTML = "Cold"; }
          else if (a >= 10 && a < 20) { document.getElementById("feedback").innerHTML = "Getting Warm"; }
          else if (a >= 1  && a < 10) { document.getElementById("feedback").innerHTML = "Your Smoking!!"; } 
               //alert("smoking");}
         else {document.getElementById("feedback").innerHTML ="YOUR GUESS IS CORRECT!!!" ;}     
         

         // } while (count <= 1 );
     	/*function hotorcold () { 
        var B = A- arr[1]; if ( A> B) {alert("hooray");} 
        else alert("naaaaaa") ; 
        arr.shift(); }

        hotorcold (); */


       
      //while count >1 
   //guessed1 =10 random=20 getting warm gussed2=12 do a new calc betwwen old and new guessed same list
   // need a new gussed replace old guess with new one
   // while should go on variable a 
// radom- guessed 2 >1 && <10 getting warmer



//random 50  guess20-cold guess 210 getting colder ifguess 2> random-30      



//if guess one ice cold 
  //guess 2 is farther away from random then guess one
//andom- gess1 50-20=30 < random-gues2 50-10=40 getting colder converse getting warmer
// random-guess50-10=40 50-5=45  colder
// need 2 vars var 1 initialand var 2 bth gussed releasing and changing
}));


/*function reset () {
  guessed=0;
  numbertobeguessed=0;


reset(); */

});


