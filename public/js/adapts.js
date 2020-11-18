$(document).ready(function () {

    // Inisiasi Gradasi
    function rungrad() {
        var granimInstance = new Granim({
            element: '#canvas-basic',
            direction: 'diagonal',
            isPausedWhenNotInView: false,
            states : {
                "default-state": {
                    gradients: [
                        ['#FFFFFF', '#FFFFFF'],
                        ['#E4E5E6', '#333333'],
                        ['#E4E5E6', '#333333'],
                        ['#E4E5E6', '#E4E5E6'],
                        ['#333333', '#E4E5E6'],
                        ['#333333', '#E4E5E6']   
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

          console.log('HERE');
        //   $(".element").Typed(options);

    };

    function runhelp() {
        var options = new Typed('.help', {
            strings: ['Click anywhere to continue'   ],
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



    $('#more').click(function (e) { 
        e.preventDefault();

       $('.intro').addClass('zooms');
       $('.intro').animate({ opacity: 0}, 2000, function() {
            $('.intro').css('display', 'none');
            $('body').css('overflow-y', 'scroll');
            $('#main').css('display', 'inline');
            $('#main').animate({ opacity : 1 }, 1000);
       });

        
    });


    function headtype(){
        var options = new Typed('#typed-4', {
            strings: ['skills','skills', 'skills', 'skills',  
                        'styles','styles','styles','styles',
                         'intentions','intentions','intentions','intentions'],
            showCursor: true,
            contentType: 'html',
            typeSpeed: 50,
            backDelay: 300,
            backSpeed: 35,
            loop: true
          });
    };

        //   $(".element").Typed(options);


    headtype();



    var images = document.querySelectorAll('img');
    new simpleParallax(images);



});