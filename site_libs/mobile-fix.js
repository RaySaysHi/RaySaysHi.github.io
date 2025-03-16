// Simple script to ensure mobile navigation works correctly
$(document).ready(function() {
  // Fix for hamburger menu on mobile
  $('.navbar-toggle').on('click', function(e) {
    e.preventDefault();
    $('#navbar').toggleClass('in');
  });
  
  // Ensure hamburger menu is visible on mobile
  function checkMobile() {
    if ($(window).width() < 768) {
      $('.navbar-toggle').css({
        'display': 'block',
        'visibility': 'visible',
        'opacity': '1'
      });
    }
  }
  
  // Run on page load
  checkMobile();
  
  // Run on window resize
  $(window).resize(function() {
    checkMobile();
  });
});