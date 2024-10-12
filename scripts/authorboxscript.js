var color_index = 0;
const colors = ["#ff0000", "#ffa500", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#800080"];
var author_box = document.getElementById('author');

function changecolor() {
    author_box.style.color = colors[color_index];
    color_index = (color_index + 1) % colors.length;
}
changecolor();
setInterval(changecolor, 800);
const s_x = 1.2, s_y = 1.2;
var speedX = s_x;
var speedY = s_y;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var start_x = Math.random() * screenWidth;
var start_y = Math.random() * screenHeight;
author_box.style.left = start_x + 'px';
author_box.style.top = start_y + 'px';

function moveElement() {
    var rect = author_box.getBoundingClientRect();
    if (rect.left <= 0) {
        speedX = s_x;
    }
    if (rect.right >= screenWidth) {
        speedX = -s_x;
    }
    if (rect.top <= 0) {
        speedY = s_y;
    }
    if (rect.bottom >= screenHeight) {
        speedY = -s_y;
    }
    author_box.style.left = rect.left + speedX + 'px';
    author_box.style.top = rect.top + speedY + 'px';
    requestAnimationFrame(moveElement);
}
window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
moveElement();