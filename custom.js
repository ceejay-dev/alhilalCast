// Definição dos elementos 
const video = document.getElementById("video"); 
const videoThumbnail = document.getElementById("video-thumbnail"); 
const playpause = document.getElementById("play-pause"); 
const frwd = document.getElementById("skip-15"); 
const bkwrd = document.getElementById("skipminus-5"); 
const volume = document.getElementById("volume"); 
const mutebtn = document.getElementById("mute"); 
const videoContainer = document.querySelector(".video-container"); 
const controls = document.querySelector(".controls"); 
const progressBar = document.querySelector(".progress-bar"); 
const playbackline = document.querySelector(".playback-line"); 
const currentTimeRef = document.getElementById("current-time"); 
const maxDuration = document.getElementById("max-duration"); 
const fechar_btn_modal = document.getElementById("fechar_modal");
const legenda = document.getElementById("toggleSubtitles");

const timeFormatter = (timeInput) => { 
	let minute = Math.floor(timeInput / 60); 
	minute = minute < 10 ? "0" + minute : minute; 
	let second = Math.floor(timeInput % 60); 
	second = second < 10 ? "0" + second : second; 
	return `${minute}:${second}`; 
}; 

// Play-Pause 
playpause.addEventListener("click", function () { 
	if (video.paused) { 
		videoThumbnail.style.display = "none"; 
		video.play(); 
		playpause.innerHTML = '<i class="fa-solid fa-pause"></i>'; 
	} else { 
		video.pause(); 
		playpause.innerHTML = '<i class="fa-solid fa-play"></i>'; 
	} 
}); 

let isPlaying = false; 

// Alternar entre play/pause 
function togglePlayPause() { 
	if (isPlaying) { 
		video.pause(); 
		playpause.innerHTML = '<i class="fa-solid fa-play"></i>'; 
	} else { 
		videoThumbnail.style.display = ""; 
		video.play(); 
		playpause.innerHTML = '<i class="fa-solid fa-pause"></i>'; 
	} 
	isPlaying = !isPlaying; 
} 

// Events listener for the video

// update the isPlaying flag 
video.addEventListener("play", function () { 
	isPlaying = true; 
}); 

video.addEventListener("pause", function () { 
	isPlaying = false; 
}); 

// alterar ícone pós término da reprodução
video.addEventListener("ended", function () { 
	playpause.innerHTML = '<i class="fa-solid fa-play"></i>'; 
}); 

// avançar 15s e retroceder 5s 
frwd.addEventListener("click", function () { 
	video.currentTime += 15; 
}); 
bkwrd.addEventListener("click", function () { 
	video.currentTime -= 5; 
}); 

// activar e desactivar som
mutebtn.addEventListener("click", function () { 
	if (video.muted) { 
		video.muted = false; 
		mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>'; 
		volume.value = video.volume; 
	} else { 
		video.muted = true; 
		mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; 
		volume.value = 0; 
	} 
}); 

// mute automático
volume.addEventListener("input", function () { 
	video.volume = volume.value; 
	if (video.volume === 0) { 
		mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; 
	} else { 
		mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>'; 
	} 
}); 

// apresentar e esconder os controladores
videoContainer.addEventListener("mouseenter", () => { 
	controls.style.opacity = 1; 
}); 

videoContainer.addEventListener("mouseleave", () => { 
	controls.style.opacity = 0; 
}); 

// progress bar - actualização do tempo
video.addEventListener("timeupdate", () => { 
	const currentTime = video.currentTime; 
	const duration = video.duration; 
	const percentage = (currentTime / duration) * 100; 
	progressBar.style.width = percentage + "%"; 
}); 

// apresentação da imagem de capa
function showThumbnail() { 
	videoThumbnail.style.display = "block"; 
} 

// Reset da progress bar no fim da reprodução 
video.addEventListener("ended", () => { 
	progressBar.style.width = "0%"; 
	showThumbnail(); 
	next.onclick();
}); 

// Tempo de reprodução (actual - limite)
setInterval(() => { 
	currentTimeRef.innerHTML = timeFormatter(video.currentTime); 
	maxDuration.innerText = timeFormatter(video.duration); 
}, 1); 

playbackline.addEventListener("click", (e) => { 
	let timelineWidth = playbackline.clientWidth; 
	video.currentTime = (e.offsetX / timelineWidth) * video.duration; 
}); 

// fechar o modal
fechar_btn_modal.addEventListener("click", function () { 
    playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
    video.pause();
}); 

//função para ativar e desativar a legenda
legenda.addEventListener("click", function (){
    //var video = document.getElementById('video');
    var track = document.querySelector('track');

    if (track) {
        if (track.track.mode === 'showing') {
            track.track.mode = 'hidden';
            legenda.innerHTML = '<i class="fa-regular fa-closed-captioning"></i>';
        } else {
            track.track.mode = 'showing';
            legenda.innerHTML = '<i class="fa-solid fa-closed-captioning"></i>';
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
});


