# CleanShot
Bookmarklet which removes user-information on Facebook and Twitter

* [Bookmarklet](https://mrpnkt.com/CleanShot.html)
* [Create Bookmarklet](http://mrcoles.com/bookmarklet/)

**Source:**

```javascript

javascript:(function(){ var newcss=('.UFIAddComment, .UFILikeLink, .UFIReplyLink, ._192z, ._5lc6, ._k, #u_0_2, ._42nr, button._42ft, a._p, input._58al, #u_0_3a, img._2l02, ._jlz ._2s61, #page_recommendations_vertex_composer, div.user-actions, .inline-reply-tweetbox, ul.right-actions, #search-query, #global-actions { display: none !important; }');if("\v"=="v"){document.createStyleSheet().cssText=newcss}else{var tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);tag[(typeof document.body.style.WebkitAppearance=="string")?"innerText":"innerHTML"]=newcss}})();

```

**Encoded:**

```javascript
javascript:(function()%7Bjavascript%3A(function()%7B%20var%20newcss%3D('.UFIAddComment%2C%20.UFILikeLink%2C%20.UFIReplyLink%2C%20._192z%2C%20._5lc6%2C%20._k%2C%20%23u_0_2%2C%20._42nr%2C%20button._42ft%2C%20a._p%2C%20input._58al%2C%20%23u_0_3a%2C%20img._2l02%2C%20._jlz%20._2s61%2C%20%23page_recommendations_vertex_composer%2C%20div.user-actions%2C%20.inline-reply-tweetbox%2C%20ul.right-actions%2C%20%23search-query%2C%20%23global-actions%20%7B%20display%3A%20none%20!important%3B%20%7D')%3Bif(%22%5Cv%22%3D%3D%22v%22)%7Bdocument.createStyleSheet().cssText%3Dnewcss%7Delse%7Bvar%20tag%3Ddocument.createElement(%22style%22)%3Btag.type%3D%22text%2Fcss%22%3Bdocument.getElementsByTagName(%22head%22)%5B0%5D.appendChild(tag)%3Btag%5B(typeof%20document.body.style.WebkitAppearance%3D%3D%22string%22)%3F%22innerText%22%3A%22innerHTML%22%5D%3Dnewcss%7D%7D)()%7D)()
```
