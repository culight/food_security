$(() => {
  $(window).scroll(() => {
    const winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $('body').addClass('sticky-shrinknav-wrapper');
    } else {
      $('body').removeClass('sticky-shrinknav-wrapper');
    }
  });
});

$('[data-mobile-app-toggle] .button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});
