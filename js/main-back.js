/*Links*/
var googleplay_link = 'https://play.google.com/store/apps/details?id=sts.al&hl=en';
var chrome_link ='https://chrome.google.com/webstore/detail/arcane-legends/ibmlkgieigeddcedpbijnpojheoddido';
var appstore_link ='http://itunes.apple.com/us/app/arcane-legends/id543335870';
var kindle_link ='http://support.spacetimestudios.com/entries/20789066-can-i-play-on-a-kindle-fire';


/*prebuilt tweens*/
function fadeToHalf(){
    $(this).find('img').tween({opacity:{
                                                start:100,
                                                stop:50,
                                                duration:0.5,
                                                effect:'easeOut'
                                            }
                                        });
                        $.play();
}

function fadeToFull(){
    $(this).find('img').tween({opacity:{
                                                stop:100,
                                                duration:0.5,
                                                effect:'easeOut'
                                            }
                                        });
                        $.play();
}
function fadeTo90(){
    $(this).find('img').tween({opacity:{
                                                start:100,
                                                stop:90,
                                                duration:0.5,
                                                effect:'easeOut'
                                            }
                                        });
                        $.play();
}

function quickHide(jo){
    jo.tween({opacity:{
                                                stop:0,
                                                duration:0.1
                                            }
                                        });
                        $.play();
}
function normalShow(jo){
    jo.tween({opacity:{
                                                stop:100,
                                                duration:3,
                                                effect:'easeOut'
                                            }
                                        });
                        $.play();
}
function fastShow(jo){
    jo.tween({opacity:{
                                                stop:100,
                                                duration:1,
                                                effect:'easeOut'
                                            }
                                        });
                        $.play();
}

function slide_left2(){
 var auto = 0;
 if(arguments.length > 0)
 {
  auto = arguments[0];
 }

 $('#pets123').animate({ 'margin-left': '-=264'}, function () {

  f_li = $('<div />').append($('#pets123').children('li:first-child').clone()).html();
  $('#pets123').children('li:first-child').remove();
  $('#pets123').append(f_li);

  $('#pets123').css({'margin-left':(parseInt($('#pets123').css('margin-left'))+264)+'px'});
 });

 if(auto)
 {
  setTimeout('slide_left2('+auto+');', 4000);
 }
}
function slide_right2(){
 var auto = 0;
 if(arguments.length > 0)
 {
  auto = arguments[0];
 }

 $('#pets123').animate({ 'margin-left': '+=264'}, function () {

  l_li = $('<div />').append($('#pets123').children('li:last-child').clone()).html();
  $('#pets123').children('li:last-child').remove();
  $('#pets123').prepend(l_li);
  $('#pets123').css({'margin-left':(parseInt($('#pets123').css('margin-left'))-264)+'px'});
 });

 if(auto)
 {
  setTimeout('slide_right2('+auto+');', 4000);
 }
}

function slide_left(){
 var auto = 0;
 if(arguments.length > 0)
 {
  auto = arguments[0];
 }

 $('#slider22').animate({ 'margin-left': '-=382'}, function () {

  f_li = $('<div />').append($('#slider22').children('li:first-child').clone()).html();
  $('#slider22').children('li:first-child').remove();
  $('#slider22').append(f_li);

  $('#slider22').css({'margin-left':(parseInt($('#slider22').css('margin-left'))+382)+'px'});
 });

 if(auto)
 {
  setTimeout('slide_left('+auto+');', 4000);
 }
}
function slide_right(){
 var auto = 0;
 if(arguments.length > 0)
 {
  auto = arguments[0];
 }

 $('#slider22').animate({ 'margin-left': '+=382'}, function () {

  l_li = $('<div />').append($('#slider22').children('li:last-child').clone()).html();
  $('#slider22').children('li:last-child').remove();
  $('#slider22').prepend(l_li);
  $('#slider22').css({'margin-left':(parseInt($('#slider22').css('margin-left'))-382)+'px'});
 });

 if(auto)
 {
  setTimeout('slide_right('+auto+');', 4000);
 }
}

