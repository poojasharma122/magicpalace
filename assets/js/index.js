// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End

// Header Scroll JS Start
$(document).ready(function () {
  var lastScrollTop = 0;

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var header = $("header");
    var topBar = $(".top_bar");
    header.toggleClass("fixed_header", scrollTop > 0);
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      topBar.addClass("hide");
    } else {
      topBar.removeClass("hide");
    }
    lastScrollTop = scrollTop;
  });
});
// Header Scroll JS End


// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End


// Slider JS Start
$('.single_item_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  prevArrow: `<button class="slick-prev custom-arrow custom-prev" aria-label="Previous slide">
				 <svg  viewBox="0 0 32 72" xmlns="http://www.w3.org/2000/svg"><path stroke="#ff0808" stroke-width="1.5" d="M31 71L1 35 31 1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</button>`,
  nextArrow: `<button class="slick-next custom-arrow custom-next" aria-label="Next slide">
				 <svg  viewBox="0 0 32 72" xmlns="http://www.w3.org/2000/svg"><path stroke="#ff0808" stroke-width="1.5" d="M1 71l30-36L1 1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</button>`
});
// Slider JS End


