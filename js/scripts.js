/*!
    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Collapse the cards
    $('.multi-collapse').on('show.bs.collapse', function () {
    $(this).closest('.bookmarks')
      .find('.collapse.show')
      .not(this)
      .collapse('toggle');
    });

    // Get each ul
    $("#bookmarks li").each(function() {
        // Get the content
        var str = $(this).html();
        // Select url only
        var regex = /(^https?:\/\/(www\.)?([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\\?\S+)?)?)?)/igm
        // Replace plain text links by hyperlinks
        var replaced_text = str.replace(regex, "<a href='$1' target='_blank'>$3</a>");
        // Echo link
        $(this).html(replaced_text);
    });

    var cell = $("td");
    cell
    .on("mouseenter", function() {
        var el = $(this),
        pos = el.index();

        el.parent().find("td:nth-child(1)").css("text-decoration", "line-through");
        })
    .on("mouseleave", function() {
        cell.css("text-decoration", "none");
    });
})(jQuery); // End of use strict
