(function($) {
  function hideSidebar() {
    if($(window).width() < 1024) {
      $('.navbar-toggle').on('click', function(){
        if($('.navbar-toggle').hasClass('open')) {
          $('.navbar-toggle').removeClass('open');
          $('.collapse').css('display', 'none');
        }else {
          $('.navbar-toggle').addClass('open');
          $('.collapse').css('display', 'block');
        }
      });
    }
    if($(window).width() >= 1024) {
      $('.sidebar').on('click', function(e){
        e.preventDefault();
        if($('.sidebarBlock').hasClass('visible')) {
          $('.sidebarBlock').removeClass('visible');
          $('.sidebarBlock').fadeIn(800);
        }else {
          $('.sidebarBlock').addClass('visible');
          $('.sidebarBlock').fadeOut(800);
        }
      });
    }
  }
  $(document).ready(hideSidebar);
})(jQuery);
