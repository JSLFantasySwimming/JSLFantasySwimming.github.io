$(document).ready(function(){
  $('.standings').css('display', 'none');
  $('.teams').css('display', 'none');
  $('.draft').css('display', 'none');
  $('.titleText').css('display', 'none');
  $('.buttons').css('display', 'none');
  $('.titleText').delay(500).fadeIn(2000);
  $('.buttons').delay(1000).fadeIn(2000);
});

function draftButtonClick() {
  $('.standings').fadeOut(1000);
  $('.teams').fadeOut(1000);
  $('.draft').delay(1000).fadeIn(1000);
};

function teamsButtonClick() {
  $('.standings').fadeOut(1000);
  $('.draft').fadeOut(1000);
  $('.teams').delay(1000).fadeIn(1000);
};

function standingsButtonClick() {
  $('.draft').fadeOut(1000);
  $('.teams').fadeOut(1000);
  $('.standings').delay(1000).fadeIn(1000);
};
