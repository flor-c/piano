//white and black keys to play with our keyboard
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'f', 'g', 'h', 'j'];

// get all of the keys as elements
const keys = document.querySelectorAll('.key');
//get all the white and black keys
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

//loop to play the correct audio to each key
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown',e => {
    //repeat call ( ignoring repeated actions from a held-down key, ensuring that whatever function this code is part of only runs once for the initial key press)
    if (e.repeat) return;
    const key = e.key;
    //get the index from array
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    //-1 is returned when it can't find anything
    //find the index of the key pressed (WHITE_KEYS, BLACK_KEYS), and corresponding that to the index in the whiteKeys/blackKeys array
    if (whiteKeyIndex !== -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex !== -1) playNote(blackKeys[blackKeyIndex]);
})

function playNote (key) {
    //get the audio from HMTL, based on thedata note property for each key pressed
    const noteAudio = document.getElementById(key.dataset.note)
    //restarting and replying the audio file to make it sound more like a real piano
    noteAudio.currentTime = 0;
    noteAudio.play()
    //add/remove active class to show animation for keys
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}