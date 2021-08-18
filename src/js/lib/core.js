const $ = function(selector) {
    return new $.prototype.init(selector);
};
$.prototype.init = function(selector){
    if(!selector){
        return this; //{} datark obyekt
    }
    if(selector.tagName){
        this[0] = selector;
        this.length = 1;
        return this;
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};
// ayn obyekti prototype-y vory kveradarcvi  init funkciayic
// nranum gri enq arnum mer glxavor  $-funkciayi prototype-y
// dra shnorhiv menq karoxanum enq ayn obyekti het vory stexcvum e
// $-funkciayi mijocov menq karox enq ogtagorcel canakacac metod vory
// klini ahd "obyekti" funkciayi prototype-i mej
$.prototype.init.prototype = $.prototype;
window.$ = $;
export default $;
// chnayac  window-ov globalarcel enq bayc qani vor arandzin
// ` fayliknerum importirovat petq e anenq $-funkcian
// dra hamar export enq anum chnayac  window-ov globalarcel enq
// libs.js-klini fayl export-neri vortex klini miacman tex bolor
//  modulneri hamar