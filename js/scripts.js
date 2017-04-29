//Scripts

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing'); // Can't get remove transform to work with this function?
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(function(){ // I know this isn't recommended but it's the only way I was able to get it to remove the class 
        key.classList.remove('playing'); }, 100   
      );
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);