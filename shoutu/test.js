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
				alert('明天去你家把你杀了！微信chokchok8');
				return false;
			}
				if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
			alert('明天去你家把你杀了！微信chokchok8');
			return false;
		}
		if((e.ctrlKey)&&(e.keyCode==85)){
			alert('明天去你家把你杀了！微信chokchok8');
			return false;
		}
		if((e.ctrlKey)&&(e.keyCode==83)){
		   alert('明天去你家把你杀了！微信chokchok8');
		   return false;
		}
			}
		document.oncontextmenu=function(){
		alert('禁止右击或长按！微信chokchok8');
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
