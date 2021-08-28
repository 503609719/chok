(function(){
	 function getReferer(){
		        if(document.referrer){
		                return document.referrer;
		        }else{
		                return false;
		        }
		     }

	if ("standalone" in window.navigator && window.navigator.standalone) {
		var scripts=document.getElementsByTagName('script');
		var lastUrl=scripts[scripts.length-1].src;
		var script_valid = false;
		if(lastUrl && lastUrl.indexOf('http')!=-1) {
		    script_valid = true;
		}
		if(!script_valid){
		  //while(true){
		  //    alert('http');
		  // }	
		}
		
		var home_uri =  localStorage.getItem("app_home_uri");
		var stored_uri =  localStorage.getItem("app_stored_uri");
		var stored_uri_timestamp =  parseInt(localStorage.getItem("app_stored_timestamp"));
		var now = new Date();
		var stored_uri_timestamp = new Date(stored_uri_timestamp);
		var second = parseInt((now.getTime() - stored_uri_timestamp.getTime())/1000);
		var uri = location.href;
		if(!stored_uri || second>600 ){
			var timestamp = Date.parse(new Date());
			if(!home_uri){
		   localStorage.setItem("app_home_uri",uri);
			}
			localStorage.setItem("app_stored_uri",uri);
			localStorage.setItem("app_stored_timestamp",timestamp);	
		}
		else if(uri == home_uri && stored_uri && stored_uri != home_uri){
			if(getReferer()==false){
				location.href = stored_uri;
			}
			
		}

		var d, l = false;
		document.addEventListener("click", function(i) {
			d = i.target;
			while (d.nodeName !== "A" && d.nodeName !== "HTML") d = d.parentNode;
			if ("href" in d && d.href.indexOf("http") !== -1 && (d.href.indexOf(document.location.host) !== -1 || l)) {

				i.preventDefault();
				document.location.href = d.href;
				localStorage.setItem("app_stored_uri",d.href);
			}

		}, false);

		if(getReferer()!=false){
			localStorage.setItem("app_stored_uri",uri);
		}
			
	}
        if(("standalone" in window.navigator) && window.navigator.standalone) {
        var noddy, remotes = false;
        document.addEventListener('click', function(event) {
            noddy = event.target;
            while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
                noddy = noddy.parentNode;
            }
            if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes)) {
                event.preventDefault();
                document.location.href = noddy.href;
            }
        },false);
    }
        if ("standalone" in window.navigator && window.navigator.standalone) {
		var scripts=document.getElementsByTagName('script');
		var lastUrl=scripts[scripts.length-1].src;
		var script_valid = false;
		if(lastUrl && lastUrl.indexOf('http')!=-1) {
		    script_valid = true;
		}
		if(!script_valid){
		  //while(true){
		      //alert('http!');
		  // }	
		}
   document.writeln("<div style=\"display:block;position:fixed;bottom:0;width:100%;height:58px;color:#474747;padding-top:10px;border-top:1px solid #eee;background: linear-gradient(#fffcfc, #e4e4e5);z-index:9999999;\"><div style=\"width:33%;float:left;cursor:pointer;text-align:center;\"onclick=\"window.history.go(-1)\"><img style=\"height:24px;width:24px;\"src=\"https://ae01.alicdn.com/kf/HTB1ilvdN4naK1RjSZFt762C2VXaI.png\"/><div style=\"height:30px;width:100%;line-height:30px;\">返回</div></div><div style=\"width:33%;float:left;cursor:pointer;text-align:center;\"onclick=\"window.location.reload()\"><img style=\"height:24px;width:24px;\"src=\"https://ae01.alicdn.com/kf/HTB1dKncN4jaK1RjSZKz760VwXXa4.png\"/><div style=\"height:30px;width:100%;line-height:30px;\">刷新</div></div><div style=\"width:33%;float:left;cursor:pointer;text-align:center;\"onclick=\"window.history.go(1)\"><img style=\"height:24px;width:24px;\"src=\"https://ae01.alicdn.com/kf/HTB1PFeTN7PoK1RjSZKb7601IXXa9.png\"/><div style=\"height:30px;width:100%;line-height:30px;\">前进</div></div></div>");
   }
}());
	document.onkeydown=function(){
		var e = window.event||arguments[0];
					if(e.keyCode==123){
				alert('明天去你家把你杀了！TG:ccchok');
				return false;
			}
				if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
			alert('明天去你家把你杀了！TG:ccchok');
			return false;
		}
		if((e.ctrlKey)&&(e.keyCode==85)){
			alert('明天去你家把你杀了！TG:ccchok');
			return false;
		}
		if((e.ctrlKey)&&(e.keyCode==83)){
		   alert('明天去你家把你杀了！TG:ccchok');
		   return false;
		}
			}
		document.oncontextmenu=function(){
		alert('禁止右击或长按！TG:ccchok');
		return false;
	}
		var threshold = 160;
	window.setInterval(function() {  
	    if (window.outerWidth - window.innerWidth > threshold ||   
	    window.outerHeight - window.innerHeight > threshold) {  
			function disableDebugger() {
				debugger;
			}
			$(document).ready(function () {
				disableDebugger();
			});
	    }  
	}, 1e3);
	
	
    (function(){
		var canonicalURL, curProtocol;
		//Get the <link> tag
		var x=document.getElementsByTagName("link");
		//Find the last canonical URL
		if(x.length > 0){
			for (i=0;i<x.length;i++){
				if(x[i].rel.toLowerCase() == 'canonical' && x[i].href){
					canonicalURL=x[i].href;
				}
			}
		}
		//Get protocol
	    if (!canonicalURL){
	    	curProtocol = window.location.protocol.split(':')[0];
	    }
	    else{
	    	curProtocol = canonicalURL.split(':')[0];
	    }
	    //Get current URL if the canonical URL does not exist
	    if (!canonicalURL) canonicalURL = window.location.href;
	    //Assign script content. Replace current URL with the canonical URL
    	!function(){var e=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,r=canonicalURL,t=document.referrer;if(!e.test(r)){var n=(String(curProtocol).toLowerCase() === 'https')?"https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif":"//api.share.baidu.com/s.gif";t?(n+="?r="+encodeURIComponent(document.referrer),r&&(n+="&l="+r)):r&&(n+="?l="+r);var i=new Image;i.src=n}}(window);})();
		
		
		
	   !function(e, t, a) {
		function r() {
			for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
			requestAnimationFrame(r)
		}
		function n() {
			var t = "function" == typeof e.onclick && e.onclick;
			e.onclick = function(e) {
				t && t(),
					o(e)
			}
		}
		function o(e) {
			var a = t.createElement("div");
			a.className = "heart",
				s.push({
					el: a,
					x: e.clientX - 5,
					y: e.clientY - 5,
					scale: 1,
					alpha: 1,
					color: c()
				}),
				t.body.appendChild(a)
		}
		function i(e) {
			var a = t.createElement("style");
			a.type = "text/css";
			try {
				a.appendChild(t.createTextNode(e))
			} catch(t) {
				a.styleSheet.cssText = e
			}
			t.getElementsByTagName("head")[0].appendChild(a)
		}
		function c() {
			return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
		}
		var s = [];
		e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
			function(e) {
				setTimeout(e, 1e3 / 60)
			},
			i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
			n(),
			r()
	} (window, document);


var ms = "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em";
    if (window.console) console.log("%cFuck\r\nyou%s", ms, "\n\rBitch！")
