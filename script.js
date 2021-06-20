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
  
  //apply color to each section from array
  /*int = -1;
  color_array = ['#1abc9c','#c0392b','#9b59b6','#3498db','#f1c40f','#16a085'];

  $('section').each(function(){
    int++
    $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
  }); */
  
});