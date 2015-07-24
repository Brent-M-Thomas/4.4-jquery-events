//
(function() {
var menu1El = $('.menu-lv1');
var subMenuEl = $('.submenu');
var filesEl = $('.myfiles');
var cloudEl = $('.mycloud');
var mailEl = $('.mymail');
var logoutEl = $('.logout');
var subCloudEl = $('.subcloud');
var subFilesEl = $('.subfiles');

// menu1El.on('click', function() {
//   subMenuEl.slideToggle(400);
//   menu1El.toggleClass('active');
// });

filesEl.on('click', function() {
  subFilesEl.slideToggle(400);
  filesEl.toggleClass('active');
});

cloudEl.on('click', function() {
  subCloudEl.slideToggle(400);
  cloudEl.toggleClass('active');
});

mailEl.on('click', function() {
  mailEl.toggleClass('active');
});

logoutEl.on('click', function() {
  logoutEl.toggleClass('active');
});

})();
