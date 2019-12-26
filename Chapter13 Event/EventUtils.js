//跨浏览器事件处理程序

var EventUtils = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler) //for IE
        } else {
            element["on" + type] = handler    //DOM0添加事件的方法
        }
    },

    getEvent: function (event) {
        return event ? event : window.event //IE 在使用DOM0级事件添加方式时，event是window的一个属性，即window.event
    },

    getTarget: function (event) {
        return event.Target || event.srcElement //target 在IE中就是srcElement
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            event.returnValue = false   //For IE
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler)
        } else {
            element["on" + type] = null
        }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation()     //同时阻止事件冒泡和事件捕获
        } else {
            event.cancelBubble = true   //IE 阻止冒泡，因为IE没有捕获，所以只能阻止冒泡
        }
    },

    //获取相关元素,mouveout和moveover事件用
    getRelatedTarget: (event) => {
        if (event.relatedTarget) {
            return event.relatedTarget
        } else if (event.toElement) {
            return event.toElement
        } else if (event.fromElement) {
            return event.fromElement
        } else {
            return null
        }
    },

    //获取mousedown和mouseup事件的event的button属性
    getButton: (event) => {
        //如果没有MouseEvents，就是IE
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button
        } else {
            switch (event.button) {
                case o:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0
                case 2:
                case 6:
                    return 2
                case 4:
                    return 1
            }
        }
    },

    //获取鼠标滚轮滚动数值方法
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40; //支持firefox，因为firefox滚动单位是3
        }
    },

    getCharCode: (event) =>{
        if(typeof event.charCode == "number"){
            return event.charCode
        }else{
            return event.keyCode
        }
    }


}