(function () {
    /* inject jquery */
    function injectJquery() {
        var jQueryVersion = "2.0.2";
        var a = document.createElement("script");
        a.src = "//ajax.googleapis.com/ajax/libs/jquery/" + jQueryVersion + "/jquery.js";
        a.type = "text/javascript";
        a.setAttribute("id", "jquery");
        document.getElementsByTagName("head")[0].appendChild(a);
    }

    /* run execute when condition evaluates true */
    function delayedExecute(condition, execute) {
        if(condition())
            execute();
        else
            window.setTimeout(delayedExecute.bind(undefined, condition, execute), 200);
    }

    /* returns true if jquery is loaded */
    var checkJquery = function() {
        if (window.jQuery && window.$)
            return true;
        else
            return false;
    }

    /* body of application */
    var application = function() {
        alert("hi");
    }

    injectJquery();

    var a = document.createElement("script");
    a.type = "text/javascript";
    a.text = "while(true) {if(window.jQuery) alert(window.jQuery); break; }"
    document.getElementsByTagName("head")[0].insertBefore(a, document.getElementById("jquery").nextSibling);

    //delayedExecute(checkJquery, application);
})();