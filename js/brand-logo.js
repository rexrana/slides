// listener to reveal logo on inner slides
Reveal.addEventListener( 'slidechanged', function( event ) {
  var brand = document.getElementById("logo-id");
  if ( Reveal.isFirstSlide() ) {
    brand.className = "brand hidden";
  } else {
    brand.className = "brand";
  }
} );
