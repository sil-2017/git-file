import $ from '../core';

$.prototype.cart = function(){
    var cart =[];
    var arr =[];
    var total = $('.cart-pay-last');
    var item = document.querySelector('.scrollbar');
    var item2 = document.querySelector('.cart-empty');
    var it = document.querySelector('.features-d').innerText;
    let div = document.createElement('p');
    div.classList.add('div');
    var addCart = $('.features-d');
    var btn = $('#clearcart'); 
    var see = $('#checkout'); 
    var hamburger = $('.hamburger-toggle');  
    var nav = document.querySelector('.hamburger-nav');
    // var close = '<span class="fa fa-cart-arrow-down" style="font-size:36px"></span>';
    
    addCart.click(function(event){       
            var target = event.target;
            console.log(this.innerText);
            it = this.innerText;
            var sum = 0;
            var cartItem ='<div class="pos">'+ it +'<span class="fa fa-cart-arrow-down" style="font-size:36px"></span></div>';
            // var cartItem ='<div class="pos">'+ it + close +'</div>';
            
            arr.push(cartItem);
            see.fadeIn(1000);
            btn.fadeIn(200);
            setTimeout(function () {
                    for(var i=0; i<arr.length;i++){
                            div.innerHTML = arr;
                        }                    
                    item.append(div);
                    item2.remove();
                    div.click(function(){
                            // cartItem.remove();
                            console.log('hello');
            
                });
        }, 400);

          if(target){
                  price = parseFloat(it.split('$')[1]);
                  cart.push(price); 
            }
   
            for(var i=0;  i<cart.length; i++){
                    if(cart.length > 1){
                            sum = sum + cart[i];
                            total.html(sum + '$');
                    }else{
                            total.html(cart[i] + '$');
                    }
                }

            btn.click(function(){
                    div.remove();
                    item.append(item2);
                    cart.splice(0);
                    total.html(sum = 0 + '$');  
                    arr.splice(0);          
            });  
        }); 
  

};
$('.features-d').cart();