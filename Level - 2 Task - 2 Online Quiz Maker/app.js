// swiper
var swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable:   true,
    },
    breakpoints: {
        640:{
            slidesPerview: 2,
            spaceBetween: 20,
        },
        768:{
            slidesPerview: 3,
            spaceBetween: 40,
        },
        1024:{
            slidesPerview: 3,
            spaceBetween:50,
        }
    }

})