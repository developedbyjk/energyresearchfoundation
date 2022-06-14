
var slideIndex = 1;
show_slide(slideIndex);

function plusSlides(n){
    show_slide(slideIndex+=1)
}

function show_slide(n){
    var slides = document.getElementsByClassName("box");
    if(n>slides.length){slideIndex = 1}
    if(n<1){slideIndex=slides.length}

    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    slides.[slideIndex-1].style.display = "block";
}
