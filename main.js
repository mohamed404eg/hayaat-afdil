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


// section2-h2 animation  offsetTop 
window.onscroll = addEventListener("scroll", section2 );

let section2h2 = document.querySelector(".section2-h2");
function section2() {
    if(window.scrollY >= section2img.offsetTop -450){
        section2h2.style.cssText = "animation:section2-h2 1s 1 ease-in ; ";
    }
};
// section2-h2 animation  offsetTop 
let head = document.querySelector("#head ");
let menu_svg = document.querySelector(".menu_svg");


menuSpan.addEventListener("click" , function() {
    nav.classList.toggle("nav_add");
    head.classList.toggle("head_top");
    menu_svg.classList.toggle("menu_svg_rotate");
    
});

// scroll up to button

let scrollupjs = document.querySelector(".scrollup");
window.onscroll = () => {
    if(window.scrollY >= 700) {
        scrollupjs.style.display = "block";
    } else {
        scrollupjs.style.display = "none";
    }

};

scrollupjs.addEventListener ("click" , ()=>{
    window.scrollTo(
    { top:0,  behavior: "smooth",}
    )
})
