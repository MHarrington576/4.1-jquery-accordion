(function($) {
    $(function() {
        "use strict";

        $(".navigation div span").on("click", function(){
          $('.dormant').slideUp("fast");
          $(this).siblings("ul").slideDown("fast");
        });

    });
}(jQuery));
