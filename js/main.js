$(document).scrool(function(){
    $('navbar').toggleClass('scrolled', $(this).
    scrollTop() > $('.navbar').height());
});