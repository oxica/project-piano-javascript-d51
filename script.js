const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
    const audioNote = document.getElementById(key.dataset.note);
    audioNote.currentTime = 0;
    key.classList.add("active");
    audioNote.addEventListener("ended", () => {
      key.classList.remove("active");
    });
    audioNote.play();
}