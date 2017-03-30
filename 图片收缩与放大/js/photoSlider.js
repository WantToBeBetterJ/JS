$(function(){
	function setWidth(){
		var width = 0;
		for(var i=0;i<$(".photo").length;i++){
			width += $(".photo").eq(i).width() + 42;
		}
		$(".photos").width(width);
	}
	
	function open(_this){

		var photoWidth = $(_this).parent().prev().children().width();
		var photoHeight = $(_this).parent().prev().children().height();
		$(_this).hide();
		$(_this).parents().eq(2).animate({
			width: $(".photos").width() + photoWidth - 60 + "px",
		}, 1000);
		
		$(_this).parents().eq(1).animate({ 
		    width: photoWidth + "px",
		    height: photoHeight + 70 + "px", 
		    borderWidth: "11px",
		    padding: "20px",
		}, 1000 );
		$(_this).parents().eq(1).children().eq(0).animate({ 
		    width: photoWidth + "px",
		    height: photoHeight + "px", 
		}, 1000, function(){
			$(_this).parents().eq(1).children().eq(2).show();
		});
		return false;
	}

	function close(_this){
		var currentWidth = $(_this).parents().eq(2).children().eq(0).children().width();
		$(_this).parents().eq(1).hide();
		$(_this).parents().eq(2).children().eq(0).animate({
			width:"100px",
			height:"100px",
		},1000);
		$(_this).parents().eq(2).animate({
			width: "100px",
			height: "139px",
			borderWidth : "1px",
			padding: "10px",
		},1000);
		$(_this).parents().eq(3).animate({
			width: $(".photos").width() - currentWidth + 60 + "px",
		},1000,function(){
			$(_this).parents().eq(2).children().eq(1).children().show();
		});
	}
	setWidth();
	$(".info").hide();
	for(var j=0;j<4;j++){
		// $(".innerPhoto").children().eq(j).click(function(){
		// 	_this = $(this).parent().next().children().get(0);
		// 	open(_this);
		// })
		$(".more").eq(j).click(function(e){
			_this = this;
			open(_this);
		});
		$(".close").eq(j).click(function(e){
			_this = this;
			close(_this);
		})
	}
})	