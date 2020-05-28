// spoilers to show the content on mouse over (and keeping
// the click default behaviour from the theme, for mobile)
 $(document).on('mouseenter', '.spoiler', function() {
    $(this).removeClass('spoiler');
 });