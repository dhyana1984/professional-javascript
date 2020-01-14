function bind(fn, context) {
    //在bind中创建了闭包，
    return function () {
        //闭包使用apply调用传入的函数，并设置传入的context作为环境
        //这里的arguments不是bind的，而是fn的
        return fn.apply(context, arguments)
    }
}

var handler = {
    message: "event handle",
    handleClick: function (event) {
        console.log(this.message)
    }
}


var btn = document.getElementById("btn")
//此时handleClick获得了event对象，event对象是通过bind函数内fn.apply(context, arguments)的arguments获得的
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler))

//ES5加入了原生bind方法
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler))