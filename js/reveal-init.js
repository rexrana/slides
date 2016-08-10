// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  center: false,
  width: 1920,
  height: 1080,

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: '../reveal.js/plugin/markdown/marked.js' },
    { src: '../reveal.js/plugin/markdown/markdown.js' },
    { src: '../reveal.js/plugin/notes/notes.js', async: true },
    { src: '../reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
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
