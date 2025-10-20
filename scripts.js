const video = document.querySelector('#myVideo');

  window.addEventListener('scroll', () => {
    // how far you've scrolled
    const scrollY = window.scrollY;
    const fadeStart = 0;       // start fading immediately
    const fadeEnd = 400;       // adjust this value to control fade length

    // calculate opacity
    let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(opacity, 0); // don't go below 0

    video.style.opacity = opacity;
  });

const audio = document.getElementById('audio');
const btn = document.getElementById('playBtn');

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = '⏸';  // change icon to pause
    } else {
      audio.pause();
      btn.textContent = '▶';  // change icon to play
    }
  });