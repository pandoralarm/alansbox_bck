$(document).ready(function () {
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#E4E5E6', '#E4E5E6'],
                    ['#E4E5E6', '#00416A'],
                    ['#E4E5E6', '#00416A'],
                    ['#E4E5E6', '#E4E5E6'],
                    ['#E4E5E6', '#E4E5E6'],
                    ['#536976', '#E4E5E6'],
                    ['#536976', '#E4E5E6']   
                ]
            }
        }
    });

    var typed = new Typed('.element', {
        strings: ['Hello, world!', 'Hello, world!', 'Hello, world!', 'Hello, world!', 'Hello, world!',  
                    'My name is <strong>Alan</strong>',
                    'My name is <strong>Alan</strong>',
                    'My name is <strong>Alan</strong>',
                    'My name is <strong>Alan</strong>',
                    'I am a <br/> Web Developer',
                    'I am a <br/> Web Developer',
                    'I am a <br/> Web Developer',
                    'I am a <br/> Graphic Designer',
                    'I am a <br/> Graphic Designer',
                    'I am a <br/> Graphic Designer',
                    'I am a <br/> UI/UX Designer',
                    'I am a <br/> UI/UX Designer',    
                    'I am a <br/> UI/UX Designer',
                    'And this site is my portfolio.'   ],
        showCursor: false,
        contentType: 'html',
        typeSpeed: 10,
        backDelay: 500,
        backSpeed: 35,
        loop: false,
        smartBackspace: true // Default value
      });
});