/**
 * loadScript create a script tag and execute a cb
 *
 * @param src {String}
 * @param done {Function}
 */
function loadScript (src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function () {
    done();
  };
  js.onerror = function () {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}

export default loadScript
