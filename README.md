# CleanShot
Bookmarklet which removes user-information on Facebook and Twitter

[CleanShot](https://mrpnkt.com/cleanshot.html)

```javascript

javascript:(function(){ var newcss=('.UFIAddComment, .UFILikeLink, .UFIReplyLink, ._192z, ._5lc6, ._k, #u_0_2, ._42nr, button._42ft, a._p, input._58al, #u_0_3a, img._2l02, ._jlz ._2s61, #page_recommendations_vertex_composer, div.user-actions, .inline-reply-tweetbox, ul.right-actions, #search-query, #global-actions { display: none !important; }');if("\v"=="v"){document.createStyleSheet().cssText=newcss}else{var tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);tag[(typeof document.body.style.WebkitAppearance=="string")?"innerText":"innerHTML"]=newcss}})();

```
