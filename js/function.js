(function ($) {
  "use strict";

  var $window = $(window);
  var $body = $("body");

  /* Preloader Effect */
  $window.on("load", function () {
    $(".preloader").fadeOut(600);
  });

  /* Sticky Header */
  if ($(".active-sticky-header").length) {
    $window.on("resize", function () {
      setHeaderHeight();
    });

    function setHeaderHeight() {
      $("header.main-header").css(
        "height",
        $("header .header-sticky").outerHeight()
      );
    }

    $(window).on("scroll", function () {
      var fromTop = $(window).scrollTop();
      setHeaderHeight();
      var headerHeight = $("header .header-sticky").outerHeight();
      $("header .header-sticky").toggleClass(
        "hide",
        fromTop > headerHeight + 100
      );
      $("header .header-sticky").toggleClass("active", fromTop > 600);
    });
  }

  /* Slick Menu JS */
  $("#menu").slicknav({
    label: "",
    prependTo: ".responsive-menu",
  });

  if ($("a[href='#top']").length) {
    $("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  }

  /* Hero Slider Layout JS */
  const hero_slider_layout = new Swiper(".hero-slider-layout .swiper", {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /* testimonial Slider JS */
  if ($(".testimonial-slider").length) {
    const testimonial_slider = new Swiper(".testimonial-slider .swiper", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });
  }

  /* Services Single Image Carousel JS */
  if ($(".service-images-slider").length) {
    const property_photos_carousel = new Swiper(
      ".service-images-slider .swiper",
      {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".swiper-arrow-next",
          prevEl: ".swiper-arrow-prev",
        },
      }
    );
  }

  /* Init Counter */
  if ($(".counter").length) {
    $(".counter").counterUp({ delay: 6, time: 3000 });
  }

  /* Image Reveal Animation */
  if ($(".reveal").length) {
    gsap.registerPlugin(ScrollTrigger);
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });
      tl.set(container, {
        autoAlpha: 1,
      });
      tl.from(container, 1, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1, {
        xPercent: 100,
        scale: 1,
        delay: -1,
        ease: Power2.out,
      });
    });
  }

  /* Text Effect Animation */
  if ($(".text-anime-style-1").length) {
    let staggerAmount = 0.05,
      translateXValue = 0,
      delayValue = 0.5,
      animatedTextElements = document.querySelectorAll(".text-anime-style-1");

    animatedTextElements.forEach((element) => {
      let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.words, {
        duration: 1,
        delay: delayValue,
        x: 20,
        autoAlpha: 0,
        stagger: staggerAmount,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
  }

  if ($(".text-anime-style-2").length) {
    let staggerAmount = 0.05,
      translateXValue = 20,
      delayValue = 0.5,
      easeType = "power2.out",
      animatedTextElements = document.querySelectorAll(".text-anime-style-2");

    animatedTextElements.forEach((element) => {
      let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
  }

  if ($(".text-anime-style-3").length) {
    let animatedTextElements = document.querySelectorAll(".text-anime-style-3");

    animatedTextElements.forEach((element) => {
      //Reset if needed
      if (element.animation) {
        element.animation.progress(1).kill();
        element.split.revert();
      }

      element.split = new SplitText(element, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      gsap.set(element, { perspective: 400 });

      gsap.set(element.split.chars, {
        opacity: 0,
        x: "50",
      });

      element.animation = gsap.to(element.split.chars, {
        scrollTrigger: { trigger: element, start: "top 90%" },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: Back.easeOut,
        stagger: 0.02,
      });
    });
  }

  /* Parallaxie js */
  var $parallaxie = $(".parallaxie");
  if ($parallaxie.length && $window.width() > 991) {
    if ($window.width() > 768) {
      $parallaxie.parallaxie({
        speed: 0.55,
        offset: 0,
      });
    }
  }

  /* Zoom Gallery screenshot */
  $(".project-gallery-items").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom",
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });

  /* Contact form validation */
  var $contactform = $("#contactForm");
  $contactform.validator({ focus: false }).on("submit", function (event) {
    if (!event.isDefaultPrevented()) {
      event.preventDefault();
      submitForm();
    }
  });

  function submitForm() {
    /* Initiate Variables With Form Content*/
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var subject = $("#subject").val();
    var message = $("#msg").val();

    $.ajax({
      type: "POST",
      url: "form-process.php",
      data:
        "fullname=" +
        fullname +
        "&name=" +
        "&email=" +
        email +
        "&phone=" +
        phone +
        "&subject=" +
        subject +
        "&message=" +
        message,
      success: function (text) {
        if (text == "success") {
          formSuccess();
        } else {
          submitMSG(false, text);
        }
      },
    });
  }

  function formSuccess() {
    $contactform[0].reset();
    submitMSG(true, "Message Sent Successfully!");
  }

  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-success";
    } else {
      var msgClasses = "h3 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
  /* Contact form validation end */

  /* Animated Wow Js */
  new WOW().init();

  /* Popup Video */
  if ($(".popup-video").length) {
    $(".popup-video").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
    });
  }
})(jQuery);


// Language Change function

// Function to change language
function changeLanguage() {
  let currentLanguage = localStorage.getItem("currentLanguage");
  const textSpan = document.getElementById("currentLanguage");
  const textSpanMobile = document.getElementById("currentLanguage-mobile");

  if (!currentLanguage) {
    currentLanguage = "en";  // Default to English if no language is set
    localStorage.setItem("currentLanguage", currentLanguage);
  }

  // Toggle language
  const newLanguage = currentLanguage === "en" ? "ar" : "en";
  localStorage.setItem("currentLanguage", newLanguage);

  // Update the language switcher text
  textSpan.innerText = newLanguage === "en" ? "عربي" : "English";
  textSpanMobile.innerText = newLanguage === "en" ? "عربي" : "English";

  // Apply text direction and RTL class based on the new language
  applyTextDirection(newLanguage === "en");

  // Call the translate function (assuming it exists to handle the translation)
  translate(newLanguage);
  closeSidebar();
}

// Function to apply text alignment based on language
function applyTextDirection(isEnglish) {
  // Clear existing body text alignment
  document.body.style.textAlign = "";

  // Apply alignment and direction based on language
  if (isEnglish) {
    document.body.style.textAlign = "left";  // Set to left for English
    document.body.classList.remove("rtl");   // Remove RTL class for English
  } else {
    document.body.style.textAlign = "right"; // Set to right for Arabic
    document.body.classList.add("rtl");      // Add RTL class for Arabic
  }

  // Update text direction classes for elements with language-specific classes
  document.querySelectorAll('.english-text').forEach(element => {
    element.classList.remove('arabic-text');
    element.classList.add('english-text');
  });
  
  document.querySelectorAll('.arabic-text').forEach(element => {
    element.classList.remove('english-text');
    element.classList.add('arabic-text');
  });
}

// Apply text direction on page load based on saved language
document.addEventListener("DOMContentLoaded", () => {
  const currentLanguage = localStorage.getItem("currentLanguage") || "en"; // Default to English if not set
  applyTextDirection(currentLanguage === "en");
});



// On page load
window.onload = () => {
  const currentLanguage = localStorage.getItem("currentLanguage") || "en";
  const textSpan = document.getElementById("currentLanguage");
  const textSpanMobile = document.getElementById("currentLanguage-mobile");

  if (!localStorage.getItem("currentLanguage")) {
    localStorage.setItem("currentLanguage", "en");
  }

  textSpan.innerText = currentLanguage === "en" ? "عربي" : "English";
  textSpanMobile.innerText = currentLanguage === "en" ? "عربي" : "English";

  translate(currentLanguage);
};
