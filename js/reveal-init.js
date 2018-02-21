// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  center: false,
  width: 1600,
  height: 900,
  slideNumber: true,

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: '../node_modules/reveal.js/plugin/markdown/marked.js' },
    { src: '../node_modules/reveal.js/plugin/markdown/markdown.js' },
    { src: '../node_modules/reveal.js/plugin/notes/notes.js', async: true },
    { src: '../node_modules/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
