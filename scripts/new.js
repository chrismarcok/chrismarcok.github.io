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
            contactLi = $('#contact-li');

        documentElem.on('scroll', function() {
            var currentScrollTop = $(this).scrollTop();

            if (currentScrollTop > about.offset().top - 300){
                aboutLi.addClass('accent');
            }
            else{
                aboutLi.removeClass('accent');
            }

            console.log(contact.offset().top - contact.height() - 400);
            console.log("currentScrollTop " + currentScrollTop);

            if (currentScrollTop > project.offset().top){
                projectLi.addClass('accent');
                aboutLi.removeClass('accent');
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
