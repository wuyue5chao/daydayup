;(function(){
	$.oto_checkEvent = function(e,tarName){
		var e = e || w.event;
		var target =e.srcElement || e.target;
		
		var checkParent = function(target){
			var parentObj = $(target).parent();
			if(!parentObj[0]){
				return false;
			}else if(parentObj[0].tagName == tarName){
				return parentObj[0];				
			}else if(parentObj[0].tagName == "BODY"){
				return false;
			}else{
				return checkParent(parentObj[0]);
			}
		}
		
		if(target.tagName != tarName){
			return checkParent(target);
		}else{
			return target;
		}
	}
})(Zepto);
