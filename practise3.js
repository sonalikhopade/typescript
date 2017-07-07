"use strict";
exports.__esModule = true;
var Triangle = (function () {
    function Triangle() {
    }
    Triangle.prototype.simple = function () {
        var a = "";
        //var i,j;
        for (var i = 1; i <= 6; i++) {
            for (var j = 1; j <= i; j++) {
                a = a + "*";
            }
            console.log(a);
        }
    };
    return Triangle;
}());
var str = new Triangle();
str.simple();
