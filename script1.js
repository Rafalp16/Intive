clickCount = document.getElementById("clickCount");
counter = 0;
function pressed() {
    counter++;
    document.getElementById('clickCount').innerHTML = counter;
}