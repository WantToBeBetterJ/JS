(function($){

	$.fn.slideShow = function(opt){
		var defaultOpt = {
			playTime : 2000,
			autoPlay : true,
			eType : 'click'
		}
		$.extend(defaultOpt,opt);
		return this.each(function(){
			var me = $(this),
				ul = me.find('ul'),
				nav = me.find('.nav span'),
				oneWidth = ul.find('li').eq(0).width(),
				timer = null,
				iNow = 0;
			
			if(defaultOpt.autoPlay){
				me.on('mouseover',function(){
					clearInterval(timer);
				});
				me.on('mouseout',function(){
					autoPlay();
				});
				autoPlay();
			}
			
			nav.on(defaultOpt.eType,function(){
				index=$(this).index();
				ul.animate({
					left:-index*oneWidth
				})
				nav.removeClass('active');
				$(this).addClass('active');
				
			});
			function autoPlay(){
				timer = setInterval(function(){
					iNow++;
					//debugger;
					if(iNow==nav.length){
						iNow=0;
					}
					nav.eq(iNow).trigger('click');
					
				},defaultOpt.playTime);
			}
		});
	};

})(jQuery);
