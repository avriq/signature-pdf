$(document).ready(() => {
  'use strict';

  var documentToolbar = $('.document-toolbar')
  var contentHeader = $('.content-header')
  var distance = contentHeader.outerHeight()
  $('.document-toolbar-container-sticky').css('height', documentToolbar.outerHeight())
  
  $(window).scroll(() => {
    if ($(window).scrollTop() >= distance) {
      documentToolbar.addClass('document-toolbar-sticky')
    } else {
      documentToolbar.removeClass('document-toolbar-sticky')
    }
    var scrollDistance = $(window).scrollTop()
    var result = Math.abs(Math.round(scrollDistance / 1227));
    if (result == 0) {
      result = 1
    }
    $('#pageCurrent').text(result)
  })
  if ($(window).scrollTop() > distance) {
    documentToolbar.addClass('document-toolbar-sticky')
  }
})