console.log("Welcome to Spotify");

//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Apna Bnan Le - Arijit Singh", filePath: "song/1.mp3", coverPath: "Cover/1.jpg"},
    {songName:"Cinderellas Dead - Emeline-(DJMaza)", filePath: "song/2.mp3", coverPath: "Cover/2.jpg"},
    {songName:"Ghode Pe Sawar - Sireesha Bhagavatula", filePath: "song/3.mp3", coverPath: "Cover/3.jfif"},
    {songName:"Ghungroo - Arijit Singh,Shilpa Rao", filePath: "song/4.mp3", coverPath: "Cover/4.jfif"},
    {songName:"Sham - Amit Trivedi|Nikhil D'Souza", filePath: "song/5.mp3", coverPath: "Cover/5.jpg"},
    {songName:"Mann Meri Jaan - King", filePath: "song/6.mp3", coverPath: "Cover/6.jfif"},
    {songName:"Old Song Mashup - Atif Aslam", filePath: "song/7.mp3", coverPath: "Cover/7.jfif"},
    {songName:"Bhula Dena - Salam-e-Ishq", filePath: "song/8.mp3", coverPath: "Cover/8.jpg"},
    {songName:"Firework - kety Perry", filePath: "song/9.mp3", coverPath: "Cover/9.jpg"},
    {songName:"Who Says - Selena Gomez", filePath: "song/10.mp3", coverPath: "Cover/10.jfif"},
    
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
 })

//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =  myProgressBar.value * audioElement.duration/100;  
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
        audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
