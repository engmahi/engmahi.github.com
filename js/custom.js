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
    // Instagram Feed
    //======================================

    $(function(){
        $('.instagram').instagramLite({
            username: 'engmahi',
            clientID: '199554eb34504658a4770d2859b5a583',
            urls: true,
            limit: 12,
            list: false,
            captions: false,
            date: false,
            likes: false,
            comments_count: false,
            load_more: '#mahi'
        });
    });


    //======================================
    // Magnific Popup
    //======================================

    $(function() {

        $('.instagram').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',

          gallery: {
            enabled: true
          },

          zoom: {
            enabled: true,
            duration: 300
          },
          mainClass: 'mfp-fade'
        });

    });


});
