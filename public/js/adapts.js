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

    $('.intro-parts').click(function (e) { 
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
        $('body').css('overflow','auto');
        $("body,html").animate(
            {
              scrollTop: $("#anxwer").offset().top
            },
            1500 //speed
          );
    });
});