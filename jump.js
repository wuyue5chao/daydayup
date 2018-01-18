//返回 判断是否从登陆页面进来 返回首页

function jump(){
	var url = location.search;   
	var url = "?fromLogin=yes";
	var request = {};
	console.log(url);  //?fromLogin=yes

	if(url.indexOf('?') !=-1){     //url 检索?是否存在 -1表示不存在
		var paramStr = url.substr(1);  //substr(start,length)  截取字符串
		var param = paramStr.split('&');  //split() 把字符串分割成数组

		console.log(paramStr);   //fromLogin=yes
		console.log(param);    //["fromLogin=yes"]
		console.log(paramStr.split('='))  //["fromLogin","yes"]

		for(var i=0; i<param.length; i++){
			// decodeURL 解码
			request[param[i].split('=')[0]] = decodeURI(param[i].split('=')[1]);
		}

		console.log(request);   // {fromLogin : "yes"}

		if(request['fromLogin'] == 'yes'){
			window.location.href = "/";
		}else{
			var referrer = document.referrer;  //返回载入当前文档的URL
			//将http://或者https://替换成空
			referrer = referrer.replace(/(http\:\/\/)|(https\:\/\/)/, "");

			var urlArr = referrer.split('/');
			var host = urlArr[0];

			var thisHost = window.location.host.replace(/(http\:\/\/)|(https\:\/\/)/, "");  //?

			if(host==thisHost){
				window.history.back();
			}else{
				window.location.href = '/';
			}
		}
}