

let escribir = str => {
    
    let arrayFromStr = str.split('');
    let i = 0;
   

 let printStr = setInterval(function() {
       
         if(arrayFromStr[i]===' '){
            document.body.innerHTML += arrayFromStr[i];
            document.body.innerHTML += arrayFromStr[i+1];
            i+=2;  
        }else{
            document.body.innerHTML += arrayFromStr[i] ;
             i++;
           }
           
           if(i === arrayFromStr.length){
                
                 clearInterval(printStr);
           };
 }
    ,150); 
   
   
};

////document.innerHTML +=  `<p id = "Miname">${

 escribir("Jose Alfredo"); 



 /**
* Template Name: iPortfolio - v3.0.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    
  
    /**
     * Hero type effect
     */
    const typed = select('.typed')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items')
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  
  
  
  })()