import $ from '../core';
// miacnum enq core-n vor karoxananq 
// ashxatel 4-funkciayi prototype-i het

// ays metodov karox enq avelacnel 
// voch miayn mek aly mi angamic mi qani klass
$.prototype.addClass = function (...classNames){
    //rest -operatrov talis enq argument inchy nshanakum e
    //  restov enq talis qani vor chgitenq te qani klass kstananq 
    // `vorpes argument
    for (let i = 0; i < this.length; i++){
        this[i].classList.add(...classNames);
    }
    return this;
};

$.prototype.removeClass = function (...classNames){
    for (let i = 0; i < this.length; i++){
        this[i].classList.remove(...classNames);
    }
    return this;
};

$.prototype.toggleClass = function (classNames){
    for (let i = 0; i < this.length; i++){
        this[i].classList.toggle(classNames);
        // stex miacnum enq mek klass
    }
    return this;
};