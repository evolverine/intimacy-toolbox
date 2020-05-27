jQuery(document).ready(function($) {
// spoilers
 $(document).on('mouseenter', '.spoiler', function() {
    $(this).removeClass('spoiler');
 });

 $(document.body).after("<p>overridden</p>")
}