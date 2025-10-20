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

  
  var slider = document.getElementById('slider');
  var active = document.getElementById('active');
  var line1 = document.getElementById('line1');
  var line2 = document.getElementById('line2');
  var line3 = document.getElementById('line3');
  var line4 = document.getElementById('line4');

  line1.onclick = function(){
    slider.style.transform = 'translateX(0%)';
    active.style.top = '0px';
  }
  line2.onclick = function(){
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '80px';
  }
  line3.onclick = function(){
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '180px'
  }
  line4.onclick = function(){
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '240px'
  }
  
  
  