function initFooter(){
    quickHide($("#footer .othergames a img.txt"));

    $("#footer .othergames a").hover(
        function(){
            $(this).find('img.icon').tween({
                opacity:{
                    start:100,
                    stop:25,
                    duration:0.5,
                    effect:'easeInOut'
                }
            });
            $(this).find('img.txt').tween({
                opacity:{
                    start:0,
                    stop:100,
                    duration:0.8,
                    effect:'easeIn'
                }
            });
            $.play();
        },

        function(){
            $(this).find('img.icon').tween({
                opacity:{
                    start:25,
                    stop:100,
                    duration:0.5,
                    effect:'easeInOut'
                }
            });
            $(this).find('img.txt').tween({
                opacity:{
                    start:100,
                    stop:0,
                    duration:0.8,
                    effect:'easeOut'
                }
            });
            $.play();

        }
        );
}

/* Calling Functions in jQuery Wrap */
 jQuery(function($){

    /* This code is executed after the DOM has been completely loaded */

    var totWidth=0;
    var positions = new Array();

    $('#slides .slide').each(function(i){

        /* Traverse through all the slides and store their accumulative widths in totWidth */

        positions[i]= totWidth;
        totWidth +=445; //$(this).width();

        /* The positions array contains each slide's commulutative offset from the left part of the container */

        if(!$(this).width())
        {
            //alert("Please, fill in width & height for all your images!");
            return true;
        }

    });

    $('#slides').width(totWidth);

    /* Change the cotnainer div's width to the exact width of all the slides combined */

    $('#menu ul li a').click(function(e,keepScroll){

            /* On a thumbnail click */

            $('li.menuItem').removeClass('act').addClass('inact');
            $(this).parent().addClass('act');

            var pos = $(this).parent().prevAll('.menuItem').length;

            $('#slides').stop().animate({marginLeft:-positions[pos]+'px'},800);
            /* Start the sliding animation */

            e.preventDefault();
            /* Prevent the default action of the link */


            // Stopping the auto-advance if an icon has been clicked:
            if(!keepScroll) clearInterval(itvl);
    });

    $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
    /* On page load, mark the first thumbnail as active */



    /*****
     *
     *  Enabling auto-advance.
     *
     ****/

    var current=1;
    function autoAdvance()
    {
        if(current==-1) return false;

        $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);   // [true] will be passed as the keepScroll parameter of the click function on line 28
        current++;
    }

    // The number of seconds that the slider will auto-advance in:

    var changeEvery =4;

    var itvl = setInterval(function(){autoAdvance()},changeEvery*1000);

    /* BX Slider */
    var forced_size=false;
    var curr_width;
    var curr_i;
    var slider_bx;
    function scrollImages(distance, duration){
        //$("#slider").css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");

        //inverse the number we set in the css
        //var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();

        //$("#slider").css("-webkit-transform", "translate3d("+value +"px,0px,0px)");

        if(slider_bx)
            slider_bx.goToSlide(0);
    }

    function resized(i, width){
        var vpt="";
        console.log('i : '+i +'\nwidth : '+width);
        document.documentElement.id = 's_' + i;
        //alert('current width : '+width);
        var zoom_level = Math.round((width/480)*100)/100;
        //alert('zoom_level : '+zoom_level);
        //if(curr_width != width)
        //{



            if(i==1)
            {

                    var vp = document.getElementsByName('viewport')[0];
                    if(vp){
                        vp.parentNode.removeChild(vp);
                    }


                    vpt="<meta name='viewport' id='viewport' content='width=480' />";
                    if(forced_size){
                        vpt="<meta name='viewport' id='viewport' content='width=device-width' />";
                    }


                    $('head').prepend(vpt);


                curr_width = window.screen.width;;
                maxImages=5;
                loadProperImages('sml');

            }
            else
            {
                //$(window).resize();

                if(isTierTablet){
                    $('#pet').addClass('tablet');
                }
                else{
                    $('#pet').removeClass('tablet');

                }
                var vp = document.getElementsByName('viewport')[0];
                if(vp){
                    vp.parentNode.removeChild(vp);
                }
                vpt="<meta name='viewport' content='width=1024>"
                $('head').append(vpt);
                curr_width = window.screen.width;
                maxImages=1;
                if(slider_bx)
                    slider_bx.resizeWidth(445);

                loadProperImages('lrg');
                if(scrollImages)
                    scrollImages(0,500);




            }




        //}

    }

    /* Open Popup */
    function open_popup(){
        $('#popup_wrapper').css('display','block');
        $('#popup_wrapper').tween({opacity:{
                                                    stop:100,
                                                    duration:1,
                                                    effect:'easeOut'

                                                }
                                            });
                            $.play();
    }
    /* Close PopUp */
    function close_popup(){
        $('#popup_wrapper').tween({opacity:{
                                                    stop:0,
                                                    duration:0.5,
                                                    effect:'easeOut',
                                                    onStop: function(){
                                                        $('#popup_wrapper').css('display','none');
                                                      }
                                                }
                                            });
                            $.play();
    }

    /*header animation*/
    function cycleImages(){
        //console.log('header anim');
        var $active = $('#chars .active');
        var $next = ($active.next().length > 0) ? $active.next() : $('#chars img:first');
        $next.css('z-index',2);//move the next image up the pile
        $active.fadeOut(1500,
        function(){//fade out the top image
            $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
            $next.css('z-index',3).addClass('active');//make the next image the top one
        });
    }

    /*Check Browser*/
    $(function(){
        if($.client.browser == 'Chrome' && navigator.userAgent.toLowerCase().indexOf('mobile')<0){
            $("a#playnow, a.button").attr('href', chrome_link).attr('target', "_blank");


        }
        else{

            if(DetectKindle())
            {
                //$("a#playnow, a.button").attr('href', "#").click(open_popup);
                $("a#playnow, a.button").attr('href', kindle_link).attr('target','_blank');


            }
            else if(DetectAndroid())
            {
                $("a#playnow, a.button").attr('href', googleplay_link).attr('target','_blank');

            }

            else if(DetectIos()){
                $("a#playnow, a.button").attr('href', appstore_link).attr('target','_blank');
                //$("a#playnow, a.button").attr('href', "#").click(open_popup);

            }
            else
            {
                //$("a#playnow, a.button").attr('target', "_blank");
                $("a#playnow, a.button").attr('href', "http://account.spacetimestudios.com/arcanelegends/").attr('target', "_blank");;
            }
        }
    });

    /*resize*/
    $(window).resize(function(e){

        var hd_w = $('#header').width();
        var d_w = document.width;
        //if(DetectMobileLong())
        //  d_w = window.screen.width;


        if(d_w<hd_w && d_w>=1100){
            $('#chars img').css({left:(d_w-hd_w)/2+'px'});
            //$('#badges h5.myth').addClass('narrower');
            //$('#badges ul.cs_list').addClass('narrower');
            //$('#s_0 #badges').css({left:'8%'});


        }
        else if(d_w<1100){
            $('#s_0 #badges').css({left:'4%'});
            $('#chars img').css({left:(d_w-hd_w)/2+'px'});
        }

        else{
            $('#chars img').css({left:0});
            //$('#s_0 #badges').css({left:'150px'});
            //$('#badges h5.myth').removeClass('narrower');
            //$('#badges ul.cs_list').removeClass('narrower');


        }



        var ind =0;
        if(window.screen.width<768 || DetectMobileLong()){
            ind=1;
        }



        if(!forced_size)
        {
            if(window.orientation == -90)
            {
                resized(ind, window.screen.height);
            }
            else{
                resized(ind, window.screen.width);
            }
        }
    });

    $(window).resize();

    /*switch between mobile and desktop via force*/
    $('.switch_mobile').bind('click',function(e){
        forced_size = true;

        e.preventDefault();
        if(window.orientation == -90)
        {
            resized(1, window.screen.height);
        }
        else{
            resized(1, window.screen.width);
        }
    });
    $('.switch_desktop').bind('click',function(e){
        forced_size = true;

        e.preventDefault();
        if(window.orientation == -90)
        {
            resized(0, window.screen.height);
        }
        else{
            resized(0, window.screen.width);
        }
    });

    /*explore slider*/
    var activeThumb;
    function initSlider(){
        fastShow($('#slider'));
        $('.thumbs a img').tween({opacity:{
                                        start:100,
                                        stop:50,
                                        duration:0.1
                                        }
                            });
        $.play();

        slider_bx= $('#slider').bxSlider({
            controls: false,
            pager:false,
            adaptiveHeight:true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides:1,
            slideWidth:445,
            easing:'ease-in-out',
            touchEnabled:false,
            useCSS:true,
            pager:false,
            infiniteLoop:true
        });

        $('.thumbs a').click(function(e){
            e.preventDefault();
            var thumbIndex = $('.thumbs a').index(this);

            slider_bx.goToSlide(thumbIndex);

            $('.thumbs a').removeClass('pager-active');
            if(activeThumb){

                activeThumb.bind('mouseenter',fadeToFull);
                activeThumb.bind('mouseleave',fadeToHalf);
                activeThumb.mouseleave();
            }

            $(this).addClass('pager-active');

            activeThumb = $(this);
            activeThumb.unbind('mouseleave');
            activeThumb.unbind('mouseenter');

            return false;
        });


        $('.thumbs a:first').addClass('pager-active');
        activeThumb = $('.thumbs a:first');
        activeThumb.mouseenter();
        activeThumb.unbind('mouseleave');
        activeThumb.unbind('mouseenter');

    }

    function initCarousel(){
            fastShow($('#pets'))
            $('#pets').bxSlider({
                        minSlides: 1,
                        maxSlides: 3,
                        moveSlides:1,
                        slideWidth:264,
                        easing:'ease-in-out',
                        touchEnabled:false,
                        useCSS:true,
                        pager:false,
                        infiniteLoop:true,
                        onSlideBefore:function(){Cufon.refresh('.myth');}
                      });

    }


        /*main init after preloading wrapper*/
        var content_loaded = false;
        function initMain(){
            content_loaded = true;
            checkAllLoaded();
            //console.log('init main');

                    /*var pets_count=$('#pets img').size();
                    var pets_ld_count=0;
                    $('#pets img').load(function(){
                        pets_ld_count++;
                        if(pets_ld_count == pets_count)
                        {
                            setTimeout(initCarousel,500);
                        }

                    });*/
                    setTimeout(initCarousel,500);

                    /*var sl_count=$('#slider img').size();
                    var sl_ld_count=0;
                    $('#slider img').load(function(){
                        sl_ld_count++;
                        if(sl_ld_count == sl_count)
                        {
                            setTimeout(initSlider,500);
                        }

                    });*/

                    setTimeout(initSlider,500);




                    /*video fancybox*/
                    $('#s_1 #video a').removeClass('fancybox');
                    $('#video a.fancybox').fancybox({
                        type:'iframe',
                        openEffect:'none',
                        closeEffect:'none',

                        scrolling:'no'
                    });


                    /*hover anims*/

                    $('.thumbs a').bind('mouseenter',fadeToFull);
                    $('.thumbs a').bind('mouseleave',fadeToHalf);

                    $('.video_frame a').bind('mouseenter',fadeTo90);
                    $('.video_frame a').bind('mouseleave',fadeToFull);
        }

        /*header preloading*/
        var ldCount=0;
        header_loaded =false;
        function preloadHeader(){
            /*preload header*/

                    var chars_count = $('#header img').size();
                    $('#header img').load(function(){
                        //console.log('header loaded');
                        ldCount++;


                        if(ldCount == chars_count){

                                    header_loaded = true;
                                    checkAllLoaded();
                        }
                    }).load();
        }

        function checkAllLoaded(){
            if(header_loaded && content_loaded)
            {
                $('body').addClass('loaded');

                setTimeout(function(){
                    $('#loader').fadeOut(500,function(){$(this).hide()});
                    normalShow($('#header'));
                    normalShow($('#branch-right'));
                    normalShow($('#branch-left'));

                    setInterval(cycleImages, 7000);
                },1000)

            }
        }


        function loadProperImages(atr){
            $('#chars img').each(function(i,val){

                $(this).attr('src',$(this).attr('data-'+atr));
                //console.log("data attr : "+$(this).attr('data-'+atr));
            });
        }

        slide_left2(1);

        $("#pets123").swipe({
                swipeLeft:function(){
                    slide_left2();
                },
                swipeRight:function(){


                    slide_right2();
                }

            });

        slide_left(1);

        $("#slider22").swipe({
                swipeLeft:function(){
                    slide_left();
                },
                swipeRight:function(){
                    slide_right();
                }
            });
 });