//Nav Bar Disappear
(function(){
        var documentElem = $(document),
            nav = $('nav'),
            lastScrollTop = 0;

        documentElem.on('scroll', function() {
            var currentScrollTop = $(this).scrollTop();

            if (currentScrollTop > lastScrollTop && currentScrollTop > 100){
                nav.addClass('hidden');
            }
            else{
                nav.removeClass('hidden');
            }

            lastScrollTop = currentScrollTop;
        });
})();


/*
var playPause = anime({
      targets: 'div.wrap',
      translateX: [3000, 0], // Translate X from 100 to 200
      duration: 500,
      autoplay: false
});

*/

var expand = anime({
      targets: 'div.box2bg',
      height: 2400,
      duration: 1250,
      autoplay: false,
      easing: 'easeOutSine'
});

/*
var playPause1 = anime({
      targets: 'div.wrap',
      translateX: [3000, 0], // Translate X from 100 to 200
      duration: 1,
      autoplay: false
});

var expand1 = anime({
      targets: 'div.box2bg',
      height: 1720,
      duration: 1,
      autoplay: false
});

*/


anime({
      targets: '#top-banner',
      delay: 400,
      translateY: [
      { value: -150, duration: 1000 },
      { value: -50, duration: 800 }
    ],
      scale: 1.5,
      rotate: '-0.03turn',
      loop: false,
      autoplay: true
});

//Play Animation at trigger scroll depth (1200)
(function(){
        var documentElem = $(document),
            elem = $(document.getElementsByClassName("wrap")),
            lastScrollTop = 0;

        documentElem.on('scroll', function() {
            var currentScrollTop = $(this).scrollTop();
            if (currentScrollTop > 1200){
                expand.play();
                //playPause.play();
                elem.addClass('unveil');

            }
        });
})();


//Quickly adjust if user scrolls left
(function(){
        var documentElem = $(document),
            nav = $('nav'),
            lastScrollTop = 0;

        documentElem.on('scroll', function() {
            var currentScrollLeft = $(this).scrollLeft();
            if (currentScrollLeft > 1){
                expand1.play();
                playPause1.play();
            }
        });
})();


//"Projects" Hover Li -> Margin Increase
(function(){
        var documentElem = $(document.getElementById("dropdown")),
            nav = $('nav ul'),
            lastScrollTop = 0;

            documentElem.on({
                "mouseenter": function () {
                    nav.addClass("expand");
                },
                "mouseleave": function () {
                    nav.removeClass('expand');
                }
            });
})();

//Individial "Items" Hover Li -> Margin Increase
(function(){
        var documentElem = $(document.getElementsByClassName("item")),
            nav = $('nav ul'),
            lastScrollTop = 0;

            documentElem.on({
                "mouseenter": function () {
                    nav.addClass("expand");
                }
            });
})();

(function(){
        var documentElem = $(document),
            nav = $('nav'),
            lastScrollTop = 0;

        documentElem.on('scroll', function() {
            var currentScrollTop = $(this).scrollTop();

            if (currentScrollTop > lastScrollTop && currentScrollTop > 100){
                nav.addClass('hidden');
            }
            else{
                nav.removeClass('hidden');
            }

            lastScrollTop = currentScrollTop;
        });
})();

// Smooth Bookmarking
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
