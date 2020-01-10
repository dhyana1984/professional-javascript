// const value = someObjectNeedtoCheck
const value = [1,2,3] //Array
//检测原生对象，自定义对象永远返回"[object Object]"
console.log(Object.prototype.toString.call(value)) //"[object Array]"