$(document).on("scroll", function() {
  if ($(window).scrollTop() === 0)
    $(".navbar").removeClass("fixed"),
    $('.logo').attr('src', 'img/logo.png');
  else
    $(".navbar").addClass("fixed"),
    $('.logo').attr('src', 'img/logo_f.png');
});
$('.navbar').attr('src="img/logo_f.png"')




function slowScroll(id) {
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
}
