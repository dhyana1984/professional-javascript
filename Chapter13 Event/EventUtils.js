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
    }
}