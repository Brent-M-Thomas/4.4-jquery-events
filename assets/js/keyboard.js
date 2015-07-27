(function() {
var squareKey = $('.square-keys');
var outputEl = $('.output');
var capsLockEl = $('.caps-lock');
var letterKeysEl = $('.letter-keys');
var capsEl = $('.caps');
var spaceBarEl = $('.space-bar');

squareKey.on('click', function() {
  outputEl.append($(this).text());
});

spaceBarEl.on('click', function() {
  outputEl.append(' ');
});

capsLockEl.on('click', function() {
  // alert('this function works!');

  letterKeysEl.toggleClass('.caps');
  capsEl.val($(this).val().toUpperCase());
});

})();
