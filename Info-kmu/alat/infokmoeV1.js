/*<![CDATA[*/!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.tabs=d.$element.children(),d.options=a.extend({},a.fn.mtabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.tabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.tabs.wrapAll('<div class="'+c.tabs_container_class+'" />'),b.tabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.tabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.tabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$tabs_menu=a(g).prependTo(c.$wrapper),b=c.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$tabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.tabs.hide().filter(":eq("+b+")").show(),c.$tabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onTabSelect)&&b!==c.current_tab&&d.onTabSelect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$tabs_menu.remove(),a.tabs.unwrap().unwrap(),a.tabs.removeAttr("style"),a.tabs.children(b+":first").removeAttr("style"),a.$element.removeData("mtabs")}},a.fn.mtabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("mtabs");e="object"==typeof c&&c,g||f.data("mtabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"tabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"tabs-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);$(window).scroll(function(){200<$(this).scrollTop()?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()});$("#back-to-top").hide().click(function(){return $("html, body").animate({scrollTop:0},1E3),!1});var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){0<$(this).next().length&&$(this).addClass("parent")});$(".toggleMenu").click(function(a){a.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){768>ww?($(".toggleMenu").css("display","inline-block"),$(".toggleMenu").hasClass("active")?$(".nav").show():$(".nav").hide(),$(".nav li").unbind("mouseenter mouseleave"),$(".nav li a.parent").unbind("click").bind("click",function(a){a.preventDefault();$(this).parent("li").toggleClass("hover")})):768<=ww&&($(".toggleMenu").css("display","none"),$(".nav").show(),$(".nav li").removeClass("hover"),$(".nav li a").unbind("click"),$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")}))};$(document).ready(function(){var a=$("#nav").offset().top,b=function(){$(window).scrollTop()>a?$("#nav").addClass("sticky"):$("#nav").removeClass("sticky")};b();$(window).scroll(function(){b()})});function createCookie(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);var i="; expires="+r.toGMTString()}else{var i=""}document.cookie=e+"="+t+i+"; path=/"}function readCookie(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}var $dialog=$("#fb-dialog"),$overlay=$("#dialog-overlay"),$frame=$("#iframeContainers");if(!readCookie("fb_box_once")){$(window).load(function(){$dialog.show(4000);$overlay.fadeTo(400,.8);return false})}$dialog.find(".closed").click(function(){createCookie("fb_box_once",null,1);$dialog.fadeOut("normal",function(){$frame.remove()});$overlay.hide();return false});setTimeout(function(){$('.jsfiddle-demo').each(function(){$(this).html('<iframe width="100%" height="300px" src="' + $(this).data('src') + '" allowfullscreen></iframe>');});},5000);setTimeout(function(){$('.facebookpopup').each(function(){$(this).html('<iframe width="100%" height="130px" src="' + $(this).data('src') + '" allowfullscreen></iframe>');});},5000);$('.open-dialog').click(function(){$('#kotak-dialog').show().find('#iframeContainer').html('<iframe src="' + this.href + '"></iframe>');$('#dialog-overlay').fadeTo(400, 0.8);return false;});$('#kotak-dialog .closed').click(function(){$('#kotak-dialog').fadeOut('normal', function(){$('iframe', this).remove();}); $('#dialog-overlay').hide();return false;});function recentPosts(e){if(document.getElementById("recent-posts")){for(var t,s=e.feed.entry,r="",i=document.getElementById("recent-posts"),n=0;n<numPosts;n++){for(var a=0;a<numPosts;a++)if("alternate"==s[n].link[a].rel){t=s[n].link[a].href;break}var o=s[n].title.$t,m=s[n].published.$t.substring(0,10).split("-"),l=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];r+='<li class="recent-posts"><div class="item-thumbnail"><img src="'+("media$thumbnail"in s[n]?s[n].media$thumbnail.url:"https://2.bp.blogspot.com/-nhSeNaMv4uQ/WTwAv7tXgfI/AAAAAAAAMjw/6aOBh69H8voaoQVpv8D4QC_FvexBvv7iwCLcB/s80/logon%2B320px.png").replace(/\/s72-c/,"/s40-c")+'" class="late" alt="thumb" height="40px" width="40px"/></div><div class="item-title"><h4><a href="'+t+'" title="'+o+'" target="_blank">'+o+"</a></h4></div>",r+="<div class='lates-footer'><time datetime="+m.join("-")+">"+m[2]+" "+l[parseInt(m[1],10)-1]+" "+m[0]+"</time></div></li>"}i.innerHTML=r}}var homePage="http://www.infokmoe.id/",numPosts=5,you_script=document.createElement("script");you_script.src=homePage+"/feeds/posts/summary?alt=json-in-script&orderby=published&max-results="+numPosts+"&callback=recentPosts",document.getElementsByTagName("head")[0].appendChild(you_script);!function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-46796025-1","auto"),ga("send","pageview");window.onload=function(){var a=document.getElementsByClassName('adsbygoogle');for(var i=0,j=a.length;i<j;++i){(adsbygoogle=this.adsbygoogle||[]).push({})}};function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all"})}loadCSS("https://cdn.rawgit.com/w4hyou/host/3491cd38/Info-kmu/alat/infokmoeV2.css");loadCSS("https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css");function updatedPosts(t){if(document.getElementById("updated-posts")){for(var e,a=t.feed.entry,s="",n=document.getElementById("updated-posts"),p=0;p<7;p++){for(var r=0;r<7;r++)if("alternate"==a[p].link[r].rel){e=a[p].link[r].href;break}var d=a[p].title.$t,i=a[p].published.$t.substring(0,10).replace(/-/g,"/");s+='<li class="update"><img src="'+("media$thumbnail"in a[p]?a[p].media$thumbnail.url:"https://2.bp.blogspot.com/-LQV025ltHWI/UnZSnJQN_GI/AAAAAAAAGes/gbXNGWA21LY/s40/logon.png").replace(/\/s72-c/,"/s40-c")+'" class="imgupdate" alt="thumb" height="40px" width="40px"/>',s+='<strong><a href="'+e+'" target="_blank">'+d+'</a></strong><span class="tgl-com"> diposkan pada '+i+"</span></li>"}n.innerHTML=s}}function getScript(t){var e=document.createElement("script");e.type="text/javascript",e.src=t,document.body.appendChild(e)}getScript("http://www.infokmoe.id/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts");/*]]>*/
