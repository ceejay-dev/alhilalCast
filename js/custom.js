const video = document.querySelector('#meuvideo');
  // Botão de controle de mudo
  const toggleMuteButton = document.getElementById('toggleMute');
  toggleMuteButton.addEventListener('click', function() {
      if (video.muted) {
          video.muted = false;
          toggleMuteButton.innerText = 'Mudo';
      } else {
          video.muted = true;
          toggleMuteButton.innerText = 'Som';
      }

 
  });

  /*document.addEventListener('DOMContentLoaded', function() {
    const videoFrame = document.getElementById('meuvideo');
    const togglePauseButton = document.getElementById('togglePause');

    togglePauseButton.addEventListener('click', function() {
        const video = videoFrame.contentWindow.document.querySelector('iframe');
        if (video.paused) {
            video.play();
            togglePauseButton.innerText = 'Pause';
        } else {
            video.pause();
            togglePauseButton.innerText = 'Play';
        }
    });
});*/

video = document.getElementById('meuvideo');
const togglePauseButton = document.getElementById('togglePause');


function pausar(){
    if (video.paused) {
        video.play();
        togglePauseButton.innerText = 'Pause';
    } else {
        video.pause();
        togglePauseButton.innerText = 'Play';
    }
}

  // Script customizado para controlar ações dos botões
document.addEventListener('DOMContentLoaded', function() {
      // Botão de controle de legenda
    const toggleSubtitlesButton = document.getElementById('toggleSubtitles');
    toggleSubtitlesButton.addEventListener('click', function() {
        console.log('Botão de legenda clicado');
        // Abre o modal de importação de legendas quando o botão é clicado
        var myModal = new bootstrap.Modal(document.getElementById('legendModal'));
        myModal.show();
    });
  });