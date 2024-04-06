const video = document.querySelector('#meuvideo');
  // evento para ativar ou desativar o som
  const toggleMuteButton = document.getElementById('toggleMute');
  toggleMuteButton.addEventListener('click', function() {
      if (video.muted) {
          video.muted = false;
          //toggleMuteButton.innerText = 'Mudo';
      } else {
          video.muted = true;
          //toggleMuteButton.innerText = 'Som';
      }

 
  });


video = document.getElementById('meuvideo');
const togglePauseButton = document.getElementById('togglePause');

//função para pausar e continuar o vídeo
function pausar(){
    if (video.paused) {
        video.play();
        //togglePauseButton.innerText = 'Pause';
    } else {
        video.pause();
        //togglePauseButton.innerText = 'Play';
    }
}

//função para ativar e desativar a legenda
function activarSubtitles() {
    var video = document.getElementById('meuvideo');
    var track = document.querySelector('track');

    if (track) {
        if (track.track.mode === 'showing') {
            track.track.mode = 'hidden';
        } else {
            track.track.mode = 'showing';
        }
    } else {
        var newTrack = document.createElement('track');
        newTrack.src = 'content/legendas/The Pursuit Of Happyness 2006 BrRip x264.vtt';
        newTrack.kind = 'subtitles';
        newTrack.srclang = 'en';
        newTrack.label = 'English';
        newTrack.default = true;
        video.appendChild(newTrack);
    }
}

const forward = document.querySelector('#toggleAvancar');
const backward = document.querySelector('#toggleRecuar');

//função para avançar o vídeo
forward.addEventListener ("click", function (){
    const video = document.getElementById('meuvideo');
    video.currentTime += 20;
})

//função para recuar o vídeo
backward.addEventListener ("click", function (){
    const video = document.getElementById('meuvideo');
    video.currentTime -= 20;
})

