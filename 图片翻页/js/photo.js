$(function(){
	function toNext(){
		$(".photo").eq(currentIndex).css("z-index",1+"");
		for(var j=currentIndex+1;j<currentIndex+5;j++){
			var indexZ = 0;
			if(j<5){

				indexZ=$(".photo").eq(j).css("z-index");
				//console.log(1+);
				$(".photo").eq(j).css("z-index",1+parseInt(indexZ)+"");
			}else{
				indexZ=$(".photo").eq(j-5).css("z-index");
				$(".photo").eq(j-5).css("z-index",1+parseInt(indexZ)+"");
			}
		}
		if(currentIndex==4){
			currentIndex=0;
		}else{
			currentIndex++;	
		}
	}
	function toPrevious(){
		if(currentIndex==0){
			//debugger;
			$(".photo").eq(4).css("z-index",5+"");
		}else{
			$(".photo").eq(currentIndex-1).css("z-index",5+"");
		}
		for(var j=currentIndex;j<currentIndex+4;j++){
			var indexZ = 0;
			if(j<5){

				indexZ=$(".photo").eq(j).css("z-index");
				//console.log(indexZ);
				$(".photo").eq(j).css("z-index",parseInt(indexZ)-1+"");
			}else{
				indexZ=$(".photo").eq(j-5).css("z-index");
				$(".photo").eq(j-5).css("z-index",parseInt(indexZ)-1+"");
			}
		}
		if(currentIndex==0){
			currentIndex=4;
		}else{
			currentIndex--;
		}
	}
	function move(fn,position,index){
		$(".photo").eq(index).animate({
			top: position+"px",
		},600,fn);
		$(".photo").eq(index).animate({
			top:"200px",
		},600);
	}
	var currentIndex = 0;
	for(var i=0;i<$(".photo").length;i++){
		$(".photo").eq(i).css("z-index",5-i+"");
	}
	$(".next").click(function(){
		move(toNext,-200,currentIndex);
	});
	$(".previous").click(function(){
		if(currentIndex==0){
			move(toPrevious,600,4);
		}else{
			move(toPrevious,600,currentIndex-1);
		}
	})
})