function mainViewSwiper() {
  const mainViewSwiper = new Swiper(".mainView.swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".mainView.swiper .swiper-button-next",
      prevEl: ".mainView.swiper .swiper-button-prev",
    },

    pagination: {
      type: "bullets",
      el: ".swiper-pagination",
      clickable: ture,
    },
  });
}

mainViewSwiper();

function newItemsSwiper__init() {
  const newItemsSwiper = new Swiper(".viewNewAllItems-slide.swiper", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".viewNewAllItems-slide .swiper-button-next",
      prevEl: ".viewNewAllItems-slide .swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      770: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });
}

newItemsSwiper__init();

function lovedItemsSwiper__init() {
  const lovedItemSwiper = new Swiper(".viewLovedAllItems-slide", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".viewLovedAllItems-slide .swiper-button-next",
      prevEl: ".viewLovedAllItems-slide .swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      770: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });
}

lovedItemsSwiper__init();

function viewAllInterestedItems__init() {
  const lovedItemSwiper = new Swiper(
    ".viewAllInterestedItems__swiper-box .swiper",
    {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        400: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        770: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
    }
  );
}

viewAllInterestedItems__init();

function kidsSummerRiseSlide__init() {
  const kidsSummerRiseSlide = new Swiper(".kidsSummerRise__slide-box .swiper", {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 50,
  });
}

kidsSummerRiseSlide__init();

function viewAllBagItems__init() {
  const viewAllBagItems = new Swiper(".bag-slide", {
    loop: false,
    speed: 1000,
    slidesPerView: 3,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
}

viewAllBagItems__init();

function noticeSwiper__init() {
  const noticeSwiper = new Swiper(".notice-swiper-box.swiper", {
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

noticeSwiper__init();

function responseSlideMenu__init() {
  const responseSlideMenu = new Swiper(".response-menu-slide .swiper", {
    loop: false,
    slidesPerView: 3,
    breakpoints: {
      500: {
        loop: false,
        slidesPerView: 5,
      },
    },
  });
}

responseSlideMenu__init();

const body = document.querySelector("body");
const accordion = document.querySelector(".accordion-menu");

function closeSearchBox__init() {
  $(".close-box i").click(function () {
    $(".search-popupBox").removeClass("active");
    $(".search-popupBox__block-box").removeClass("active");
    body.style.overflow = "auto";
  });

  $(".search-popupBox__block-box").click(function () {
    $(".search-popupBox").removeClass("active");
    $(".search-popupBox__block-box").removeClass("active");
    body.style.overflow = "auto";
  });
}

closeSearchBox__init();

function openSearchBox__init() {
  $(".search-bar").click(function () {
    $(".search-popupBox").addClass("active");
    $(".search-popupBox__block-box").addClass("active");
    body.style.overflow = "hidden";
  });

  $(".fixed-footer-menu .search").click(function () {
    $(".search-popupBox").toggleClass("active");
    $(".search-popupBox__block-box").toggleClass("active");
    if ($(".search-popupBox").hasClass("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  });
}

openSearchBox__init();

function accordionMenuOpen__init() {
  $(".menu-body > ul > li").click(function () {
    $(this).find(".menu-con").toggleClass("active");
    if ($(this).find(".menu-con").hasClass("active")) {
      $(this).find(".active-icon").html("<i class='fa-solid fa-minus'></i>");
    } else {
      $(this).find(".active-icon").html("<i class='fa-solid fa-plus'></i>");
    }
  });
}

accordionMenuOpen__init();

function openAccordionMenu__init() {
  $(".top-bar__accodian-menu").click(function () {
    $(".accordion-menu").addClass("active");
    $(".accordion-menu__block-box").addClass("active");
    $("html").addClass("accordion-menu-active");
    body.style.overflow = "hidden";
  });

  $(".fixed-footer-menu .category").click(function () {
    $(".accordion-menu").addClass("active");
    $(".accordion-menu__block-box").addClass("active");
    $("html").addClass("accordion-menu-active");
    body.style.overflow = "hidden";
  });
}

openAccordionMenu__init();

function closeAccordionMenu__init() {
  $(window)
    .resize(function () {
      if (window.innerWidth > 1440) {
        $(".accordion-menu").removeClass("active");
        $(".accordion-menu__block-box").removeClass("active");
        $("html").removeClass("accordion-menu-active");
      }
    })
    .resize();

  $(".close-box").click(function () {
    $(".accordion-menu").removeClass("active");
    $(".accordion-menu__block-box").removeClass("active");
    $("html").removeClass("accordion-menu-active");
    body.style.overflow = "auto";
  });

  $(".accordion-menu__block-box").click(function () {
    $(".accordion-menu").removeClass("active");
    $(".accordion-menu__block-box").removeClass("active");
    $("html").removeClass("accordion-menu-active");
    body.style.overflow = "auto";
  });
}

closeAccordionMenu__init();

function closeNoticeBox__init() {
  $(".notice-swiper-box .close-box").click(function () {
    $(".notice-swiper-box").addClass("active");
  });
}

closeNoticeBox__init();

function openFooterAccordionMenu__init() {
  $(".footer-response .content-box > ul > li").click(function () {
    $(this).find(".menu-con").toggleClass("active");
    if ($(this).find(".menu-con").hasClass("active")) {
      $(this)
        .find(".active-icon")
        .html("<i class='fa-solid fa-chevron-up'></i>");
    } else {
      $(this)
        .find(".active-icon")
        .html("<i class='fa-solid fa-chevron-down'></i>");
    }
  });
}

openFooterAccordionMenu__init();
