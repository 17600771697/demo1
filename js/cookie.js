//封装cookie
function setCookie(name,value,opt){
	//判断里面的对象有几个
	//如果有两个
    if(arguments.length == 2){
        //输入name value
        document.cookie = name + "=" + value;
    }
    //如果有3个
    if(arguments.length == 3){
    	//声明个变量
        var n = 0;
        //遍历opt
        for(var i in opt){
        	//递增
            n++;
        }
        //当有一个的时候
        if( n == 1){
        	//如果是路径的话
            if(opt.path){
            	//输入path
                document.cookie = name + "=" + value + ";path=" + opt.path;
            }else{
            //否则输入时期
                var d = new Date();
                d.setDate(d.getDate() + opt.expires);
                console.log(d)
                document.cookie = name + "=" + value + ";expires=" + d;

            }
         //4个都有的时候
        }else{
            var d = new Date();
                d.setDate(d.getDate() + opt.expires);
                document.cookie = name + "=" + value + ";path=" + opt.path +";expires=" + d;
        }
    }
}
//调用cookie
function getCookie(name){
    var cookie = document.cookie;
    var cookie2 = cookie.split("; ");
    //console.log(cookie2)
    for(var i = 0 ; i < cookie2.length; i++){
        if(name == cookie2[i].split("=")[0]){
            return cookie2[i].split("=")[1];
        }
    }
    return "";
}

