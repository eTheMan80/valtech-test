(function($) {
  function hideSidebar() {
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
  $(document).ready(hideSidebar);
})(jQuery);
