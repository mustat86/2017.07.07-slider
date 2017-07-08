var sliders = document.querySelectorAll("li");
var btn = document.querySelectorAll("a");


btn[0].addEventListener("click", function() {
        for (var i=0; i<sliders.length; i++) {
            sliders[i].classList.toggle("active");
            }
        });

btn[1].addEventListener("click", function() {
        for (var i=0; i<sliders.length; i++) {
            sliders[i].classList.toggle("active");
            }
        });
