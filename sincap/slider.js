var active_child = document.querySelector(".active");
var btn = document.querySelectorAll("a");
var slider = document.querySelector(".slider");


btn[0].addEventListener("click", function() {
    var nuts = document.querySelectorAll(".nut");
    for (i=0; i<nuts.length; i++) {
        slider.removeChild(nuts[i]);
    }
    active_child.classList.remove("active");
    if (active_child == active_child.parentNode.children[0]) {
        active_child.parentNode.children[active_child.parentNode.childElementCount-1].classList.add("active");
        active_child = active_child.parentNode.children[active_child.parentNode.childElementCount-1];
    } else {
        active_child.previousElementSibling.classList.add("active");
        active_child = active_child.previousElementSibling;
    }
})

btn[1].addEventListener("click", function() {
    var nuts = document.querySelectorAll(".nut");
    for (i=0; i<nuts.length; i++) {
        slider.removeChild(nuts[i]);
    }
    active_child.classList.remove("active");
    if (active_child == active_child.parentNode.children[active_child.parentNode.childElementCount-1]) {
        active_child.parentNode.children[0].classList.add("active");
        active_child = active_child.parentNode.children[0];
    } else {
        active_child.nextElementSibling.classList.add("active");
        active_child = active_child.nextElementSibling;
    }
})


slider.addEventListener("click", function(event) {
    var nutclick = document.createElement("img");
    nutclick.src = "nut1.png";
    nutclick.classList.add("nut");
    nutclick.style.top = event.offsetY+"px";
    nutclick.style.left = event.offsetX+"px";
    slider.appendChild(nutclick);
    }
)