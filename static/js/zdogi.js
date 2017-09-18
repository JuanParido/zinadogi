$(function(){
  var sidemenuSwitch = $('#toggle-sidemenu-l.sidebar'); //Toggle menu button (bars, and left arrow)
  var itemButton = $('.item-button'); //Each and all of item buttons
  var innerButton = $('.inner-item-button'); //Each and all of inner item buttons
  var itemTitle = $('.item-title'); //Each and all of item titles
  var menuLevel2 = $('.level-2'); //Each and all level-2 menu items
  var menuLevel3 = $('.level-3'); //Each and all level-3 menu items
  var menuLevel3Item = $('.level-3 li');
  var mobileIcons = $('#mobile');

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
    $(window).resize(function(){
      if ($(window).width() >= 768) {
        if (sidebarValidation()) {
          $('.the-content').animate({paddingLeft: "235px"},175, "swing"); //Expanding back "The content" container
        }
        else {
          $('.the-content').animate({paddingLeft: "55px"},175, "swing"); //Expanding back "The content" container
        }
      }
      else {
        $('.the-content').animate({paddingLeft: "15px"},175, "swing"); //Expanding back "The content" container

      }
    });

    sidemenuSwitch.toggleClass('fa-bars').toggleClass('fa-arrow-left').toggleClass('whirl'); //Change of menu button icon between bars and left arrow
    $('.left-sidebar').toggleClass('expanded'); //Toggle class expanded 

    if($('.left-sidebar').hasClass('expanded')) { //Validation whether the sidebar has expanded class or not
      $('.the-content').animate({paddingLeft: "235px"},175, "swing"); //Reduce "The content" container so the sidebar doesn't overlay any contents
      menuLevel3Item.show();
      menuLevel2.show();
      $('.logo-right').animate({marginLeft: "220px", opacity: 0},175, "swing"); //Fade out and move right the ZINA[application] logo when expanding sidebar
      sidemenuSwitch.css('float', 'right'); //Moving menu button to right of the sidebar when expanded (left arrow)
      $('.logo-left').fadeIn(); //Display ZINA[application] logo inside sidebar
      setTimeout(function(){itemTitle.fadeIn(300)},180); //Menu titles shown with fade and delay to avoid bad behavior during expanding
      if($(window).width() < 768) {
        mobileIcons.fadeOut();
      }
    }
    else { 
      if ($(window).width() >= 768) {
        $('.the-content').animate({paddingLeft: "55px"},175, "swing"); //Expanding back "The content" container
      }
      else {
        $('.the-content').animate({paddingLeft: "15px"},175, "swing"); //Expanding back "The content" container

      }
      menuLevel2.collapse("hide");
      menuLevel3.collapse("hide");
      menuLevel3Item.hide();
      menuLevel2.hide();
      $('.logo-left').fadeOut(100); //Hide ZINA[application] logo inside sidebar
      $('.logo-right').animate({marginLeft: "25px", opacity: 0},175, "swing"); //Relocate ZINA[application] log of top Navbar back to its position
      $('.logo-right').animate({opacity: 1},500,"swing"); //Bring ZINA[applicaton] logo back to full opacity after relocation
      sidemenuSwitch.css('float', 'left'); //Moving menu button to left of the sidebar when expanded (bars)
      $('.panel-collapse').collapse('hide'); //Collapsing back all submenus and preventing from expanding back when sidebar is collapsed
      itemTitle.fadeOut(1);
      if($(window).width() < 768) {
        mobileIcons.fadeIn();
      }
    } 
    sidebarValidation(); //Sidebar status function is called to set after transitions status
  };
  sidemenuSwitch.on("click", toggleMenu); //TOGGLE MENU ON MENU BUTTON
  itemButton.on("click", function(e){ //TOGGLE MENU ON ITEM BUTTONS
    if(sidebarValidation()==false){
      toggleMenu();
    }
  })


  //AutoCopyrightFunction
  var currYear = (new Date).getFullYear();
  var cR = $('.copyright')
  cR.append('<li> -&nbsp;&nbsp;ZINATeam ' + currYear + '</li>');

  //Collapsed menu tooltip
  zTooltip = function() {
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
    console.log($(window).width());
  }

  if ($(window).width() >= 768) {
      zTooltip();
  }
  $(window).resize(function(){
    if ($(window).width() >= 768) {
        zTooltip();
    }
    else {
      $('span.menuTip').addClass('out');
    }
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
    itemButton.click(function(){
      th = $(this);
      if (itemButton.attr("aria-expanded") == "true" || !itemButton.attr("aria-expanded")) {
        $('.inner').collapse("hide");
      }
      th.siblings().collapse("show");
      itemButton.siblings('.outer').not(th.siblings('.outer')).collapse("hide");
    });
    innerButton.click(function(){
        innerButton.siblings('.inner').not($(this).siblings('.inner')).collapse("hide");
    });

    // $(window).on('click',function(){
    //   if(sidebarValidation()==true){
    //     toggleMenu();
    //   }
    // });
    // $('aside').on('click', function(event){
    //   event.stopPropagation();
    // })
});