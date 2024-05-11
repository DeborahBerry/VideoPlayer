const video = document.querySelector("video");
const playBtn = document.querySelector(".btn-play");
const stopBtn = document.querySelector(".btn-stop");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const timeStamp = document.querySelector(".time-stamp");

//play video function definition
function playVideo(){

    if(video.paused){

        video.play();

        playBtn.innerHTML=`<i class='fa fa-pause'></i>`;
    }else{
    
    video.pause();

    playBtn.innerHTML=`<i class='fa fa-play'></i>`;
    }
}
// stopping the video

function stopVideo() {
    video.currentTime = 0;
    video.pause();
    playBtn.innerHTML=`<i class='fa fa-play'></i>`;
}
//progress bar
function updateProgressBar(){
    let duration= video.duration;
    let currentTime = video.currentTime;

    let percentage = (currentTime / duration)*100;
    progress.style.width=`${percentage}%`;

    //time update to hours
    let hour = Math.floor(video.currentTime / 3600);
//time update to mins
let min = Math.floor(video.currentTime / 60);
//time update to sec
let sec = Math.floor(video.currentTime % 60);

if (min<10){
    min=`0${min}`
}

if(sec<10){
    sec=`0${sec}`
}
timeStamp.innerHTML=`${hour}:${min}:${sec}`;
}

//Defining Skip function
function skip(e) {
    //with of the element
    let width = this.clientWidth;
    //clicking to know where we hv clicked
    let clickCoordinate = e.offsetX;

    video.currentTime = (clickCoordinate / width) * video.duration;

}


//Event Listeners
//Event listener code for playing the video by clicking on the video itself
video.addEventListener("click", playVideo);
//playing the video by clicking on the playBtn
playBtn.addEventListener("click", playVideo);
// stopping the video by clicking on stop button
stopBtn.addEventListener("click", stopVideo);
//progress bar update
video.addEventListener("timeupdate", updateProgressBar);
// skipping the video on progress bar
progressContainer.addEventListener("click",skip);