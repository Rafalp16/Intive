var clickCount = document.getElementById("clickCount");
var counter = 0;
var myBox = document.getElementById("myBox");
myBox.addEventListener('click', function () {
    clickCount.innerHTML = ++counter;
});
