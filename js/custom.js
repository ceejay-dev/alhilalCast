  // Seleciona o elemento do vídeo
  const video = document.querySelector('iframe');

  // Botão de controle de mudo
  const toggleMuteButton = document.getElementById('toggleMute');
  toggleMuteButton.addEventListener('click', function() {
      if (video.contentWindow.document.querySelector('video').volume === 0) {
          video.contentWindow.document.querySelector('video').volume = 1;
          toggleMuteButton.innerText = 'Mudo';
      } else {
          video.contentWindow.document.querySelector('video').volume = 0;
          toggleMuteButton.innerText = 'Som';
      }
  });

    // Botão de controle de legenda
    const toggleSubtitlesButton = document.getElementById('toggleSubtitles');
    toggleSubtitlesButton.addEventListener('click', function() {
        // Aqui você pode adicionar a lógica para mostrar ou ocultar as legendas
        // Por exemplo, você pode adicionar ou remover a classe CSS para exibir as legendas
        // Ou você pode adicionar lógica para carregar legendas externas e exibi-las no vídeo
        // Por favor, substitua este comentário com a lógica necessária para controlar as legendas
        console.log('Botão de legenda clicado');
    });