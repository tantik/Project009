$(window).resize(function() {
	$('.slide_block').slideBlock();
	
});

$(document).ready(initPage);
function initPage(){
	initDropNav();
	initGallery();
	fixedHeader();
	mobileMenu();
	$('.slide_block').slideBlock();
	
}

/* Drop Navigation */
function initDropNav(){
	$('#dropmenu li').hover(function () {
		 clearTimeout($.data(this,'timer'));
	 		$('ul',this).stop(true,true).slideDown(200);
	}, function () {
	$.data(this,'timer', setTimeout($.proxy(function() {
	  		$('ul',this).stop(true,true).slideUp(200);
		}, this), 100));
	});
}

/* recent Gallery */
function initGallery(){
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 0,
		effect: 'fade'
    });
}

// Fixed Header
function fixedHeader(){
	jQuery(document).on("scroll",function(){
		if (jQuery(window).scrollTop() > 146){
		    jQuery('body').addClass('small-header');
		}else{
		    jQuery('body').removeClass('small-header');
		}
	});
	
}

/* Mobile Menu */
function mobileMenu(){
	$('a.mobile_opener').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-visible');
	});
	$('.bg.sp').click(function() {
		$('body').removeClass('nav-visible');
	});
}

/* Slide Block */
(function($) {
	$.fn.slideBlock = function(options){
		var options = $.extend({
			linkSlide: 'a.slide_link',
			slideBlock: 'div.slide_box',
			openClass: 'slide-active',
			durationSlide: 500,
			openComplete: false,
			closeComplete: false,
			mode:	false, //'accordion' - accordion mode or false - slide-block
			childSlide:	'accordion-child', //use only if mode: 'accordion'
		}, options);
		this.each(function() {
			if (options.mode === 'accordion') {
				var accordion = jQuery(this);
				var childSlide = accordion.find('> .' + options.childSlide, this);
				childSlide.each(function(){
					var $this = jQuery(this);
					if (!$this.is('.' + options.openClass)) {
						$this.children(options.slideBlock).css('display','none');
					}
				});
				childSlide.each(function(){
					var $this = jQuery(this);
					var link = $(options.linkSlide, this).eq(0);
					link.click(function(){
						var that = $(this);
						if (that.closest(childSlide).is('.'+options.openClass)) {
							that.closest(childSlide).removeClass(options.openClass);
							that.closest(childSlide).find('> ' + options.slideBlock).slideUp(durationSlide, function(){if(typeof( options.closeComplete) == 'function') options.closeComplete()});
						} else {
							that.closest(accordion).find(childSlide).removeClass(options.openClass);
							that.closest(accordion).find(childSlide).find('> ' + options.slideBlock).slideUp(durationSlide, function(){if(typeof( options.closeComplete) == 'function') options.closeComplete()});

							that.parent(childSlide).parent().addClass(options.openClass);
							that.parent(childSlide).parent().find('> ' + options.slideBlock).slideDown(durationSlide, function(){
								$('body,html').animate({scrollTop:that.offset().top},800);
								if(typeof( options.openComplete) == 'function') options.openComplete(this);
							});

						}
						return false;
					});
				});
			} else {
				var $this = jQuery(this);
				var link = $(options.linkSlide, this).eq(0);
				var slideBlock = $(options.slideBlock, this).eq(0);
				var openClass = options.openClass;
				var durationSlide = options.durationSlide;

				if (!$this.is('.'+openClass)) {
					$this.find(slideBlock).css('display','none');
				}
				link.click(function(e){
					e.preventDefault();
					if ($this.is('.'+ openClass)) {
						$this.removeClass(openClass);
						$this.find(slideBlock).slideUp(durationSlide, function(){if(typeof( options.closeComplete) == 'function') options.closeComplete()});
					} else {
						$this.addClass(openClass);
						$this.find(slideBlock).slideDown(durationSlide, function(){if(typeof( options.openComplete) == 'function') options.openComplete(this)});
					}
					return false;
				});
			}
		});
		return this;
	};
})(jQuery);
