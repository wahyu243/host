function createCookie(e,t,n){if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var a="; expires="+o.toGMTString()}else var a="";document.cookie=e+"="+t+a+"; path=/"}function readCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}function updatedPosts(e){if(document.getElementById("updated-posts")){for(var t,n=e.feed.entry,o="",a=document.getElementById("updated-posts"),i=0;7>i;i++){for(var l=0;7>l;l++)if("alternate"==n[i].link[l].rel){t=n[i].link[l].href;break}var s=n[i].title.$t,r=n[i].published.$t.substring(0,10).replace(/-/g,"/");o+='<li class="item-title"><img src="'+("media$thumbnail"in n[i]?n[i].media$thumbnail.url:"https://2.bp.blogspot.com/-LQV025ltHWI/UnZSnJQN_GI/AAAAAAAAGes/gbXNGWA21LY/s40/logon.png").replace(/\/s72-c/,"/s40-c")+'" class="imgupdate" alt="thumb" height="40px" width="40px"/>',o+='<div class="item-title"><a href="'+t+'" target="_blank">'+s+'</a></div><div class="lates-footer"> Dipublikasikan pada '+r+"</div></li>"}a.innerHTML=o}}function getScript(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,document.body.appendChild(t)}$(window).scroll(function(){200<$(this).scrollTop()?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()}),$("#back-to-top").hide().click(function(){return $("html, body").animate({scrollTop:0},1e3),!1});var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){0<$(this).next().length&&$(this).addClass("parent")}),$(".toggleMenu").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".nav").toggle()}),adjustMenu()}),$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth,adjustMenu()});var adjustMenu=function(){768>ww?($(".toggleMenu").css("display","inline-block"),$(".toggleMenu").hasClass("active")?$(".nav").show():$(".nav").hide(),$(".nav li").unbind("mouseenter mouseleave"),$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault(),$(this).parent("li").toggleClass("hover")})):ww>=768&&($(".toggleMenu").css("display","none"),$(".nav").show(),$(".nav li").removeClass("hover"),$(".nav li a").unbind("click"),$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")}))};$(document).ready(function(){var e=$("#nav").offset().top,t=function(){$(window).scrollTop()>e?$("#nav").addClass("sticky"):$("#nav").removeClass("sticky")};t(),$(window).scroll(function(){t()})});var $dialog=$("#fb-dialog"),$overlay=$("#dialog-overlay"),$frame=$("#iframeContainers");readCookie("fb_box_once")||$(window).load(function(){return $dialog.show(4e3),$overlay.fadeTo(400,.8),!1}),$dialog.find(".closed").click(function(){return createCookie("fb_box_once",null,1),$dialog.fadeOut("normal",function(){$frame.remove()}),$overlay.hide(),!1}),setTimeout(function(){$(".jsfiddle-demo").each(function(){$(this).html('<iframe width="100%" height="300px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),setTimeout(function(){$(".facebookpopup").each(function(){$(this).html('<iframe width="100%" height="130px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),$(".open-dialog").click(function(){return $("#kotak-dialog").show().find("#iframeContainer").html('<iframe src="'+this.href+'"></iframe>'),$("#dialog-overlay").fadeTo(400,.8),!1});$("#kotak-dialog .closed").click(function(){return $("#kotak-dialog").fadeOut("normal",function(){$("iframe",this).remove()}),$("#dialog-overlay").hide(),!1}),!function(e,t,n,o,a,i,l){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,i=t.createElement(n),l=t.getElementsByTagName(n)[0],i.async=1,i.src=o,l.parentNode.insertBefore(i,l)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-46796025-1","auto"),ga("send","pageview"),getScript("http://www.infokmoe.id/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts");
