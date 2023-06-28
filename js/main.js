$(document).ready(function(){
    $(".landing").animate({"opacity":"1"},850);

    if($(window).scrollTop()>600)
        {
            $(".go_top").fadeIn(850);
        }

        if($(window).scrollTop()<500)
        {
            $(".go_top").fadeOut(850);
        }

        if($(window).scrollTop()>400)
        {
            $(".features").animate({"opacity":"1"},850);
        }
        if($(window).scrollTop()>800)
        {
            $(".services").animate({"opacity":"1"},850);
        }

        if($(window).scrollTop()>1750)
        {
            $(".portfolio").animate({"opacity":"1"},850);
        }

        if($(window).scrollTop()>2400)
        {
            $(".about").animate({"opacity":"1"},850);
        }

        if($(window).scrollTop()>3300)
        {
            $(".contact").animate({"opacity":"1"},850);
        }

        
    $(window).on("scroll",function(){
        
        if($(window).scrollTop()>600)
        {
            $(".go_top").fadeIn(850);
        }

        if($(window).scrollTop()<500)
        {
            $(".go_top").fadeOut(850);
        }

        if($(window).scrollTop()>400)
        {
            $(".features").animate({"opacity":"1"},850);
        }
        if($(window).scrollTop()>800)
        {
            $(".services").animate({"opacity":"1"},850);
        }

        if($(window).scrollTop()>1750)
        {
            $(".portfolio").animate({"opacity":"1"},850);
        }

        if($(window).scrollTop()>2400)
        {
            $(".about").animate({"opacity":"1"},850);
        }

        if($(window).scrollTop()>3300)
        {
            $(".contact").animate({"opacity":"1"},850);
        }
    });

    $(".go_top").click(function(){
        $(window).scrollTop(0);
    });

    $(".go_top").hover(function(){
        $(".go_top i").animate({"top":"9px"},200);
    },function(){
        $(".go_top i").animate({"top":"15px"},200);
    });
    
});