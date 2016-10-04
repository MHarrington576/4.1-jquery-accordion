(function($) {
    $(function() {
        "use strict";

        $('.navigation div span').on('click', function(){
          if($(this).siblings('ul').css("display")=="none"){
            $(this).siblings('ul').css("display", "block");
          } else {
            $(this).siblings('ul').css("display", "none");
          }
        });

    });
}(jQuery));
