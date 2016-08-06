// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  center: false,
  width: 1280,
  height: 720,

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: 'bower_components/reveal.js/plugin/markdown/marked.js' },
    { src: 'bower_components/reveal.js/plugin/markdown/markdown.js' },
    { src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true },
    { src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

// listener to reveal logo on inner slides
Reveal.addEventListener( 'slidechanged', function( event ) {
  var brand = document.getElementById("logo-id");
  if ( Reveal.isFirstSlide() ) {
    brand.className = "brand hidden";
  } else {
    brand.className = "brand";
  }
} );
