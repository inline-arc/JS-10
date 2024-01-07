window.addEventListener('keydown', playsound);

function playsound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
}

window.addEventListener('click', function () {
    keys.forEach(key => key.classList.remove('playing'));
});
