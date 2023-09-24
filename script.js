var buton = document.getElementsByClassName('button');
var display = document.getElementById('display');
for (var i = 0; i < buton.length; i++) {
    buton[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == '+') {
            display.innerText += '+';
        }
        else if (value == '-') {
            display.innerText += '-';
        }
        else if (value == '*') {
            display.innerText += '*';
        }
        else if (value == '/') {
            display.innerText += '/';
        }
        else if (value == "@") {
            display.innerText = "";
        }
        else if (value == '$') {
            var str = display.innerText;
            str = str.slice(0, -1);
            display.innerText = str;
        }
        else if (value == '%') {
            display.innerText += '%';
        }
        else if (value == '=') {
            var ans = eval(display.innerText);
            display.innerText = ans;
        }
        else {
            display.innerText += value;
        }
    })

}

document.addEventListener('keypress', function (event) {
    if (event.keyCode >= 48 && event.keyCode <= 57)
        display.innerText += event.keyCode - 48;
    else if (event.keyCode == 43) {
        display.innerText += '+';
    }
    else if (event.keyCode == 45) {
        display.innerText += '-';
    }
    else if (event.keyCode == 42) {
        display.innerText += '*';
    }
    else if (event.keyCode == 47) {
        display.innerText += '/';
    }
    else if (event.keyCode == 46) {
        display.innerText += '.';
    }
    else if (event.keyCode == 40) {
        display.innerText += '(';
    }
    else if (event.keyCode == 41) {
        display.innerText += ')';
    }
    else if (event.keyCode == 37) {
        display.innerText += '%';
    }
    else if (event.keyCode == 61) {
        var ans = eval(display.innerText);
        display.innerText = ans;
    }

})
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 8) {
        var str = display.innerText;
        str = str.slice(0, -1);
        display.innerText = str;
        console.log(event.keyCode);
    }
})
