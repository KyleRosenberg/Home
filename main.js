$(document).ready(function(){
    $('.ui.sidebar').sidebar();
    document.getElementById('showmenu').onclick = function(){
        $('.ui.sidebar').sidebar('toggle');
    }
    $('.ui.sticky').sticky();
;
});
