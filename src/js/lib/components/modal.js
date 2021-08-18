import $ from '../core';

$.prototype.modal = function(created) {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy=false){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();
            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    if(e.target){
                        e.preventDefault();
                    }

                    if(destroy){
                        item.remove();
                    }

                    windows.forEach(item => {
                        item.style.display = 'none';
                        item.classList.add('animated', 'fadeIn');
                    });
                    
                    modal.style.display = 'block';
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                });
            });
            
            close.addEventListener('click', () => {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            });
            
            modal.addEventListener('click', (e) => {
                if(e.target === modal){
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
            });
    }

    function openByScroll(selector){
        window.addEventListener('scroll', () => {
            // ete voch mo kojaki chi sexmel
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)){
                document.querySelector(selector).click();
            }
        });
    }
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close',true);
    openByScroll('.fixed-gift');
};