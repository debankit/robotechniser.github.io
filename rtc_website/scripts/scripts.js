// For smooth scrolling to page sections
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
    $menuWrap = $('.menu-sidebar');

    if (document.documentElement.clientWidth > 1024) {
        window.onscroll = function() {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                if ($toggleButton.hasClass('button-open') && $menuWrap.hasClass('menu-show')) {
                    $toggleButton.removeClass('button-open');
                    $menuWrap.removeClass('menu-show');
                    if ($('.global-overlay').hasClass('dimmed')) {
                        $('.global-overlay').removeClass('dimmed');
                    }
                }
                document.getElementById("backToTop").style.display = "block"; // For backToTop
                document.getElementById("toggle").style.display = "block"; // For Hamburger Menu
                document.getElementById("menu").style.display = "block"; // For Hamburger Menu
            } else {
                document.getElementById("backToTop").style.display = "none"; // For backToTop
                document.getElementById("toggle").style.display = "none"; // For Hamburger Menu
                document.getElementById("menu").style.display = "none"; // For Hamburger Menu
            }
        }
    }

    // For Hamburger Menu
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
        $('.global-overlay').toggleClass('dimmed');
    });
});

// Parallax Fix for Android and iOS devices - DOESN'T WORK
$("#home, #about, #proj, #team, #connect").parallax({
  iosFix: true,
  androidFix: true,
  overScrollFix: true
});