function updatedPosts(q){if(document.getElementById("updated-posts")){var k=q.feed.entry,p,g,n,c,l="",b=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],h=document.getElementById("updated-posts");for(var f=0;f<5;f++){for(var d=0;d<5;d++){if(k[f].link[d].rel=="alternate"){n=k[f].link[d].href;break}}var p=k[f].title.$t,m=k[f].published.$t.substring(0,10).split("-");if("media$thumbnail" in k[f]){g=k[f].media$thumbnail.url}else{g="https://cdn.rawgit.com/w4hyou/host/master/Ghaidabodyraftinglog.png"}l+='<li class="late"><img src="'+g.replace(/\/s72-c/,"/s40-c")+'" class="lates" alt="'+p+'" height="40px" width="40px"/>';l+='<h4><a href="'+n+'" title="'+p+'" target="_parent">'+p+'</a></h4><time class="lates-footer" datetime="'+m.join("-")+'">  '+(m[2]+" "+b[(parseInt(m[1],10)-1)]+" "+m[0])+"</time></li>"}h.innerHTML=l}}function asyncData(A,B){var C=document.createElement('script');C.src=A;C.onload=function (){if(typeof B=="function")B();B=null;};C.onreadystatechange=function (){if(C.readyState==4||C.readyState=="complete"){if(typeof B=="function")B();B=null;}};document.getElementsByTagName('head')[0].appendChild(C);}asyncData('http://www.ghaidabodyraftinggreencanyon.com/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=5&callback=updatedPosts');var _gaq=_gaq || [];_gaq.push(['_setAccount','UA-67203853-1']);_gaq.push(['_trackPageview']);(function() {var ga=document.createElement('script'); ga.type='text/javascript'; ga.async=true;ga.src=('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga,s);})();(function(){var f=document.getElementById('cse-search-box');if (!f){f=document.getElementById('searchbox_demo');} if (f && f['q']){var q=f['q'];var n=navigator;var l=location;var du=function(n,v){var u=document.createElement('input');u.name=n;u.value=v;u.type='hidden';f.appendChild(u);return u;};var su=function (n,t,v,l){if (!encodeURIComponent || !decodeURIComponent){return;} var regexp=new RegExp('(?:[?&]' + n + '=)([^&#]*)');var existing=regexp.exec(t);if (existing){v=decodeURIComponent(existing[1]);} var delimIndex=v.indexOf('://');if (delimIndex >=0){v=v.substring(delimIndex + '://'.length,v.length);} var v_sub=v.substring(0,l);while (encodeURIComponent(v_sub).length > l){v_sub=v_sub.substring(0,v_sub.length - 1);} du(n,v_sub);};var pl=function(he){var ti=0,tsi=0,tk=0,pt;return function(){var ct=(new Date).getTime();if (pt){var i=ct - pt;ti +=i;tsi +=i*i;} tk++;pt=ct;he.value=[ti,tsi,tk].join('j');};};var append=false;if (n.appName=='Microsoft Internet Explorer'){var s=f.parentNode.childNodes;for (var i=0;i < s.length;i++){if (s[i].nodeName=='SCRIPT' && s[i].attributes['src'] && s[i].attributes['src'].nodeValue==unescape('\x2F\x2Fcse.google.co.id\x2Fcoop\x2Fcse\x2Fbrand?form=cse-search-box\x26lang=in')){append=true;break;}}}else{append=true;} if (append){var loc=document.location.toString();var ref=document.referrer;su('siteurl',loc,loc,250);su('ref',loc,ref,750);if (q.addEventListener){q.addEventListener('keyup',pl(du('ss','')),false);} else if (q.attachEvent){q.attachEvent('onkeyup',pl(du('ss','')));} } if (n.platform=='Win32'){q.style.cssText='border:1px solid #7e9db9;padding:2px;';} if (window.history.navigationMode){window.history.navigationMode='compatible';}var b=function(){if (q.value==''){q.style.background='#FFFFFF';} };var f=function(){q.style.background='#ffffff';};q.onfocus=f;q.onblur=b;if (!/[&?]q=[^&]/.test(l.search)){b();}}})();