//Function expretions pada element
const selectElement = (s) => document.querySelector(s);

// open menu on click
selectElement(s='.open').addEventListener('click', () => {
    selectElement(s='.nav-list').classList.add('active');
});

// close menu on click 
selectElement(s='.close').addEventListener('click', () => {
    selectElement(s='.nav-list').classList.remove(tokens='active');
});

// landing element experience
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.testimoni').offset().top - 500){
        $('.testimoni .testimonials-text-box').addClass('show');
    }

    if(wScroll > $('.testimoni').offset().top - 400){
        $('.testimoni .testimonials-customer').addClass('up');
    }

});