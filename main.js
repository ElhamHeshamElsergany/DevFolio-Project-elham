let aboutOffset =$("#about").offset().top;
$(window).scroll(function (){

    let wScroll=$(window).scrollTop();
    if(wScroll > aboutOffset){
     $("nav").css("backgroundColor","#426ba86c");
     $("#btnUp").fadeIn(500);
    }
    else{
        $("nav").css("backgroundColor","transparent");
        $("#btnUp").fadeOut(500);

    }
})
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},1000);

});

var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['Designer', 'Develober','Freelancer','Photographer'],
    typeSpeed:200,    loop: true , loopCount: Infinity,

  });
 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
