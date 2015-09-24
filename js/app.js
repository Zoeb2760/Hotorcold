
$(document).ready(function(){

  //  global variables
      numbertobeguessed=Math.floor((Math.random() * 100) + 1);
      var guessed2= "";
    // alert("random="+  numbertobeguessed)
     //alert("random="+ numbertobeguessed);



     
   
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  // to start the game 
  // When my button is clicked a random number is generated between 1 and 100random 
     
     $('.new').on('click', (function () { 
      location.reload(); 
      }));
      
      $('#guessButton').on('click', (function guess() {
      // without  var to be automatically global
   	   guessed1 = document.getElementById("userGuess").value;
       

       //To clear guessed number entry
       document.getElementById("userGuess").value='';
       
   
       // comparevalues
       //alert("guessed1=" + guessed1);
       //alert("random=" +numbertobeguessed);
       var diff1 = (Math.abs ( guessed1 - numbertobeguessed ) );
       //alert("diff1="+ diff1);
       
        
        // to add  to list item
        function Add (){
             return ($(guessList).append('<li>'+guessed1+'</li>'));  
            
                 }
             Add(); 

         

        

         // to count li
        var count = $("#guessList li").length;
        //alert("count =" +count);
        document.getElementById("count").innerHTML= count;

      
        
        var diff2= (Math.abs (guessed2 - numbertobeguessed ) );
       //alert("diff2="+ diff2);


       


        //if (Math.abs(guessed - numbertobeguessed) >= 50) { alert("freezing"); }
        // checks var a and changs feedback to appropraite comment

         
         if (diff1 >= 50 && diff2 == numbertobeguessed) {  document.getElementById("feedback").innerHTML ="freezing"; }
          else if (diff1 >= 30 && diff1 < 50 && diff2 == numbertobeguessed) { document.getElementById("feedback").innerHTML = "Ice Cold"; }
         //else if (Math.abs(guessed - numbertobeguessed) >= 20 ) { alert("cold"); }
          else if (diff1 >= 20 && diff1 < 30 && diff2 == numbertobeguessed) { document.getElementById("feedback").innerHTML = "Cold"; }
          else if (diff1 >= 10 && diff1 < 20 && diff2 == numbertobeguessed) { document.getElementById("feedback").innerHTML = "Getting Warm"; }
          else if (diff1 >= 1  && diff1 < 10 && diff2 == numbertobeguessed) { document.getElementById("feedback").innerHTML = "Your Smoking!!"; } 
              
         //else {document.getElementById("feedback").innerHTML ="YOUR GUESS IS CORRECT!!!" ;} 
        
        //alert("guessed2"+guessed2);

       
         else if (numbertobeguessed==guessed1)  {document.getElementById("feedback").innerHTML ="YOU GUESSED CORRECTLY";}
         //else if ( diff2 == numbertobeguessed) {document.getElementById("feedback").innerHTML ="first round";}
         else if (diff2 > diff1)  {document.getElementById("feedback").innerHTML ="getting warmer";}
         else if (diff2 <  diff1) {document.getElementById("feedback").innerHTML ="getting colder";  }
         else alert("YOU WON!....... Let's Play again" );

       guessed2= "" +guessed1;
       






       
     
}));





});


