$(document).ready(function(){
  var cardConW = $('.card-container').width();
  var cardW = $('.card').width();
  var numCards = $('.card').length;
  var cardOffset;
  $('.card:nth-of-type('+Math.ceil(numCards/2)+')').addClass('current');

  $(window).resize(function(){
    var cardConW = $('.card-container').width();
    var cardW = $('.card').width();
    setHorizScroll();
  });

  function setHorizScroll() {
    if( $(window).width() > 992 ){
      var cardOffset = ((numCards-3)/2*cardW)+32;
    } else {
      var cardOffset = ((numCards-1)/2*cardW)+64;
    }
    $('.card-container').animate({scrollLeft: cardOffset}, 0);
  }

  $('.card').click(function(){
    $('.card').removeClass('current');
    $(this).addClass('current');
  });

  $('.prev-btn').click(function(){
    //$('.card:last').clone().prependTo('.card-container');
    $('.card-container').animate({scrollLeft: $('.card-container').scrollLeft()-cardW}, 500);
    setTimeout(function(){
      $('.card:last').detach().prependTo('.card-container');
      $('.card.current').removeClass('current').prev().addClass('current');
      setHorizScroll();
    }, 500);
  });

  $('.next-btn').click(function(){
    $('.card:first').clone().appendTo('.card-container');
    $('.card-container').animate({scrollLeft: $('.card-container').scrollLeft()+cardW}, 500);
    setTimeout(function(){
      $('.card:first').remove();
      $('.card.current').removeClass('current').next().addClass('current');
      setHorizScroll();
    }, 500);
  });

  $('.card-container').scroll(function(){
    var cardConW = $('.card-container').width();
    var cardW = $('.card').width();
    console.log($('.card-container').scrollLeft());
  });

  setHorizScroll();

  $('.mobile-menu-btn').click(function(){
    $('.menu').slideToggle();
  });

});
