(function() {
var squareKey = $('.square-keys');
var outputEl = $('.output');
var capsLockEl = $('.caps-lock');
var letterKeysEl = $('.letter-keys');
var capsEl = $('.caps');
var spaceBarEl = $('.space-bar');
var tabKeyEl = $('.tab-key');
var returnKeyEl = $('.return');
var deleteKeyEl = $('.delete-key');

squareKey.on('click', function() {
  outputEl.append($(this).text());
});

spaceBarEl.on('click', function() {
  outputEl.append(' ');
});

tabKeyEl.on('click', function() {
  //this only gives one space instead of 5 :(
  outputEl.append(' ' + ' ' + ' ' + ' ' + ' ');
});

returnKeyEl.on('click', function() {
  outputEl.append('<br/>');
});

deleteKeyEl.on('click', function() {
  // alert('this function works!');
  var newOutput = outputEl.substring(0, outputEl.length - 1);
  outputEl.val(newOutput);
});

// capsLockEl.on('click', function() {
// alert('this function works!');

// letterKeysEl.toggleClass('.caps');
// letterKeysEl.html.;
// });

})();
