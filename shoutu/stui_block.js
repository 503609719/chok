/*!
 * Stui v3.0 Copyright 2016-2018 http://v.shoutu.cn
 * Email 726662013@qq.com,admin@shoutu.cn
 */
var stui = {
	'browser': {//浏览器
		url: document.URL,
		domain: document.domain,
		title: document.title,
		language: (navigator.browserLanguage || navigator.language).toLowerCase(),
		canvas: function() {
			return !!document.createElement("canvas").getContext
		}(),
		useragent: function() {
			var a = navigator.userAgent;
			return {
				mobile: !! a.match(/AppleWebKit.*Mobile.*/),
				ios: !! a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: -1 < a.indexOf("Android") || -1 < a.indexOf("Linux"),
				iPhone: -1 < a.indexOf("iPhone") || -1 < a.indexOf("Mac"),
				iPad: -1 < a.indexOf("iPad"),
				trident: -1 < a.indexOf("Trident"),
				presto: -1 < a.indexOf("Presto"),
				webKit: -1 < a.indexOf("AppleWebKit"),
				gecko: -1 < a.indexOf("Gecko") && -1 == a.indexOf("KHTML"),
				weixin: -1 < a.indexOf("MicroMessenger")
			}
		}()
	},
	'mobile': {//移动端
		'popup': function() {
			$popblock = $(".popup");
			$(".open-popup").click(function() {
				$popblock.addClass("popup-visible");
				$("body").append('<div class="mask"></div>');
				$(".close-popup").click(function() {
					$popblock.removeClass("popup-visible");
					$(".mask").remove();
					$("body").removeClass("modal-open")
				});
				$(".mask").click(function() {
					$popblock.removeClass("popup-visible");
					$(this).remove();
					$("body").removeClass("modal-open")
				})
			})
		},
		'slide': function() {
			$(".type-slide").each(function(a) {
				$index = $(this).find('.active').index()*1;
				if($index > 3){
					$index = $index-3;
				}else{
					$index = 0;
				}
				$(this).flickity({
					cellAlign: 'left',
					freeScroll: true,
					contain: true,
					prevNextButtons: false,				
					pageDots: false,
					initialIndex: $index
				});
			})
		},
	},
	'images': {//图片处理
		'lazyload': function() {
			$(".lazyload").lazyload({
				effect: "fadeIn",
				threshold: 200,
				failurelimit: 15,
				skip_invisible: false
			})
		},
		'carousel': function() {
			$('.carousel_default').flickity({
			  	cellAlign: 'left',
			  	contain: true,
			  	wrapAround: true,
			  	autoPlay: true,
			  	prevNextButtons: false
			});
			$('.carousel_wide').flickity({
			  	cellAlign: 'center',
			  	contain: true,
			  	wrapAround: true,
			  	autoPlay: true
			});
			$('.carousel_center').flickity({
			  	cellAlign: 'center',
			  	contain: true,
			  	wrapAround: true,
			  	autoPlay: true,
			  	prevNextButtons: false
			});
			$('.carousel_right').flickity({
			  	cellAlign: 'left',
			  	wrapAround: true,
			  	contain: true,
			  	pageDots: false
			});
		},
		'qrcode': function() {
			$("img.qrcode").attr("src", "https://api.isoyu.com/qr/?m=0&e=L&p=6&url=" + encodeURIComponent(stui.browser.url) + "")
		}
	},
	'common': {//公共基础
		'bootstrap': function() {
			$('a[data-toggle="tab"]').on("shown.bs.tab", function(a) {
				var b = $(a.target).text();
				$(a.relatedTarget).text();
				$("span.active-tab").html(b)
			})
		},
		'headroom': function() {
			var header = document.querySelector("#header-top");
            var headroom = new Headroom(header, {
				tolerance: 5,
				offset: 205,
				classes: {
					initial: "top-fixed",
					pinned: "top-fixed-up",
					unpinned: "top-fixed-down"
				}
			});
			headroom.init();
		},
		'history': function() {
			if($.cookie("recente")){
			    var json=eval("("+$.cookie("recente")+")");
			    var list="";
			    for(i=0;i<json.length;i++){
			        list = list + "<li class='top-line'><a href='"+json[i].vod_url+"' title='"+json[i].vod_name+"'><span class='pull-right text-red'>"+json[i].vod_part+"</span>"+json[i].vod_name+"</a></li>";
			    }
			    $("#stui_history").append(list);
			}
			else
	            $("#stui_history").append("<p style='padding: 80px 0; text-align: center'>您还没有看过影片哦</p>");
		   
		    $(".historyclean").on("click",function(){
		    	$.cookie("recente",null,{expires:-1,path: '/'});
		    })		    
		},
		'collapse': function() {
			$("a.detail-more").on("click",function(){
				$(this).parent().find(".detail-sketch").addClass("hide");
				$(this).parent().find(".detail-content").css("display","");
				$(this).remove();
			})
		},
		'scrolltop': function() {
			var a = $(window);
			$scrollTopLink = $("a.backtop");
			a.scroll(function() {
				500 < $(this).scrollTop() ? $scrollTopLink.css("display", "") : $scrollTopLink.css("display", "none")
			});
			$scrollTopLink.on("click", function() {
				$("html, body").animate({
					scrollTop: 0
				}, 400);
				return !1
			})
		},
	}	
};
$(document).ready(function() {	
	if(stui.browser.useragent.mobile){	
		stui.mobile.slide();
		stui.mobile.popup();
	}
	stui.images.lazyload();
	stui.images.carousel();
	stui.images.qrcode();
	stui.common.bootstrap();
	stui.common.headroom();
	stui.common.history();
	stui.common.collapse();
	stui.common.scrolltop();	
});
