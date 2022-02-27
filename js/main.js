let display = document.getElementById('display');

function inputValue(val) {
    var currentVal = display.innerHTML && display.innerHTML != '0' ? display.innerHTML : 0;
    display.innerHTML = currentVal + val;
}

function getResult() {
    var currentVal = display.innerHTML ? display.innerHTML : 0;
    display.innerHTML = eval(currentVal);
}

function clearValue() {
    display.innerHTML = 0;
}