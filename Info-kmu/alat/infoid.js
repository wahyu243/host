// Sebagian besar javascript di blog ini bersumber dari Blog DTE [http://www.dte.web.id] dan sebagian telah saya modifikasi. //<![CDATA[
(function(){$(document).ready(function(){return $(window).scroll(function(){return $(window).scrollTop()>600?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")}),$("#back-to-top").click(function(){return $("html,body").animate({scrollTop:"0"})})})}).call(this);
// Menu Top
$(document).ready(function(){var str=location.href.toLowerCase();$('.top-menunavi ul li a').each(function(){if(str.indexOf(this.href.toLowerCase())>-1){$("li.highlight").removeClass("highlight");$(this).parent().addClass("highlight")}})})
$(function(){var pull=$('#pull');menu=$('.top-menunavi ul');menuHeight=menu.height();$(pull).on('click',function(e){e.preventDefault();menu.slideToggle()});$(window).resize(function(){var w=$(window).width();if(w>320&&menu.is(':hidden')){menu.removeAttr('style')}})});
// Main Menu
var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){if($(this).next().length>0){$(this).addClass("parent")}});$(".menu-slide").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){if(ww<768){$(".menu-slide").css("display","inline-block");if(!$(".menu-slide").hasClass("active")){$(".nav").hide()}else{$(".nav").show()}$(".nav li").unbind("mouseenter mouseleave");$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("hover")})}else if(ww>=768){$(".menu-slide").css("display","none");$(".nav").show();$(".nav li").removeClass("hover");$(".nav li a").unbind("click");$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")})}};
function updatedPosts(q){if(document.getElementById("updated-posts")){var k=q.feed.entry,p,g,n,c,l="",b=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],h=document.getElementById("updated-posts");for(var f=0;f<7;f++){for(var d=0;d<7;d++){if(k[f].link[d].rel=="alternate"){n=k[f].link[d].href;break}}var p=k[f].title.$t,m=k[f].published.$t.substring(0,10).split("-");if("media$thumbnail" in k[f]){g=k[f].media$thumbnail.url}else{g="https://3.bp.blogspot.com/-hTp5KI2WC_w/WeL55AU7egI/AAAAAAAAMzg/cVjFowE2_6QgCeEUg7SY8uvOGDVGzUGbACPcBGAYYCw/s40/infokmoe.id.png"}l+='<li class="late"><div class="item-thumbnail"><img src="'+g.replace(/\/s72-c/,"/s40-c")+'" class="lates" alt="'+p+'" height="40px" width="40px"/></div>';l+='<div class="item-title"><h4><a href="'+n+'" title="'+p+'" target="_parent">'+p+'</a></h4></div><time class="lates-footer" datetime="'+m.join("-")+'">  '+(m[2]+" "+b[(parseInt(m[1],10)-1)]+" "+m[0])+"</time></li>"}h.innerHTML=l}}function asyncData(A,B){var C=document.createElement('script');C.src=A;C.onload=function (){if(typeof B=="function")B();B=null;};C.onreadystatechange=function (){if(C.readyState==4||C.readyState=="complete"){if(typeof B=="function")B();B=null;}};document.getElementsByTagName('head')[0].appendChild(C);}asyncData('http:/www.infokmoe.id/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts');setTimeout(function(){$(".jsfiddle-demo").each(function(){$(this).html('<iframe width="100%" height="300px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),setTimeout(function(){$(".facebookpopup").each(function(){$(this).html('<iframe width="100%" height="130px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),$('.open-dialog').click(function(){$('#kotak-dialog').show().find('#iframeContainer').html('<iframe src="' + this.href + '"></iframe>');$('#dialog-overlay').fadeTo(400, 0.8);return false;});$('#kotak-dialog .closed').click(function(){$('#kotak-dialog').fadeOut('normal', function(){$('iframe', this).remove();}); $('#dialog-overlay').hide();return false;});

(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/id_ID/sdk.js#xfbml=1&appId=390824627655103&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-46796025-1']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();
function createCookie(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);var i="; expires="+r.toGMTString()}else{var i=""}document.cookie=e+"="+t+i+"; path=/"}function readCookie(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}var $dialog=$("#fb-dialog"),$overlay=$("#dialog-overlay"),$frame=$("#iframeContainers");if(!readCookie("fb_box_once")){$(window).load(function(){$dialog.show(4000);$overlay.fadeTo(400,.8);return false})}$dialog.find(".closed").click(function(){createCookie("fb_box_once",null,1);$dialog.fadeOut("normal",function(){$frame.remove()});$overlay.hide();return false});//]]>
