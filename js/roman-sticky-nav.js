$(document).ready(function() {
  var sidebar = new StickySidebar('#sidebar', {
    containerSelector: '#main-content',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 150,
    bottomSpacing: 80,
    minWidth: 768,
    resizeSensor: true
  });
})