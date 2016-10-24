$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('.gif-bg').css('background-position', x + 'px 0');
    }, 10);
})
