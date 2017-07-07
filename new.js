var triangle = (function () {
    function triangle(x) {
        // document.getElementById("*");
        for (var i = 1; i <= 10; i++) {
            for (var j = 0; j <= i; j++) {
                var y = x * i;
                //var span = document.createElement("span");
                //span.innerText = "*";
                // document.body.appendChild(span);
            }
            //span.innerText = "\n";
            //document.body.appendChild(span);
        }
    }
    return triangle;
}());
var p = new triangle(1);
