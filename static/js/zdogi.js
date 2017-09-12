$(function(){
  var sidemenuSwitch = $('#toggle-sidemenu-l'); //Toggle menu button (bars, and left arrow)
  var itemButton = $('.item-button'); //Each and all of item icons
  var itemTitle = $('.item-title'); //Each and all of item titles
  itemTitle.hide();
  $('.logo-right').fadeIn(); //First display of ZINA[application] logo
  //SIDEBAR EXPANDED OR COLLAPSED VALIDATION
  var sidebarValidation = function() { //Function to determine sidebar status. Returns true if expanded; false if collapsed
    if(!$('.left-sidebar').hasClass('expanded')){
      return false;
    }
    else {
      return true;
    }
  }
  sidebarValidation(); //Sidebar status function is called to set initial status
  //TOGGLE MENU FUNCTION
  var toggleMenu = function(e){ //Function to expand/collapse sidebar
    sidemenuSwitch.toggleClass('fa-bars').toggleClass('fa-arrow-left').toggleClass('whirl'); //Change of menu button icon between bars and left arrow
    $('.left-sidebar').toggleClass('expanded'); //Toggle class expanded 

    if($('.left-sidebar').hasClass('expanded')) { //Validation whether the sidebar has expanded class or not
      $('.logo-right').animate({marginLeft: "220px", opacity: 0},175, "swing"); //Fade out and move right the ZINA[application] logo when expanding sidebar
      sidemenuSwitch.css('float', 'right'); //Moving menu button to right of the sidebar when expanded (left arrow)
      $('.logo-left').fadeIn(); //Display ZINA[application] logo inside sidebar
      $('.the-content').animate({paddingLeft: "240px"},175, "swing"); //Reduce "The content" container so the sidebar doesn't overlay any contents
      setTimeout(function(){itemTitle.fadeIn(300)},180); //Menu titles shown with fade and delay to avoid bad behavior during expanding
    }
    else { 
      $('.logo-left').fadeOut(100); //Hide ZINA[application] logo inside sidebar
      $('.logo-right').animate({marginLeft: "40px", opacity: 0},175, "swing"); //Relocate ZINA[application] log of top Navbar back to its position
      $('.logo-right').animate({opacity: 1},500,"swing"); //Bring ZINA[applicaton] logo back to full opacity after relocation
      sidemenuSwitch.css('float', 'left'); //Moving menu button to left of the sidebar when expanded (bars)
      $('.panel-collapse').collapse('hide'); //Collapsing back all submenus and preventing from expanding back when sidebar is collapsed
      $('.the-content').animate({paddingLeft: "60px"},175, "swing"); //Expanding back "The content" container
      itemTitle.fadeOut(1);
    } 
    sidebarValidation(); //Sidebar status function is called to set after transitions status
  };
  sidemenuSwitch.on("click", toggleMenu); //TOGGLE MENU ON MENU BUTTON
  itemButton.on("click", function(e){ //TOGGLE MENU ON ITEM BUTTONS
    if(sidebarValidation()==false){
      toggleMenu();
    }
    // if($(this).hasClass('collapsed')){
    //   $(this).find('.caret').addClass('rotate');
    // }
    // else {
    //   $(this).find('.caret').removeClass('rotate');
    // }
  })


  //AutoCopyrightFunction
  var currYear = (new Date).getFullYear();
  var cR = $('.copyright')
  cR.append('<li>© Nokia - ZINATeam ' + currYear + '</li>');
  //.append('<li><a id="about" href="#">About us</a></li>'); - Disabled for ZINABlog
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