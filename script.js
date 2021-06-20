$(document).ready(function() {
    
    //activate wow.js
     new WOW().init();
  
    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['ABOUT', 'CV', 'PREVIOUS WORK', 'WEB 1', 'WEB 2', 'WEB 3'],
      loopBottom: true,
      sectionSelector: 'section'
    });

});