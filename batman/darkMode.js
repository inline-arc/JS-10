document.addEventListener('DOMContentLoaded', () => {
    const colorChange = document.getElementById('mode');
    colorChange.addEventListener('click', () => {
        toggleColor();
    });
});

function toggleColor() {
    let html = document.documentElement;
    html.classList.toggle('dark-mode');
}
