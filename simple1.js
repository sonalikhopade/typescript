var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("hello");
    };
    return Greeting;
}());
var abj = new Greeting();
abj.greet();
