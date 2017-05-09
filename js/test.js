(function($) {
  function loadProducts() {
    $.getJSON("js/test.json", function(data) {
      var ProductHTML = "",
          container = $(".main");
        $.each(data.heroList.heroItems, function (index, item) {
          var baseUrl = data.baseSite,
              imageUrl = baseUrl + item.imageUrl,
              href = baseUrl + item.cta.link,
              productTemplate = '<div class="wrapper"><div class="left"><img src="' + imageUrl + '" alt="" /><h1>' + item.headlineText + '</h1><a href="' + href + '">' + item.cta.text + '</a></div></div>';
          ProductHTML += productTemplate;
          console.log(imageUrl);
        });
        container.empty().append(ProductHTML);
    }).fail(function() {
      console.log('This is a failed request!!');
    });
  }
  $(document).ready(loadProducts);
})(jQuery);
