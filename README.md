# CleanShot
Removes user-information on Facebook and Twitter

* [Bookmarklet](https://mrpnkt.com/CleanShot.html)
* [Create Bookmarklet](http://mrcoles.com/bookmarklet/)

**Source:**

```javascript

javascript: (function() {
    var newcss = ('#blueBarDOMInspector, .UFIAddComment, .UFILikeLink, .UFIReplyLink, #pagelet_composer div._mp3, #page_recommendations_vertex_composer, #pagelet_composer div._mp, ._5lc6, button.selected, #u_0_1p > div._sa_._5vsi._ca7._192z > div > div, .comment_link, .share_action_link, .topbar, .follow-bar, .Icon--reply, .inline-reply-tweetbox, .dashboard-right { display: none !important; } ul.uiList._4kg { height: 45px; } .PermalinkOverlay-with-background { background: #f5f8fa; } ');
    if ("\v" == "v") {
        document.createStyleSheet().cssText = newcss
    } else {
        var tag = document.createElement("style");
        tag.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(tag);
        tag[(typeof document.body.style.WebkitAppearance == "string") ? "innerText" : "innerHTML"] = newcss
    }
})();


```

**Encoded:**

```javascript
javascript:(function()%7Bjavascript%3A%20(function()%20%7Bvar%20newcss%20%3D%20('%23blueBarDOMInspector%2C%20.UFIAddComment%2C%20.UFILikeLink%2C%20.UFIReplyLink%2C%20%23pagelet_composer%20div._mp3%2C%20%23page_recommendations_vertex_composer%2C%20%23pagelet_composer%20div._mp%2C%20._5lc6%2C%20button.selected%2C%20%23u_0_1p%20%3E%20div._sa_._5vsi._ca7._192z%20%3E%20div%20%3E%20div%2C%20.comment_link%2C%20.share_action_link%2C%20.topbar%2C%20.follow-bar%2C%20.Icon--reply%2C%20.inline-reply-tweetbox%2C%20.dashboard-right%20%7B%20display%3A%20none%20!important%3B%20%7D%20ul.uiList._4kg%20%7B%20height%3A%2045px%3B%20%7D%20.PermalinkOverlay-with-background%20%7B%20background%3A%20%23f5f8fa%3B%20%7D%20')%3Bif%20(%22%5Cv%22%20%3D%3D%20%22v%22)%20%7Bdocument.createStyleSheet().cssText%20%3D%20newcss%7D%20else%20%7Bvar%20tag%20%3D%20document.createElement(%22style%22)%3Btag.type%20%3D%20%22text%2Fcss%22%3Bdocument.getElementsByTagName(%22head%22)%5B0%5D.appendChild(tag)%3Btag%5B(typeof%20document.body.style.WebkitAppearance%20%3D%3D%20%22string%22)%20%3F%20%22innerText%22%20%3A%20%22innerHTML%22%5D%20%3D%20newcss%7D%7D)()%7D)()
```
