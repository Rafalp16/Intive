clickCount = document.getElementById("clickCount");
var counter = setInterval(reset, 30000);

function reset() {
    counter = 0;
    document.getElementById('clickCount').innerHTML = counter;
}