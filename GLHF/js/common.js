$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'], 
		navbar: {
			title: '<img src="img/logo-new.svg" alt="GLHF">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		setTimeout(function () {
			$('.hamburger').addClass('is-active');
		}, 50);
	}).bind('close:finish', function() {
		setTimeout(function () {
			$('.hamburger').removeClass('is-active');
		}, 50);
	});


	$('.sponsors').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		// nav: true,
		// navText: ['<i class="fa fa-angle-left"></i>',  '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

// 	$('.open-popup-link').magnificPopup({
// 		type:'inline',
//   midClick: true 
// });

$('.open-popup-link').magnificPopup({
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

	/*Arrow-bottom*/
	$(".goto-next").click(function() {
		$("html, body").animate({ scrollTop: $(".header-site").height()+20 }, "slow");
		return false;
	});

});

$(window).on('load',function(){
	$('.preloader').delay(1000).fadeOut('slow');
})