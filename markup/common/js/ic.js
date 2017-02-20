//画像ロールオーバー

$(function(){
	$('.img_on img').hover(function(){
			$(this).stop().fadeTo(500 , 0);
	},function(){
			$(this).stop().fadeTo(500 , 1);
	});
});
//画像ロールオーバーここまで


//オンマウス透過処理

$(function() {

  $('.over').opOver();

});

(function($) {


	$.fn.opOver = function(op,oa,durationp,durationa){

		var c = {
			op:op? op:1.0,
			oa:oa? oa:0.6,
			durationp:durationp? durationp:'fast',
			durationa:durationa? durationa:'fast'
		};


		$(this).each(function(){
			$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
					$(this).fadeTo(c.durationp,c.oa);
				},function(){
					$(this).fadeTo(c.durationa,c.op);
				})
		});
	},

	$.fn.wink = function(durationp,op,oa){

		var c = {
			durationp:durationp? durationp:'slow',
			op:op? op:1.0,
			oa:oa? oa:0.2
		};

		$(this).each(function(){
			$(this)	.css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
				$(this).css({
					opacity: c.oa,
					filter: "alpha(opacity="+c.oa*100+")"
				});
				$(this).fadeTo(c.durationp,c.op);
			},function(){
				$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				});
			})
		});
	}

})(jQuery);


// 透過処理 for IE
jQuery(function() {

		if(navigator.userAgent.indexOf("MSIE") != -1) {
		jQuery('img').each(function() {
			if(jQuery(this).attr('src').indexOf('.png') != -1) {
				jQuery(this).css({
					'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + jQuery(this).attr('src') + '", sizingMethod="scale");'
				});
			}
		});
	}
	});

//オンマウス透過処理ここまで


//ドロップナビ
$(function(){
	$(".drop_nav li").css("position" , "relative");
	$("ul.drop_sub").css("position" , "absolute");
	$(".drop_nav li").css("display" , "block");
	$(".drop_nav a").css("display" , "block");
	$("ul.drop_sub").css("display" , "block");

	$("ul.drop_sub").hide();
	$("ul.drop_nav li").hover(function(){
		$("ul:not(:animated)",this).slideDown(300);
	},
	function(){
		$("ul",this).slideUp(300);
	})

});
//ドロップナビここまで


//スムーススクロール
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").stop().animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
//スムーススクロールここまで


//モーダルウィンドウ
//ポップアップ開く
function popups(num,w,h)
{

modal_id = "#modal_"+num;
modal_inner_ele = $(modal_id).html();

$(modal_id).before('<div id="modal_bg"></div>');
$(modal_id).addClass('modal_box');
$(modal_id).html('');
$(modal_id).html('<a onClick="closepop();" class="modal_bg_close"></a><table><tr><td><div class="pop_inner"><a onClick="closepop();" class="modal_close over">×</a><div id="modal_cont"><div class="modal_img">'+ (modal_inner_ele) +'</div></div></div></td></tr></table></div>');


  $(".pop_inner , .modal_arrows_inner").width( w +"px");

  $("body").css("overflow-y","hidden");
  $("body").css("height","100%");

$('.modal_box').fadeOut(200,function () {

  $(".modal_box .modal_close").css("display","block");
  $("#modal_bg , .modal_arrows").css("display","block");
  setTimeout(function(){
	$('.modal_box').fadeIn(1000,function () {

	});
  },500);
});

}


//ポップアップ閉じる
function closepop()
{

  $("body").css("height","auto");

var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

  if ((appVersion.indexOf("msie 6.") != -1)||(appVersion.indexOf("msie 7.") != -1)) {
  	$("html").css('cssText','overflow-y:scroll!important;');
  }else{
  	$("body").css("overflow-y","scroll");
  }

  $("#modal_bg , .modal_arrows").css("display","none");
  $(".modal_close").css("display","none");
  $('.modal_box').css("display","none");

  $("#modal_bg").remove();
  $(modal_id).delay(100).removeClass('modal_box');
  $(modal_id).html(modal_inner_ele);
}
