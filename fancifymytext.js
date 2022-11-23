function changeAlert() {
    alert("Change Complete!");
}

function bigger() {
    changeAlert();
    var text = document.getElementById("text");
    text.style.fontSize="24pt";
}

function fancy() {
    changeAlert();
    var text = document.getElementById("text");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline blink";
}

function boring() {
    changeAlert();
    var text = document.getElementById("text");
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
}

function moo() {
    changeAlert();
    var text = document.getElementById("text");
    var parts = text.value.split('.');
    text.value = parts.join("-Moo.");
}