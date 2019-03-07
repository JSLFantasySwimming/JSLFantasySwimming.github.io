$(document).ready(function(){
  $('.standings').css('display', 'none');
  $('.teams').css('display', 'none');
  $('.draft').css('display', 'none');
});

function draftButtonClick() {
  $('.standings').fadeOut(1000);
  $('.teams').fadeOut(1000);
  $('.draft').delay(1000).fadeIn(1000);
};
