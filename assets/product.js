/* product left start */
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
/* 	product left end */

$('.section-main-product .faq-heading').click(function () {
    $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});

$(".product-faq .box").click(function(){
    $(this).next().slideToggle("fast");
    $(this).find('i').toggle();
}); 