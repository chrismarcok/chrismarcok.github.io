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

(function(){
        var documentElem = $(document),
            li = $('li');
            about = $('#About'),
            project = $('#Projects'),
            contact = $('#Contact'),
            aboutLi = $('#about-li'),
            projectLi = $('#project-li'),
            contactLi = $('#contact-li'),
            logo0 = $('#projectLogo0'),
            logo1 = $('#projectLogo1'),
            logo2 = $('#projectLogo2'),
            logo3 = $('#projectLogo3'),
            logo4 = $('#projectLogo4'),
            logo5 = $('#projectLogo5'),
            logo6 = $('#projectLogo6'),
            logo7 = $('#projectLogo7'),
            logo8 = $('#projectLogo8');
            logo9 = $('#projectLogo9');
        var logos = [logo0, logo1, logo2, logo3,
        logo4, logo5, logo6, logo7, logo8,  logo9]

        documentElem.on('scroll', function() {
            var currentScrollTop = $(this).scrollTop();

            if (currentScrollTop > about.offset().top - 300){
                aboutLi.addClass('accent');
            }
            else{
                aboutLi.removeClass('accent');
            }

            if (currentScrollTop > project.offset().top){
                projectLi.addClass('accent');
                aboutLi.removeClass('accent');

                // for (let item of logos){
                //   item.addClass('animated ' + "jackInTheBox");
                //   var wait = setTimeout(1000);
                // }
                for (var i = 0; i < logos.length; i++){
                  logos[i].removeClass("hidden");
                  logos[i].addClass("animated " + "jackInTheBox" + " delay" + (i+1)*100);
                }

            }
            else{
                projectLi.removeClass('accent');
            }

            if ($(window).scrollTop() + $(window).height() == $(document).height()){ //if at bot of page
                contactLi.addClass('accent');
                aboutLi.removeClass('accent');
                projectLi.removeClass('accent');
            }
            else{
                contactLi.removeClass('accent');
            }
        });
})();
