//第一种lazyLoad，在函数被调用时再处理函数，在函数第一次调用的过程中，
//该函数被覆盖为另外一个按合适方式执行的函数，这样对原函数的调用就不用再经过分支了
function lazyLoad() {
    if(condition1){
        lazyLoad = () =>{
               xxxxx 
        }
    }else{
        lazyLoad = () =>{
            xxxxx
        }
    }
    return lazyLoad()
}

//第二种lazy load是在声明函数时就指定适当的函数
//第一次调用函数时就不会损失性能了
const lazyLoad = (function () {
    if(condition1){
        return function () {
            xxxxx
        }
    }else {
        return function () {
            xxxxx
        }
    }
})()