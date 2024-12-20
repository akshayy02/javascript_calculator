console.log("Working...")
var char = document.querySelector('.player');
var enemy = document.querySelector('.dragon');
var map = document.querySelector('.gamebody');
var g = document.querySelector('.gameover');
var st = document.querySelector('.start');
var t = 0;
// Start
function keyevent(e) {
    if (e.keyCode == 13) {
        g.style.visibility = 'hidden';
        st.style.visibility = 'hidden';
        enemy.classList.add('running');
        enemy.style.left = 120 + "vw";
        t = 1;
    }
    console.log("Key Code : ", e.keyCode);
    if ((e.keyCode == 38 || e.keyCode == 32) && t == 1) {
        char.classList.add('jumping');
        setTimeout(function () {
            char.classList.remove('jumping');
        }, 1201);
    }
    if (e.keyCode == 39 && t == 1) {
        var rxx = parseInt(window.getComputedStyle(char, null).getPropertyValue('left'));
        if (rxx < 800) {
            rxx = rxx + 20;
            char.style.left = rxx + "px";
        }

    }
    if (e.keyCode == 37 && t == 1) {
        var lxx = parseInt(window.getComputedStyle(char, null).getPropertyValue('left'));
        if (lxx > 50) {
            lxx = lxx - 20;
            char.style.left = lxx + "px";
        }
    }
}
document.addEventListener('keydown', keyevent);
setInterval(() => {
    var dx = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
    var dy = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));
    var px = parseInt(window.getComputedStyle(char, null).getPropertyValue('left'));
    var py = parseInt(window.getComputedStyle(char, null).getPropertyValue('bottom'));
    var diffx = Math.abs(dx - px);
    var diffy = Math.abs(dy - py);
    if (diffx <= 70 && diffy <= 70) {
        g.style.visibility = 'visible';
        enemy.classList.remove('running');
        enemy.style.left = px + 50 + "px";
        t = 0;
    }
}, 50);
// Charcter change
var c1 = document.querySelector('#char1');
var c2 = document.querySelector('#char2');
var c3 = document.querySelector('#char3');
var c4 = document.querySelector('#char4');
var c5 = document.querySelector('#char5');
var c6 = document.querySelector('#char6');

c1.addEventListener('click', function () {
    char.style.backgroundImage = "url('Images/char1.png')";
});
c2.addEventListener('click', function () {
    char.style.backgroundImage = "url('Images/char2.png')";
});
c3.addEventListener('click', function () {
    char.style.backgroundImage = "url('Images/char3.png')";
});
c4.addEventListener('click', function () {
    char.style.backgroundImage = "url('Images/char4.png')";
});
c5.addEventListener('click', function () {
    char.style.backgroundImage = "url('Images/char5.png')";
});
c6.addEventListener('click', function () {
    char.style.backgroundImage = "url('Images/char6.png')";
});
// Dragon change
var d1 = document.querySelector('#dragon1');
var d2 = document.querySelector('#dragon2');
var d3 = document.querySelector('#dragon3');
var d4 = document.querySelector('#dragon4');
var d5 = document.querySelector('#dragon5');


d1.addEventListener('click', function () {
    enemy.style.backgroundImage = "url('Images/dragon1.png')";
});
d2.addEventListener('click', function () {
    enemy.style.backgroundImage = "url('Images/dragon2.png')";
});
d3.addEventListener('click', function () {
    enemy.style.backgroundImage = "url('Images/dragon3.png')";
});
d4.addEventListener('click', function () {
    enemy.style.backgroundImage = "url('Images/dragon4.png')";
});
d5.addEventListener('click', function () {
    enemy.style.backgroundImage = "url('Images/dragon5.png')";
});

// Map Change
var m1 = document.querySelector('#map1');
var m2 = document.querySelector('#map2');
var m3 = document.querySelector('#map3');
var m4 = document.querySelector('#map4');
var m5 = document.querySelector('#map5');
var m6 = document.querySelector('#map6');

m1.addEventListener('click', function () {
    map.style.backgroundImage = "url('Images/b_normal.png')";
});
m2.addEventListener('click', function () {
    map.style.backgroundImage = "url('Images/b_dragonkingdom.jpg')";
});
m3.addEventListener('click', function () {
    map.style.backgroundImage = "url('Images/b_darkjungle.jpg')";
});
m4.addEventListener('click', function () {
    map.style.backgroundImage = "url('Images/b_waterfall.png')";
});
m5.addEventListener('click', function () {
    map.style.backgroundImage = "url('Images/b_snow.jpg')";
});
m6.addEventListener('click', function () {
    map.style.backgroundImage = "url('Images/b_desert.avif')";
});

