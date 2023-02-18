let section2img = document.querySelector("#section2");
let sectionimg = document.querySelector(".section2img")








let whatsappspan =document.querySelector(".whatsapp-span");

let whatsappimg = document.querySelector("#section1");
// window.onscroll = 
window.onscroll = addEventListener("scroll", addtraimg );
window.onscroll = addEventListener("scroll", addtraspan );


function addtraspan() {
    if(window.scrollY >= section2img.offsetTop ){
        sectionimg.classList.add("section2imgmove")
    }
};
function addtraimg() {
    if(window.scrollY >= whatsappimg.offsetTop - 350){
        whatsappspan.style.opacity = 1;
    }
};


// menu 
let menuSpan = document.querySelector(".menu_span");

let nav = document.querySelector(".nav");

let head = document.querySelector("#head ");
let menu_svg = document.querySelector(".menu_svg");


menuSpan.addEventListener("click" , function() {
    nav.classList.toggle("nav_add");
    head.classList.toggle("head_top");
    menu_svg.classList.toggle("menu_svg_rotate");
    
});