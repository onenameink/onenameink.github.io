// Example code for creating star effect on mouse move
document.addEventListener('mousemove', function(e) {
    var body = document.querySelector('body');
    var star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;
    var size = Math.random() * 4 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    body.appendChild(star);
    setTimeout(function() {
        star.remove();
    }, 1000);
});

// CSS for stars
var style = document.createElement('style');
style.innerHTML = `
    .star {
        position: absolute;
        background: yellow;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 6px yellow, 0 0 10px yellow;
        animation: fadeOut 1s forwards;
    }
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.5);
        }
    }
`;
document.head.appendChild(style);
