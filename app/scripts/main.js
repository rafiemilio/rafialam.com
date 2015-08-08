// jshint devel:true
var $document = $(document),
    $element = $('#some-element'),
    className = 'hasScrolled';

$document.scroll(function() {
  if ($document.scrollTop() >= 170) {
    // user scrolled 50 pixels or more;
    // do stuff

    if ($( window ).width() < 950) {
    	$("#mobilebar").css("display", "block");
    }
    
    $element.addClass(className);
  } else {
  	$("#mobilebar").css("display", "none");
    $element.removeClass(className);
  }
});

