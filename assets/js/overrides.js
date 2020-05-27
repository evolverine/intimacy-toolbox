jQuery(document).ready(function($) {
// spoilers
 $(document).on('hover', '.spoiler', function() {
    $(this).removeClass('spoiler');
 });

 $(document.body).addClass("overridden")
}