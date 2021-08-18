import $ from '../core';

$.prototype.hamburger = function(){
    var hamburger =$('.hamburger-toggle'); 
    var nav = document.querySelector('.hamburger-nav');

    hamburger.click(()=>{        
        // nav.style.transform =`translateX(0)`; 
        if(nav.style.transform ==`translateX(-104%)`){
                nav.style.transform =`translateX(0)`;
        }else{
                nav.style.transform =`translateX(-104%)`;  
        }
    });  
};
$('.hamburger-toggle').hamburger();
