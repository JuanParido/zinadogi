$(function(){
  function msieversion() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
      {
       $('.step-1').css('left', '-23%');   
       $('.step-3').css('right', '-23%');   
       $('.step-container').css('width', '95%');
       $('.step-container').css('margin-left', '2.5%')
      }
      return false;
  }
  msieversion();

  var $container = $(".step");
var $p = $("p");
var currentIndex = 0;

$p.on("click", function(e) {
  var $current = $(e.currentTarget);
  var index = $p.index($current);
  if (index > currentIndex) {
    $container.addClass("forward");
  } else {
    $container.removeClass("forward");
  }
  currentIndex = index;
  $container.attr("data-step", index);
});

})
