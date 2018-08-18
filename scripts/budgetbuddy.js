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

$(".budgetbuddy-logo").delay(0).animate({"opacity": "1"}, 700);
$(".display-4").delay(1000).animate({"opacity": "1"}, 700);
$(".lead").delay(1500).animate({"opacity": "1"}, 700);

$(document).ready(function(){
  $('.displaypic-logoContainer').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });
});
