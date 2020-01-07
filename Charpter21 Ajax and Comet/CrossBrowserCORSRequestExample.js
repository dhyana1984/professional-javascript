//跨域Ajax请求
function createCORSSRequest(method, url) {
    var xhr = new XMLHttpRequest()
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true)
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest()
        xhr.open(method, url)
    }else{
        xhr = null
    }
    return xhr
}

//应用
var request = createCORSSRequest("get", "http://www.baidu.com")
if(request){
    request.onload = function () {
        //对request.responseText进行处理
    }
    request.onerror = function () {
        //处理error
    }
    request.send()
}