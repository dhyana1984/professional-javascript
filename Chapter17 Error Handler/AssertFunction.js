function assert(condition, message) {
    if (!condition) {
        throw new Error(message)
    }
}

//使用
function divide(num1, num2){
    assert(typeof num1 =="number" && typeof num2 == "number", "divide(): Both arguments must be numbers")
    return num1/num2
}