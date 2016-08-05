var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? 'bower_components/reveal.js/css/print/pdf.css' : 'bower_components/reveal.js/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );
