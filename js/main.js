$(function () {
  //맨위 배경 스위퍼
  let main_bg_swiper = new Swiper(".main_bg_swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main_bg_swiper_area .swiper-pagination",
      clickable: true,
    },
    loop: false,
    effect: 'fade',
    touchRatio: 0,
  });

  //객실? 사진 스위퍼
  new Swiper(".tab1_swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".tab1_swiper_area .swiper-button-next",
      prevEl: ".tab1_swiper_area .swiper-button-prev",
    },
    effect: 'fade',
    observer: true,
    observeParents: true,
  });

  new Swiper(".tab2_swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".tab2_swiper_area .swiper-button-next",
      prevEl: ".tab2_swiper_area .swiper-button-prev",
    },
    effect: 'fade',
    observer: true,
    observeParents: true,
  });

  new Swiper(".tab3_swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".tab3_swiper_area .swiper-button-next",
      prevEl: ".tab3_swiper_area .swiper-button-prev",
    },
    effect: 'fade',
    observer: true,
    observeParents: true,
  });

  new Swiper(".tab4_swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".tab4_swiper_area .swiper-button-next",
      prevEl: ".tab4_swiper_area .swiper-button-prev",
    },
    effect: 'fade',
    observer: true,
    observeParents: true,
  });

  new Swiper(".tab5_swiper", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".tab5_swiper_area .swiper-button-next",
      prevEl: ".tab5_swiper_area .swiper-button-prev",
    },
    effect: 'fade',
    observer: true,
    observeParents: true,
  });

  //이벤트 스위퍼
  new Swiper(".event_swiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    pagination: {
      el: ".event_swiper_area .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".event_swiper_area .swiper-button-next",
      prevEl: ".event_swiper_area .swiper-button-prev",
    },
  });





  $('.gnb').hover(function () {
    $('header').toggleClass('active');
  });

  $('.tab_cate li').click(function () {
    let c = $(this).attr('class');
    $('.tab_cate li').removeClass('active');
    $(this).addClass('active');
    $('.tab').removeClass('on');
    $('#' + c).addClass('on');
  })
});
