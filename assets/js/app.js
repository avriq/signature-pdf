$(document).ready(function () {
  'use strict';

  var documentToolbar = $('.document-toolbar')
  var contentHeader = $('.content-header')
  var distance = contentHeader.outerHeight()
  console.log(distance)
  $('.document-toolbar-container-sticky').css('height', documentToolbar.outerHeight())

  $(window).scroll(() => {
    console.log('test')
    if ($(window).scrollTop() >= distance) {
      console.log('scroll: ' + $(window).scrollTop())
      documentToolbar.addClass('document-toolbar-sticky')
    } else {
      documentToolbar.removeClass('document-toolbar-sticky')
    }
  });
  if( $(window).scrollTop() > distance){
    documentToolbar.addClass('document-toolbar-sticky')
  }
});