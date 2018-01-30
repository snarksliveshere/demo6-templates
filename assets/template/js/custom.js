$(function(){

	var onloadCallback = function() {
		mysitekey = '';
		
		if($('#callback_g').length ){
			grecaptcha.render('callback_g', {
				'sitekey' : mysitekey
			});
		}

		if($('#order_g').length ){
			grecaptcha.render('order_g', {
				'sitekey' : mysitekey
			});
		}
		if($('#question_g').length ){
			grecaptcha.render('order_g', {
				'sitekey' : mysitekey
			});
		}
		if($('#deliver_g').length ){
			grecaptcha.render('order_g', {
				'sitekey' : mysitekey
			});
		}
		if($('#call_g').length ){
			grecaptcha.render('callback_g', {
				'sitekey' : mysitekey
			});
		}
	}


	$('a.fancybox').fancybox();
	$('[data-event]').on('click',function(){
		if($(this).data('event') == 'fancy'){
			jQuery.fancybox({
				'href':'#'+$(this).data('name'),
				'closeBtn':true,
				'wrapCSS':'modal_forms'
			})
		}
	})


	$('[name="phone"]').mask("+7 (999) 999-9999");



	$('#search_btn').on('click',function(){
		$('.b_search').slideToggle();
	})
	$('.b_search__close').on('click',function(){
		$('.b_search').slideUp(300);
	})
	$("html, body, .b_search__close").on('click', function(e){
		if(!$(e.target).closest(".b_search, #search_btn").length) {
			$(".b_search").slideUp();
				
		}
	});


	// Sticky Menu
	var menu = $("#js_menu_horizontal");
	$(window).scroll(function(){
		if($(window).scrollTop() > 70) {
			if(menu.not(".header__menu_fixed")){
				menu.addClass("header__menu_fixed");
			}
		}else{
			if(menu.is(".header__menu_fixed")){
				menu.removeClass("header__menu_fixed");	
			}
		}
	});
    // End of Sticky Menu

	// Mobile Section

		// Mobile Menu
	$(".menu_mobile__btn").on("click", function(e) {
		e.preventDefault();
		$(".b_menu.header__menu").toggleClass('header__menu_active');
	});
	$("html, body").on('click', function(e){
		if(!$(e.target).closest(".header__menu, .menu_mobile__btn.menu_tablet").length) {
			$(".header__menu").removeClass('header__menu_active');
		}
	});
		// End of Mobile Menu

		// move Header Logo in Mobile
	var width = $(window).width();
	if(width < 815){
        $('.b_logo.header__logo >').clone().appendTo('.b_search_pr');
	}
	    // End of move Header Logo in Mobile

	//End of Mobile	 Section

	var body = $("body");
	var menuMobileSubToggle = function(elem){

		var items = elem.closest("li").find("ul").eq(0);

		if(items.css("display") == "block") {
			items.slideUp();
			elem.find("i").removeClass("glyphicon-minus").addClass("glyphicon-plus");
		} else {
			items.slideDown();
			elem.find("i").removeClass("glyphicon-plus").addClass("glyphicon-minus");
		}
	};

	body.on("click", ".b_menu__link_icon_mobile", function(e) {
		e.preventDefault();
		menuMobileSubToggle($(this));
	});


	// Sliders Init

	$('.main_slider').slick({
		slidesToShow: 1,
		autoplay: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});

    $('.home-best-products-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    // end of Sliders Init

});