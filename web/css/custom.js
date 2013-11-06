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
			pauseTime:3000, // How long each slide will show
			effect:'random', // Specify sets like: 'fold,fade,sliceDown'
			animSpeed:500, // Slide transition speed	
		});
		
	});

	$('.close').click(function(){
		$('div.nivo-caption').animate({opacity:.1})
	});
/*
 * ---------------------------------------------------------------- 
 *  Recent posts hover effect
 * ----------------------------------------------------------------  
 */
 
		
	$('.hover').delegate('.hover div', 'mouseover mouseout', function(e) {
        if (e.type == 'mouseover') {
            jQuery('.hover div').not(this).dequeue().animate({opacity: '0.4'}, 300);
        } else {
            jQuery('.hover div').not(this).dequeue().delay(50).animate({opacity: '1'}, 300);
        }
    });
 
 
/*
 * ---------------------------------------------------------------- 
 *  Dropdown menu
 * ----------------------------------------------------------------  
 */


	mainmenu();
	
	function mainmenu(){
	$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300);
	},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
	});
	}


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
		
		if (filterClass == 'Todos') {
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

	
	$('#tabs > ul').tabs();
	
	
	// Toggles element script
	
	$('#toggle-view li').click(function () {
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
 *  Image hover effect
 * ----------------------------------------------------------------  
 */

	$('.over').css({opacity:'0'});
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

	
    $('.portfolio img,.content .gallery, .button, .big_button, .search_submit').live({
    	mouseover:
			function() {
			$(this).stop().animate({"opacity": ".4"}, 300);
			},
		mouseout:
			function() {
			$(this).stop().animate({"opacity": "1"}, 300);
			}
	});
	
	
	$('.social img').animate({"opacity": .4 });
	$('.social img').hover(function() {
    	$(this).stop().animate({ "opacity": 1 }, 250);
    }, function() {
    	$(this).stop().animate({ "opacity": .4 }, 250);
    });


/*
 * ---------------------------------------------------------------- 
 *  Image Preloading
 * ----------------------------------------------------------------  
 */

$.fn.preloader = function(options){	
	var defaults = {
		             delay:200,
					 preload_parent:"div",
					 check_timer:300,
					 ondone:function(){ },
					 oneachload:function(image){  },
					 fadein:500 
					};
	
	// variables declaration and precaching images and parent container
	 var options = $.extend(defaults, options),
	 root = $(this) , images = root.find("img").css({"visibility":"hidden",opacity:0}) ,  timer ,  counter = 0, i=0 , checkFlag = [] , delaySum = options.delay ,
	 
	 init = function(){		
		timer = setInterval(function(){			
			if(counter>=checkFlag.length)
			{
			clearInterval(timer);
			options.ondone();
			return;
			}		
			for(i=0;i<images.length;i++)
			{
				if(images[i].complete==true)
				{
					if(checkFlag[i]==false)
					{
						checkFlag[i] = true;
						options.oneachload(images[i]);
						counter++;
						
						delaySum = delaySum + options.delay;
					}					
					$(images[i]).css("visibility","visible").delay(delaySum).animate({opacity:1},options.fadein,
					function(){ $(this).parent().removeClass("preloader");   });
				}
			}		
			},options.check_timer) 		 
		 };	
		 
	images.each(function(){		
		if($(this).parent(options.preload_parent).length==0)
		$(this).wrap("<div class='preloader' />");
		else
		$(this).parent().addClass("preloader");		
		checkFlag[i++] = false;		
		}); 
		
	images = $.makeArray(images); 	
	
	var icon = jQuery("<img />",{		
		id : 'loadingicon' ,
		src : 'images/loader.gif'		
		}).hide().appendTo("body");	
	
	timer = setInterval(function(){		
		if(icon[0].complete==true)
		{
			clearInterval(timer);
			init();
			 icon.remove();
			return;
		}		
		},100);	
	}	
	
$(".portfolio").preloader();

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

