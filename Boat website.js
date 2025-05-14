let slideIndex = 0;
// function automaticSlide(){
    // setTimeout(automaticSlide, 3000);
    // var pics;
    // const img = document.querySelectorAll('img');
    // for(pics=0; pics<img.length; pics++){
        // img[pics].style.display = "none";
    // }
    // slideIndex++;
    // if(slideIndex > img.length){
        // slideIndex = 1;
    // }
    // img[slideIndex-1].style.display = 'block';
// }
// automaticSlide();





let images=[
    "https://www.boat-lifestyle.com/cdn/shop/files/desktop_banner_ebeb8b77-5c48-40bf-a2fb-a7bf0bcd4470_1440x.png?v=1740743125",
    "https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228",
    "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_4_copy_10_1440x.png?v=1739861669",
    "https://www.boat-lifestyle.com/cdn/shop/files/web_copy_3_1440x.png?v=1739443336",
    "https://www.boat-lifestyle.com/cdn/shop/files/Banner_web_ff13e4e1-e670-4b62-95bb-9c1d7bcb22b9_1440x.png?v=1740200822",
    "https://www.boat-lifestyle.com/cdn/shop/files/web_47453a27-f192-43f9-9eb3-c398566a645a_1440x.png?v=1739988457",
    "https://www.boat-lifestyle.com/cdn/shop/files/Banner-desk-1_1440x.jpg?v=1741067771",
    "https://www.boat-lifestyle.com/cdn/shop/files/Banner-desk_1440x.jpg?v=1740377858"
];
let idx=0;
let img=document.getElementById("mainimg");

function Slider(){
    img.src=images[idx];
    idx++;
    if(idx===images.length) idx=0;
}


setInterval(Slider,3000);

