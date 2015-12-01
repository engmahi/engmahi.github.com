jQuery(function ($) {
    'use strict';
    
    //======================================
    // one page nav init
    //======================================

    $(function(){
        
        $('.nav').onePageNav({
            currentClass: 'active',
            filter: ':not(.external)',
            changeHash: false,
            scrollSpeed: 1750,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
            begin: function() {
                //I get fired when the animation is starting
            },
            end: function() {
                //I get fired when the animation is ending
            },
            scrollChange: function($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });

    });

    //======================================
    // password check by keyup function
    //======================================

    $(function(){

        $('#password').keyup(function(){
            var len = $('#password').val().length;

            console.log('Hello Sir');

            if ( len<1 ) {
                $('.show').text('Please Input Your Password Here').removeClass('red orange green');
            }

            else if ( len<=4 ) {
                $('.show').text('Week Password').addClass('red').removeClass('orange green');
            }

            else if ( len<=8 ) {
                $('.show').text('Good Password').addClass('orange').removeClass('red green');
            }

            else {
                $('.show').text('Strong Password').addClass('green').removeClass('red orange');
            }
        });

    });

    //======================================
    // define hight by jQuery
    //======================================

    $(function(){

        var $oneHeight = $('.one').height(),
            $oneWidth = $('.one').width();

        $('.two').height($oneHeight).width($oneWidth);
        
    });

    //======================================
    // Learn scroll function
    //======================================

    $(function(){
       $(window).scroll(function() {
            var nav = $('.navbar-default'),
                $this = $(this);

            if($this.scrollTop() > 100) {
                nav.addClass('sticky-nav animated fadeInDown');
            } else {
                nav.removeClass('sticky-nav animated fadeInDown');
            }

       });
    });

});
