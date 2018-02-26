$(document).ready(function() {

	var headertopoption = $(window);
	var headTop = $('.header-top-area');

	headertopoption.on('scroll', function () {
		if (headertopoption.scrollTop() > 100) {
			headTop.addClass('menu-bg');
		} else {
			headTop.removeClass('menu-bg');
		}
	});
	
/*Animate*/
	$(".main-head .header-wrap .h1").animated("fadeInUp");
	$(".main-head .header-wrap .use-btn").animated("fadeInLeft");
	$(".main-head .header-wrap .learn-btn").animated("fadeInRight");
	$(".section_1 .form-inline .btn").animated("fadeInRight");
	$(".section_1 .section_title h2").animated("fadeInDown");
	$(".section_1 .form-inline .form-control").animated("fadeInLeft");
	$(".section_1 .form-inline .btn").animated("fadeInRight");

	$(".section_2 .title").animated("fadeInDown");
	$(".section_2 .content-box").animated("fadeInUp");

	$(".section_2 .lightblackbg .h4").animated("zoomIn");
	$(".section_2 .themebg .h4").animated("zoomIn");
	$(".section_2 .step-box .fa").animated("zoomIn");

	$(".quick_menu ul li").animated("fadeIn");
	$(".solutions ul li").animated("fadeIn");

	$(".section_3 .text-center").animated("fadeInUp");
	$(".section_5 .col-md-9").animated("bounceInDown");
	// //Аякс отправка форм
	// //Документация: http://api.jquery.com/jquery.ajax/
	// $(".forms").submit(function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.magnificPopup.close();
	// 			$(".forms").trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

});