function arguments(num1,num2){
    var sum = 0;
    for(var i =0; i<arguments.length;i++){
        var elements = arguments[i];
        sum = sum + elements;
    }
    return sum;
}
var result = arguments(5,5,6,4,22,99,33);
console.log(result);
