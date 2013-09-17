(function () {

    /* run execute when condition evaluates true */
    function delayedExecute(condition, execute) {
        if(condition())
            execute();
        else
            window.setTimeout(delayedExecute.bind(undefined, condition, execute), 200);
    }

    /* returns true if jquery is loaded */
    var checkJquery = function() {
        if (window.jQuery)
            return true;
        else
            return false;
    }

    /* body of application */
    var application = function() {
        $(document).on("click", ".ad3", function() {
            alert("hi");
        });
    }

    /*var a = document.createElement("script");
    a.type = "text/javascript";
    a.text = "while(true) {if(window.jQuery) alert(window.jQuery); break; }"
    document.getElementsByTagName("head")[0].insertBefore(a, document.getElementById("jquery").nextSibling);*/

    delayedExecute(checkJquery, application);
})();