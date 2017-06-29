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
  //AutoCopyrightFunction
  var currYear = (new Date).getFullYear();
  var cR = $('.copyright')
  cR.append('<li>© Nokia</li>')
  .append('<li>|</li>')
  .append('<li>ZINATeam ' + currYear + '</li>')
  .append('<li>|</li>')
  .append('<li><a id="about" href="#">About us</a></li>');
  //Collapsed menu guide

    itemMenu = $('.item-button');
    itemMenu.mouseenter(function(){
      $('span.menuTip').addClass('out');
      if(!($('.left-sidebar').hasClass('expanded'))) {
        var text = $(this).text();
        var menuTip = $(this).find('span.menuTip');
        if(menuTip.text() == 0){
          menuTip.text(text);
        }
        setTimeout(function(){
          menuTip.removeClass('out');
        },1)
      }
    })
    itemMenu.mouseleave(function(){
       if(!($('.left-sidebar').hasClass('expanded'))) {
        var menuTip = $(this).find('span.menuTip');
        menuTip.addClass('out');
      }
    }).click(function(){
        var menuTip = $(this).find('span.menuTip');
        menuTip.addClass('out');
    });
    //Normalizing importer buttons
    var fileUploaderCaption = $('.fileuploader-input-caption');
    var fileUploaderBrowse = $('.fileuploader-input-button');
    var fileUploaderSend = $('.import-send-btn');
    var fileUploaderDelete = $('.fileuploader-item .column-actions');
    fileUploaderSend.width(fileUploaderBrowse.width());

    // fileUploaderBrowse.click(function(){
    //   fileUploaderSend.css('margin-top', '20px');
    // })
    // fileUploaderCaption.click(function(){
    //   fileUploaderSend.css('margin-top', '20px');
    // })
});