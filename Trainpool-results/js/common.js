var navToggler = $('.navbar-toggler');
var nav = $('nav');
var selectionMobileNav = $('.mobile-navbar-nav');
var selectItem = selectionMobileNav.find('li');

navToggler.click(function(event) {
  if (navToggler.hasClass('active')) {
    navToggler.removeClass('active');
    selectionMobileNav.hide();
  } else {
    navToggler.addClass('active');
    selectionMobileNav.show();
  }
  event.preventDefault();
});

var langList = $('.lang');
var selection = $('.select');
var select = selection.find('li');

langList.click(function(event) {
  if (langList.hasClass('active')) {
    langList.removeClass('active');
    selection.hide();
  } else {
    langList.addClass('active');
    selection.show();
  }
  event.preventDefault();
});

select.click(function(event) {
  select.removeClass('active');
  $(this).addClass('active');
  var $lang =  $(this).text();
  langList.text($lang);
  langList.trigger('click');
});


var table = $('.table');

$('.table .body-table').on( 'click', '.cell-table', function () {
  if ( $(this).hasClass('on') ) {
    $(this).removeClass('on');
  }
  else {
    $('.cell-table.on').removeClass('on');
    $(this).addClass('on');
  }
} );