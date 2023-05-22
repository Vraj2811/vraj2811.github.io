console.log("Welcome to Spotify clone");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let ProgressBar = document.getElementById("ProgressBar");
let NameSong = Array.from(document.getElementsByClassName("NameSong"))
let masterSongName = document.getElementById("masterSongName");

let songs = [
    { songName: "Maan Meri Jaan", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Character Dheela 2.0", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Chedkhaniyaan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Har Har Shambhu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kesariyaan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Munda Sohna Hoon Main", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Pyar Hota Kayi Baar Hain", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Raatan Lambiyan", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Jhoome Jo Pathan", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Shehzaada Title Track", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

NameSong.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseFloat(audioElement.currentTime * 100 / audioElement.duration);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex}.mp3`;
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex-1].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.currentTime = 0;
        audioElement.play();
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

const searchInput = document.getElementById('searchInput');
const songList = document.getElementById('songList').getElementsByTagName('div');

searchInput.addEventListener('keyup', function() {
    const searchQuery = searchInput.value.toLowerCase();
  
    for (let i = 0; i < songList.length; i++) {
      const songTitle = songList[i].textContent.toLowerCase();
  
      if (songTitle.includes(searchQuery)) {
        songList[i].style.opacity = 1;
      } else {
        songList[i].style.opacity = 0;
      }
    }
  });