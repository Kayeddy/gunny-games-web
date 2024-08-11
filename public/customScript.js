(function ($) {
  $(document).ready(function () {
    // Character Image Js
    var scene = document.querySelectorAll(".scene");
    scene.forEach(function (el) {
      new Parallax(el);
    });

    // Slider Js
    $(".banner-section-inner").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      speed: 500,
      asNavFor: ".controller-right-icons-inner",
      touchThreshold: 100,
    });

    $(".controller-right-icons-inner").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".banner-section-inner",
      arrows: false,
      dots: false,
      focusOnSelect: true,
      variableWidth: true,
    });

    function onLoadTest() {
      $(".banner-section-loop").each(function (i) {
        var j = i + 1;
        if (j % 3 === 1) {
          $(this).addClass("banner-loop-one");
        } else if (j % 3 === 2) {
          $(this).addClass("banner-loop-second");
        } else {
          $(this).addClass("banner-loop-third");
        }
      });
    }

    window.onload = onLoadTest();

    function customClassAdd() {
      if ($(".banner-loop-one").hasClass("slick-current")) {
        $(".header-section-main").removeClass("header-section-orange");
        $(".header-section-main").removeClass("header-section-green");
        $(".header-section-main").addClass("header-section-blue");
      } else if ($(".banner-loop-second").hasClass("slick-current")) {
        $(".header-section-main").removeClass("header-section-blue");
        $(".header-section-main").removeClass("header-section-green");
        $(".header-section-main").addClass("header-section-orange");
      } else if ($(".banner-loop-third").hasClass("slick-current")) {
        $(".header-section-main").removeClass("header-section-blue");
        $(".header-section-main").removeClass("header-section-orange");
        $(".header-section-main").addClass("header-section-green");
      } else {
        $(".header-section-main").removeClass("header-section-blue");
        $(".header-section-main").removeClass("header-section-orange");
        $(".header-section-main").removeClass("header-section-green");
      }
    }

    $(".banner-section-inner").on(
      "afterChange",
      function (event, slick, currentSlide, nextSlide) {
        customClassAdd();
        $(".banner-main-img .main-img").addClass("character-animation");
      }
    );

    // Custom Mouse Pointer
    let cursor = document.querySelector(".cursor");
    let cursorScale = document.querySelectorAll(".cursor-scale");
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    cursorScale.forEach((link) => {
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
    });
  });
})(jQuery);
