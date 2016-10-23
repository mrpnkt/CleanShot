javascript: (function() {
    var newcss = ('#blueBarDOMInspector, .UFIAddComment, .UFILikeLink, .UFIReplyLink, #pagelet_composer div._mp3, #page_recommendations_vertex_composer, #pagelet_composer div._mp, ._5lc6, button.selected, #u_0_1p > div._sa_._5vsi._ca7._192z > div > div, .comment_link, .share_action_link { display: none !important; } ul.uiList._4kg { height: 45px; } ');
    if ("\v" == "v") {
        document.createStyleSheet().cssText = newcss
    } else {
        var tag = document.createElement("style");
        tag.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(tag);
        tag[(typeof document.body.style.WebkitAppearance == "string") ? "innerText" : "innerHTML"] = newcss
    }
})();
