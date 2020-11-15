$(document).ready(function () {

    // Inisiasi Gradasi
    function rungrad() {
        var granimInstance = new Granim({
            element: '#canvas-basic',
            direction: 'diagonal',
            isPausedWhenNotInView: true,
            states : {
                "default-state": {
                    gradients: [
                        ['#FFFFFF', '#FFFFFF'],
                        ['#E4E5E6', '#00416A'],
                        ['#E4E5E6', '#00416A'],
                        ['#E4E5E6', '#E4E5E6'],
                        ['#536976', '#E4E5E6'],
                        ['#536976', '#E4E5E6']   
                    ]
                }
            }
        });
    }

    // Inisiasi type
    function runtype() {
        var options = new Typed('.element', {
            strings: ['Hello, world!', 'Hello, world!', 'Hello, world!', 'Hello, world!', 'Hello, world!',  
                        'My name is <strong>Alan</strong>',
                        'My name is <strong>Alan</strong>',
                        'My name is <strong>Alan</strong>',
                        'My name is <strong>Alan</strong>',
                        'I am a <br/> <div class="web">&gt; Web Developer </div>',
                        'I am a <br/> <div class="web">&gt; Web Developer </div>',
                        'I am a <br/> <div class="web">&gt; Web Developer </div>',
                        'I am a <br/> <div class="grap"><span style="font-weight: 800;">Graphic</span> Designer</div>',
                        'I am a <br/> <div class="grap"><span style="font-weight: 800;">Graphic</span> Designer</div>',
                        'I am a <br/> <div class="grap"><span style="font-weight: 800;">Graphic</span> Designer</div>',
                        'I am a <br/> <strong>UI/UX</strong> Designer',
                        'I am a <br/> <strong>UI/UX</strong> Designer',    
                        'I am a <br/> <strong>UI/UX</strong> Designer',
                        'and this site is my portfolio.'   ],
            showCursor: false,
            contentType: 'html',
            typeSpeed: 15,
            backSpeed: 25,
            loop: false,
            smartBackspace: true // Default value
          });

        //   $(".element").Typed(options);

    };

    function runhelp() {
        var options = new Typed('.help', {
            strings: ['Click anwhere to continue'   ],
            showCursor: false,
            contentType: 'html',
            typeSpeed: 10,
            backDelay: 500,
            backSpeed: 35,
            loop: false
          });

        //   $(".element").Typed(options);

    };

    // Inisiasi Intro Squence
    function intro() {


        rungrad();
        runtype();
        runhelp();



        $('.help').delay(10000).animate({ opacity: 1}, 1500);
    };

    $('.intro').click(function (e) { 
        e.preventDefault();
        $('#more').animate({ opacity: 1}, 500);

        $('.help').animate({ opacity: 0}, 500);
    });

    
    //Roll Into
    intro();

    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        delay: .1,
        scale: 1.2
    });

    var text = document.getElementsByClassName('title');
    new simpleParallax(text, {
	    orientation: 'right'
    });
    


    $('#more').click(function (e) { 
        e.preventDefault();
        $('body').css('overflow-y','auto');
        $("body,html").animate(
            {
              scrollTop: $("#anxwer").offset().top
            },
            4000 //speed
          );
    });

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        $('.intro').css({
            opacity: function() {
                var elementHeight = $(this).height(),
                    opacity = (((elementHeight - scrollTop) / elementHeight) * 1.5);
                    console.log(opacity);
                return opacity;
            }
        });

        var wScroll = $(this).scrollTop();
            $(".t-1").css({
            transform: "translateX(+" + wScroll / 450 + "%)"
        });

        var wScroll = $(this).scrollTop();
            $(".t-2").css({
            transform: "translateX(-" + wScroll / 440 + "%)"
        });

        var wScroll = $(this).scrollTop();
            $(".t-3").css({
            transform: "translateX(+" + wScroll / 445 + "%)"
        });

        var wScroll = $(this).scrollTop();
            $(".t-4").css({
            transform: "translateX(-" + wScroll / 455 + "%)"
        });

        var wScroll = $(this).scrollTop();
            $(".t-5").css({
            transform: "translateX(+" + wScroll / 450 + "%)"
        });

        var wScroll = $(this).scrollTop();
            $(".t-6").css({
            transform: "translateX(-" + wScroll / 445 + "%)"
        });
    
        var wScroll = $(this).scrollTop();
            $(".t-7").css({
            transform: "translateX(+" + wScroll / 455 + "%)"
        });
    
        var wScroll = $(this).scrollTop();
            $(".t-8").css({
            transform: "translateX(-" + wScroll / 445 + "%)"
        });

        var wScroll = $(this).scrollTop();
            $(".t-9").css({
            transform: "translateX(+" + wScroll / 450 + "%)"
        });
    
        var wScroll = $(this).scrollTop();
            $(".t-10").css({
            transform: "translateX(-" + wScroll / 445 + "%)"
        });


        
    });
      
/*     $('#anxwer').waypoint(function() {
        $(".t-2,.t-3,.t-4,.t-5,.t-6,.t-7,.t-8,.t-9,.t-10").fadeOut();
     }, { offset: 'bottom-in-view' });   */ 
});