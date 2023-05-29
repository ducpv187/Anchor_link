$(document).ready(function() {
    $(function () {
        $('a[href^="#"]').click(function () {
            let speed = 500;
            let href = $(this).attr('href');
            let target = $(href == "#" || href == "" ? 'html' : href);
            let position;
            if($(this).hasClass('item') && window.innerWidth > 768){
                position = target.offset().top;
            }else{
                position = target.offset().top;
            }
            $('html, body').animate({ scrollTop: position }, speed, 'swing');
            return false;
        });        
    });
});