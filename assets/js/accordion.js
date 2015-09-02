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

// This makes all of them slide down
// at the same time.

// menu1El.on('click', function() {
//   subMenuEl.slideToggle(400);
//   menu1El.toggleClass('active');
// });

// For some reason the below set of functions
// doesn't make "Cloud" slide down.

filesEl.on('click', function() {
  subFilesEl.slideDown(400);
  subCloudEl.slideUp(400);
  filesEl.addClass('active');
  mailEl.removeClass('active');
  cloudEl.removeClass('active');
  logoutEl.removeClass('active');
});

cloudEl.on('click', function() {
  subCloudEl.slideDown(400);
  subFilesEl.slideUp(400);
  filesEl.removeClass('active');
  mailEl.removeClass('active');
  cloudEl.addClass('active');
  logoutEl.removeClass('active');
});

mailEl.on('click', function() {
  filesEl.removeClass('active');
  mailEl.addClass('active');
  cloudEl.removeClass('active');
  logoutEl.removeClass('active');
});

logoutEl.on('click', function() {
  filesEl.removeClass('active');
  mailEl.removeClass('active');
  cloudEl.removeClass('active');
  logoutEl.addClass('active');
});

})();
