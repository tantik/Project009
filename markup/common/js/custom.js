
//IE7、８での透過png画像対策
var ua = window.navigator.appVersion.toLowerCase();

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

//ーーーーーーーーーーーーパソコン版。ユーザーエージェントです。使用時はコメントアウトを外してください。ーーーーーーーーーーーーーーーー



// var _ua = (function(){
//     return {
//         ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
//         ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
//         ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
//         ltIE9:document.uniqueID && !window.matchMedia,
//         gtIE10:document.uniqueID && document.documentMode >= 10,
//         Trident:document.uniqueID,
//         Gecko:window.sidebar,
//         Presto:window.opera,
//         Blink:window.chrome,
//         Webkit:!window.chrome && typeof document.webkitIsFullScreen != undefined,
//         Touch:typeof document.ontouchstart != "undefined",
//         Mobile:typeof window.orientation != "undefined"
//     }
// })();
// if(_ua.ltIE6){
//     //IE6
// }else if(_ua.ltIE7){
//     //IE7
// }else if(_ua.ltIE8){
//     //IE8
// }else if(_ua.ltIE9){
//     //IE9
// }else if(_ua.gtIE10){
//     //IE10
// }else if(_ua.Blink){
//     //ChromeまたはBlink版Opera
// }else if(_ua.Gecko){
//     //Firefox
// }else if(_ua.Presto){
//    //旧Opera
// }else if(_ua.Trident && !_ua.ltIE8){
//    //IE9以上
// }else if( (_ua.Trident && !_ua.ltIE9 ) || _ua.gtIE10){
//    //IE10以上
// }else if(_ua.Mobile){
//     //スマートフォンやタブレット端末
// }else if(_ua.Touch){
//     //タッチデバイス
// }else if(_ua.Touch && !_ua.Mobile){
//     //デスクトップ版のタッチデバイス対応端末
// }else if(_ua.Webkit){
//     //safari
// }
//   if(navigator.userAgent.toLowerCase().indexOf('win') != -1){
//     // Windowsでの処理
//   }else if(navigator.userAgent.toLowerCase().indexOf('mac') != -1) {
//     // Macでの処理
//   }


//ーーーーーーーーーーーーユーザーエージェントここまで。使用時はコメントアウトを外してください。ーーーーーーーーーーーーーーーー
