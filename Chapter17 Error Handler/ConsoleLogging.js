//不存在一种跨浏览器向JS控制台写入消息的机制
//但是可以做一个统一接口
const log = (message) =>{
    if(typeof console =="object"){
        console.log(message)
    }else if(typeof opera =="object"){
        opera.postError(message)
    }else if(typeof java == "object" && typeof java.lang == "object"){
        java.lang.System.out.pringln(message)
    }
}