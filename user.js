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
        $('body').on('DOMNodeInserted', function(e) { 
            var element = $(e.target).find('.ad3');
            if(element.length == 1) {
                element = element[0];
                var replacement = $(element).clone().attr("id", "abcdefgt");
                $(element).css("display", "none");
                replacement.on('keydown', function(e) {
                    //enter
                    if(e.which == 13)
                    {
                        e.preventDefault();
                        var triggerKeyboardEvent = function(el, keyCode) {
                            var eventObj = document.createEventObject ?
                                document.createEventObject() : document.createEvent("Events");
                          
                            if(eventObj.initEvent){
                              eventObj.initEvent("keydown", true, true);
                            }

                            eventObj.keyCode = keyCode;
                            eventObj.which = keyCode;
                            
                            el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj); 
                        } 

                        $(element).val(replacement.val()).focus();
                        triggerKeyboardEvent(element, 13);
                        replacement.val("");
                    }
                });
                $(element).parent().append(replacement);
            } 
        });
    }

    delayedExecute(checkJquery, application);
})();