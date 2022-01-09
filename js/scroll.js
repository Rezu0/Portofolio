$(document).ready(function(){
    function clickScroll(id, idDiv){
        $('[id="' + id +'"]').click(function() {
            $('html, body').animate({
                scrollTop: $("#" + idDiv +"").offset().top
            }, 'slow');
        });
    }
    clickScroll("about-me", "content-about-me")
    clickScroll("project", "content-project")
});