require(['support']);
// console.log('add', map(add(2)));

var match = curry(function(what, str) {
  return str.match(what);
});
var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});
var filter = curry(function(f, ary) {
  return ary.filter(f);
});
var map = curry(function(f, ary) {
  return ary.map(f);
});

