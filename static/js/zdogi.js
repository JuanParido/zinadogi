$(function(){
  var sidemenuSwitch = $('#toggle-sidemenu-l');
  var itemButton = $('.item-button');
  $('.logo-right').fadeIn();
  //SIDEBAR EXPANDED OR COLLAPSED VALIDATION
    var sidebarValidation = function() {
      if(!$('.left-sidebar').hasClass('expanded')){
        return false;
      }
      else {
        return true;
      }
  }
  sidebarValidation();
  console.log(sidebarValidation());
  //TOGGLE MENU FUNCTION
  var toggleMenu = function(e){
    $('#toggle-sidemenu-l').toggleClass('fa-bars').toggleClass('fa-arrow-left').toggleClass('whirl');
    $('.left-sidebar').toggleClass('expanded');

    if($('.left-sidebar').hasClass('expanded')) {
      $('.logo-right').animate({marginLeft: "250px", opacity: 0},175, "swing");
      $('#toggle-sidemenu-l').css('float', 'right');
      $('.logo-left').fadeIn();
      $('.the-content').animate({paddingLeft: "270px"},175, "swing");
    }
    else {
      $('.logo-left').fadeOut(100);
      setTimeout(function(){
        $('.logo-right').animate({marginLeft: "40px", opacity: 0},175, "swing");
        $('.logo-right').animate({opacity: 1},500,"swing");
        $('#toggle-sidemenu-l').css('float', 'left');
        $('.panel-collapse').collapse('hide');
        $('.the-content').animate({paddingLeft: "60px"},175, "swing");
        $('[data-toggle="tooltip"]').tooltip();
      });
    }
    sidebarValidation();
    console.log(sidebarValidation());
  };
  sidemenuSwitch.on("click", toggleMenu); //TOGGLE MENU ON MENU BUTTON
  itemButton.on("click", function(e){ //TOGGLE MENU ON ITEM BUTTONS
    if(sidebarValidation()==false){
      toggleMenu();
    }
    if($(this).hasClass('collapsed')){
      $(this).find('.caret').addClass('rotate');
    }
    else {
      $(this).find('.caret').removeClass('rotate');
    }
  })
});