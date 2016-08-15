// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  center: false,
  width: 1600,
  height: 900,
  slideNumber: true,

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: '../reveal.js/plugin/markdown/marked.js' },
    { src: '../reveal.js/plugin/markdown/markdown.js' },
    { src: '../reveal.js/plugin/notes/notes.js', async: true },
    { src: '../reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
