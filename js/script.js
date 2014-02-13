$(window).resize(function(){
});  
$(function(){
	parallax();
	if($("div.form").length) form();
	if($(".projects_scroll").length) projects_scroll();
  carousel();
});
function form(){
	$(".form .line label span").click(function(){
		$(this).parent("label").find("span.selected").removeClass("selected");
		$(this).addClass("selected");		
	});
	$(".form .line .radio input[checked]").parent(".radio").addClass("selected");
	$(".form .line .radio input").change(function(){
		if($(this).attr("type")=='radio'){
			$(this).parents(".line").find(".radio.selected").removeClass("selected");
			$(this).parent(".radio").addClass("selected");
		}
		if($(this).attr("type")=='checkbox'){
			
			if($(this).attr("checked")) $(this).parent(".radio").addClass("selected");
			else $(this).parent(".radio").removeClass("selected");
		}
	});
	textarea();
}
function textarea(){
	$(".form .line .input textarea").each(function(){
			$(this).parent(".input").append('<div class="ta"></div>');
			$(this).addClass("noscroll");
	});
	$(".form .line .input textarea").bind('keyup', function() {
		content = $(this).val().replace(/\n/g, '<br>');
		hiddenDiv = $(this).parent(".input").find("div.ta");
		$(hiddenDiv).html(content);
		$(this).css('height', $(hiddenDiv).height());		
	});
}
function projects_scroll(){
	$('.projects_scroll').cycle({
		speed: 500,
		manualSpeed: 500,
		timeout: 0,
		slides: '> div.slide',
		fx: 'scrollHorz',
		'auto-height': true,
		//'pause-on-hover': true,
		prev: '.prev',
		next: '.next'
	});
}
function parallax(){
	$('body').parallax({
		'elements': [
			{
			  'selector': 'div.container',
			  'properties': {
				'x': {
				  'background-position-x': {
					'initial': 0,
					'multiplier': 0.02,
					'invert': true
				  }
				},
				'y': {
				  'background-position-y': {
					'initial': 0,
					'multiplier': 0.01,
					'invert': true
				  }
				}
			  }
			}
		]
	});
}
function carousel(){
  $('.slider')
    .jcarousel({
      list:  '.slider-list',
      items: '.slider-item',
      wrap:  'circular',
      animation: {
        duration: 500
      }
    })
    .jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
    });

  $('.slider-button-prev').jcarouselControl({
    target: '-=1'
  });
  $('.slider-button-next').jcarouselControl({
    target: '+=1'
  });
}