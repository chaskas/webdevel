/*
 * ---------------------------------------------------------------- 
 * ---------------------------------------------------------------- 
 *  Purity HTML/CSS Template custom jQuery scripts.
 * ---------------------------------------------------------------- 
 * ----------------------------------------------------------------  
 */


jQuery.noConflict();
jQuery(document).ready(function($){
	
	

/*
 * ---------------------------------------------------------------- 
 *  NivoSlider
 * ----------------------------------------------------------------  
 */


	$(window).load(function() {
		
		$('#slider').nivoSlider({
			pauseTime:4000, // How long each slide will show
			effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
			animSpeed:700, // Slide transition speed	
			directionNav:false // Direction nav (prev/next arrow)
		});
		
	});
	




/*
 * ---------------------------------------------------------------- 
 *  Twitter
 * ----------------------------------------------------------------  
 */
 	
	getTwitters('tweet', { 
	  id: 'envatowebdesign',  /* Your Twitter ID */
	  count: 1, /* Number of tweets that will be shown */
	  enableLinks: true, 
	  ignoreReplies: true, 
	  clearContents: true,
	  template: '<div class="twitter-content">"%text%" </div><div class="quote"><a href="http://twitter.com/%user_screen_name%/statuses/%id_str%/"><span>%time%</span></a></div>'
	});
	
 
/*
 * ---------------------------------------------------------------- 
 *  Dropdown menu
 * ----------------------------------------------------------------  
 */


	mainmenu();
	
	function mainmenu(){
	$(" .nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300);
	},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
	});
	}
	

/*
 * ---------------------------------------------------------------- 
 *  Image hover effect
 * ----------------------------------------------------------------  
 */
	
	$('.over').live({
	mouseover:
		function() {
			$(this).stop().animate({"opacity": ".9"}, 250);
		},
	mouseout:
		function() {
			$(this).stop().animate({"opacity": "0"}, 250);
		}
	});		

	
    $('.portfolio img,.content .gallery, .button, .big_button, .search_submit, .flickr_badge_image img').live({
    	mouseover:
			function() {
			$(this).stop().animate({"opacity": ".4"}, 300);
			},
		mouseout:
			function() {
			$(this).stop().animate({"opacity": "1"}, 300);
			}
	});
	
	
	$('.social img').animate({"opacity": .5 });
	$('.social img').hover(function() {
    	$(this).stop().animate({ "opacity": 1 }, 250);
    }, function() {
    	$(this).stop().animate({ "opacity": .5 }, 250);
    });
	
/*
 * ---------------------------------------------------------------- 
 *  Quicksand
 * ----------------------------------------------------------------  
 */

 	// Clone applications to get a second collection
	var $data = $(".portfolio").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.filter li a').click(function(e) {
		$(".filter li").removeClass("current");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)

		var filterClass=$(this).text().toLowerCase().replace(' ','-');
		
		if (filterClass == 'all-projects') {
			var $filteredData = $data.find('li');
		} else {
			var $filteredData = $data.find('li.' + filterClass);
		}
		$(".portfolio").quicksand($filteredData, {
			duration: 700,
			easing: 'swing',
		});	
		
		$(this).parents("li").addClass("current"); 			
		return false;
	});
	
	
/*
 * ---------------------------------------------------------------- 
 *  Simple codes
 * ----------------------------------------------------------------  
 */

	
	$('.tabs > ul').tabs();
	
	
	// Toggles element script
	
	$('.toggle-view li').click(function () {
		var text = $(this).children('p');
		
		if (text.is(':hidden')) {
			text.slideDown('fast');
			$(this).children('h6').addClass('active');		
		} else {
			text.slideUp('fast');
			$(this).children('h6').removeClass('active');		
		}		
	});


/*
 * ---------------------------------------------------------------- 
 *  PrettyPhoto
 * ----------------------------------------------------------------  
 */

	// Dynamic content change fix
	$('.portfolio').live({
		mouseover:
		function() {
			$(".gallery a[rel^='gallery']").prettyPhoto({animation_speed:'normal',theme:'pp_default',deeplinking:false,slideshow:3000});
			$(".item-image").css("background-image", "none");
		},
		mouseout:
		function() {
			$(".gallery a[rel^='gallery']").prettyPhoto({animation_speed:'normal',theme:'pp_default',deeplinking:false,slideshow:3000});
			$(".item-image").css("background-image", "none");
		},
	});
	
	$(document).ready(function(){			
		$(".gallery a[rel^='gallery']").prettyPhoto({animation_speed:'normal',theme:'pp_default',deeplinking:false,slideshow:3000});
	});	

});

