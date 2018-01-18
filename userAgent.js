var downloadUrl = '{$download}';
$(function(){
	$('.close').tap(function(){
		$('#download').hide();
	});
	
	var u = navigator.userAgent;
	var isAndroid = u.indexOf("Android") > -1 || u.indexOf('Adr') > -1;  //android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);  //ios终端
	$('#hrefDownObj').tap(function(){
		if(isIOS){
			window.location.href = '/System/DownLoad/iosProtocol';
			//$.alertMsg('暂未开放, 敬请期待');
		}esle{
			window.location.href = downloadUrl;
		}
	})
})