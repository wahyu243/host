function updatedPosts(e){if(document.getElementById("updated-posts")){for(var t,n=e.feed.entry,o="",i=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],a=document.getElementById("updated-posts"),s=0;7>s;s++){for(var l=0;7>l;l++)if("alternate"==n[s].link[l].rel){t=n[s].link[l].href;break}var r=n[s].title.$t,c=n[s].published.$t.substring(0,10).split("-");o+='<li class="late"><div class="item-thumbnail"><img src="'+("media$thumbnail"in n[s]?n[s].media$thumbnail.url:"https://3.bp.blogspot.com/-hTp5KI2WC_w/WeL55AU7egI/AAAAAAAAMzg/cVjFowE2_6QgCeEUg7SY8uvOGDVGzUGbACPcBGAYYCw/s40/infokmoe.id.png").replace(/\/s72-c/,"/s40-c")+'" class="lates" alt="'+r+'" height="40px" width="40px"/></div>',o+='<div class="item-title"><h4><a href="'+t+'" title="'+r+'" target="_parent">'+r+'</a></h4></div><time class="lates-footer" datetime="'+c.join("-")+'">  '+c[2]+" "+i[parseInt(c[1],10)-1]+" "+c[0]+"</time></li>"}a.innerHTML=o}}function asyncData(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){"function"==typeof t&&t(),t=null},n.onreadystatechange=function(){4!=n.readyState&&"complete"!=n.readyState||("function"==typeof t&&t(),t=null)},document.getElementsByTagName("head")[0].appendChild(n)}function createCookie(e,t,n){if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"}function readCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" })}loadCSS("https://cdn.rawgit.com/w4hyou/host/cb03466/Info-kmu/alat/combine.css"),function(e,t){var n="getSelection",o="removeAllRanges",i="addRange",a="parentNode",s="appendChild",l="test";if(e[n]){var r,c,d,u,f,m;t.addEventListener("copy",function(h){for(c=h.target;3===c.nodeType;)c=c[a];if(u=t.createElement("div"),(r=e[n]())&&r.rangeCount&&(r=r.getRangeAt(0))&&(d=r.cloneRange(),r=r.cloneContents())){for(;f=r.firstChild;)u[s](f);if(!/^(pre|code)$/i[l](c.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[l](c.className||"")){var g=e.location.href;u.innerHTML+="<br><br>&copy; "+t.title+'<br>Source: <a href="'+g+'">'+g+"</a><br>Author: yOu wAhyou twitter: @Infok.moe facebook: @infokmu_com"}m=t.createRange(),t.body[s](u),m.selectNodeContents(u),(r=e[n]())[o](),r[i](m),setTimeout(function(){u[a].removeChild(u),r[o](),r[i](d)})}},!1)}}(window,document),document.getElementById("translate-me").onclick=function(){return window.open("http://translate.google.com/translate?u="+encodeURIComponent(location.href)+"&langpair=id%7C"+document.getElementById("translate-language").value+"&hl=en"),!1},function(e){var t=e("#search-form"),n=t.find(":text");t.append('<div id="search-result"></div>');var o=e("#hasil");t.on("submit",function(){var t=n.val();return o.show().html("Loading..."),e.ajax({url:"//www.infokmoe.id/feeds/posts/summary?alt=json-in-script&q="+t+"&max-results=9999",type:"get",dataType:"jsonp",success:function(e){var n,i,a,s=e.feed.entry,l="";if(void 0!==s){l='<a href="javascript:;" rel="nofollow" class="close pull-right no-print"><i aria-hidden="true" class="fa fa-window-close"/></a>',l+="<h4>hasil pencarian untuk kata kunci &#8220;"+t+"&#8221;</h4><ol>";for(var r=0;r<s.length;r++){r==s.length;for(var c=new RegExp(t,"ig"),d=s[r],u=d.title.$t.replace(c,"<b class='highlight'>"+t+"</b>"),f=0;f<d.link.length;f++)"alternate"==d.link[f].rel&&(n=d.link[f].href);a="media$thumbnail"in d?"media$thumbnail"in d?'<img alt="'+u+'" src="'+d.media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/s40-c")+'" width="40" height="40">':"":'<img alt="'+u+'" src="https://3.bp.blogspot.com/-hTp5KI2WC_w/WeL55AU7egI/AAAAAAAAMzg/cVjFowE2_6QgCeEUg7SY8uvOGDVGzUGbACPcBGAYYCw/s40/infokmoe.id.png" width="40" height="40">',i="summary"in d?d.summary.$t.replace(/<br ?\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"",i=i.length>100?i.substring(0,100)+"&hellip;":i,i=i.replace(c,"<b class='highlight'>"+t+"</b>"),l+="<li>"+a+'<a href="'+n+'" title="'+u+'">'+u+"</a><br><span class='cm-text lates-footer'>"+i+"</span></li>"}l+="</ol>",o.html(l)}else o.html('<a href="javascript:;" rel="nofollow" class="close pull-right no-print"><i aria-hidden="true" class="fa fa-window-close"/></a><strong>No result!</strong>')},error:function(){o.html('<a class="close pull-right no-print" rel="nofollow" href="javascript:;"><i aria-hidden="true" class="fa fa-window-close"/></a><strong>Error loading feed.</strong>')}}),!1}),t.on("click",".close",function(){return o.fadeOut(),!1})}(jQuery),$("#hasil").click(function(){$("#hasil, .close").toggle()}),$(".close").click(function(){$("#hasil, .close").hide()}),$(".img-attachment").attr("src",function(){return $(this).data("src").replace(/\/s[0-9]+(\-c)?/i,"/s400")}),!function(e){var t=e(window),n=e("nav"),o=n.offset().top;t.on("scroll",function(){o<e(this).scrollTop()?n.addClass("fixed"):n.removeClass("fixed")})}(jQuery),function(){$(document).ready(function(){return $(window).scroll(function(){return $(window).scrollTop()>600?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")}),$(function(){$("#back-to-top").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})})})}.call(this);var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){$(this).next().length>0&&$(this).addClass("parent")}),$(".toggleMenu").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".nav").toggle()}),adjustMenu()}),$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth,adjustMenu()});var adjustMenu=function(){768>ww?($(".toggleMenu").css("display","inline-block"),$(".toggleMenu").hasClass("active")?$(".nav").show():$(".nav").hide(),$(".nav li").unbind("mouseenter mouseleave"),$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault(),$(this).parent("li").toggleClass("hover")})):ww>=768&&($(".toggleMenu").css("display","none"),$(".nav").show(),$(".nav li").removeClass("hover"),$(".nav li a").unbind("click"),$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")}))};asyncData("/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts"),setTimeout(function(){$(".youtube").each(function(){$(this).html('<iframe width="100%" height="200px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),setTimeout(function(){$(".facebookpopup,.jsfiddle-demo").each(function(){$(this).html('<iframe width="100%" height="300px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),$(".open-dialog").click(function(){return $("#kotak-dialog").show().find("#iframeContainer").html('<iframe src="'+this.href+'"></iframe>'),$("#dialog-overlay").fadeTo(400,.8),!1}),$("#kotak-dialog .closed").click(function(){return $("#kotak-dialog").fadeOut("normal",function(){$("iframe",this).remove()}),$("#dialog-overlay").hide(),!1}),function(e,t,n){var o,i=e.getElementsByTagName(t)[0];e.getElementById(n)||((o=e.createElement(t)).id=n,o.async=!0,o.src="https://connect.facebook.net/id_ID/sdk.js#xfbml=1&appId=390824627655103&version=v2.0",i.parentNode.insertBefore(o,i))}(document,"script","facebook-jssdk");var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-46796025-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var $dialog=$("#fb-dialog"),$overlay=$("#dialog-overlay"),$frame=$("#iframeContainers");readCookie("fb_box_once")||$(window).load(function(){return $dialog.show(4e3),$overlay.fadeTo(400,.8),!1}),$dialog.find(".closed").click(function(){return createCookie("fb_box_once",null,1),$dialog.fadeOut("normal",function(){$frame.remove()}),$overlay.hide(),!1}),window.cookieconsent_options={message:"This website uses cookies to ensure you get the best experience on our website",dismiss:"Got it!",learnMore:"More info",link:"http://www.infokmoe.id/p/privacy.html"},function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="https://cdn.rawgit.com/w4hyou/host/d60c9c01/Info-kmu/alat/cookie.js",(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)}(),!function(){var e=document.getElementsByTagName("a"),t=document.createElement("span");t.id="tooltips",document.body.appendChild(t);for(var n=document.getElementById("tooltips"),o=0;o<e.length;o++)e[o].title&&(e[o].onmouseover=function(e){n.style.display="block",n.innerHTML=this.title,n.style.top=e.pageY+25+"px",n.style.left=e.pageX+"px",this.setAttribute("original",this.title),this.title=""},e[o].onmouseout=function(){n.innerHTML="",n.style.display="none",this.title=this.getAttribute("original"),this.removeAttribute("original")})}();/*]]>*/
