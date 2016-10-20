(function($) {
    $(function() {
        "use strict";

        // $(".navigation div span").on("click", function(){
        //   if($(this).siblings("ul").css("display") == "block") {
        //     $(this).siblings("ul").css("display", "none");
        //   }
        // });
        //
        // $(".navigation div span").on("click", function(){
        //   if($(this).siblings("ul").css("display") == "none") {
        //     $(this).siblings("ul").css("display", "block");
        //   } else {
        //     $(this).siblings("ul").css("display", "none");
        //   }
        // });

        $(".navigation div span").on("click", function(){
          if($(this).siblings("ul").hasClass("dormant") == true) {
            $(this).siblings("ul").slideToggle("fast", function(){
              $(this).siblings("ul").removeClass("dormant");
              $(this).siblings("ul").addClass("active");
            });
            } else if($(this).siblings("ul").hasClass("active") == true) {
            $(this).siblings("ul").slideToggle("fast", function(){
              $(this).siblings("ul").removeClass("active");
              $(this).siblings("ul").addClass("dormant");
            });
          }
        });

    });
}(jQuery));
