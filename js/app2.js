
$(document).ready(function(){
	
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
      // without  var to be automatically global
      var numbertobeguessed=Math.floor((Math.random() * 100) + 1);
    
     alert(numbertobeguessed);
      $('#guessButton').on('click', (function guess() {
      // without  var to be automatically global
   	   var guessed = document.getElementById("userGuess").value;
       
        alert(guessed);
         
      //To clear guessed number entry
       document.getElementById("userGuess").value='';
       
   // comparevalues
      alert(guessed);
      alert(numbertobeguessed);
       var a = (guessed-numbertobeguessed);
       alert (Math.abs(a));
         a= (Math.abs(a));  
         return a;
         start();

       

   
        





        /*  function Add (){
        return ($(guessList).append('<li>'+guessed+'</li>'));  
             
                 }
          Add (); */
           
       
       
       //if (Math.abs(guessed - numbertobeguessed) >= 50) { alert("freezing"); }
        // checks var a and changs feedback to appropraite comment
        if (a >= 50) {  document.getElementById("feedback").innerHTML ="freezing"; }
          else if (a >= 30 && a < 50) { document.getElementById("feedback").innerHTML = "Ice Cold"; }
         //else if (Math.abs(guessed - numbertobeguessed) >= 20 ) { alert("cold"); }
          else if (a >= 20 && a < 30) { document.getElementById("feedback").innerHTML = "Cold"; }
          else if (a >= 10 && a < 20) { document.getElementById("feedback").innerHTML = "Getting Warm"; }
          else if (a >= 1  && a < 10) { document.getElementById("feedback").innerHTML = "Your Smoking!!"; } 
               /*{alert("smoking");}*/
         else alert("YOUR GUESS IS CORRECT!!!")


         
     	


       

    }));

}));
/* function reset () {
  guessed=0;
  numbertobeguessed=0;
}

reset(); */

});


