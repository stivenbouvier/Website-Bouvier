let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#volume_show');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#track_image');
let present = document.querySelector('#track_image');
let total = document.querySelector('#track_image');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;


//create a audio Element 
let track = document.createElement('audio');


//all song list

let All_song =[
{
    name:"She Needs Flowers",
    path:"Nonstop/Track1.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    singer:"Bouvier"

},
{
    name:"feel It Tonight",
    path:"Nonstop/Track2.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    singer:"Bouvier"

},
{
    name:"Nonstop",
    path:"Nonstop/Track3.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    singer:"Bouvier"

},
{
    name:"Everybody Are Summer",
    path:"Nonstop/Track4.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    singer:"Bouvier"

},
{
    name:"She Wasnt",
    path:"Nonstop/Track5.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    singer:"Bouvier"

},
{
    name:"Lovesick",
    path:"Nonstop/Track6.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    singer:"Bouvier"

},
{
    name:"lovehurts",
    path:"Nonstop/Track7.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    singer:"Bouvier"

},
{
    name:"Pandemic Love (Himno)",
    path:"Nonstop/Track7.mp3",
    img: "imgnonstop/nonstopimg.jpeg",
    artist:"Bouvier"

},
];

//All Function

//Funtion load the track

function load_track(index_no){
    track.src = All_song[index_no].path;
    title.innerHTML = All_song [index_no].name;
    track_image.src = All_song [index_no].img;
    artist.innerHTML = All_song [index_no].singer;
    track.load();
}

load_track (index_no);

//checking the song is playing or not

function justplay(){
    if (playing_song==false){
        playsong();
    }else {
        pausesong();
    }
}

//play song 
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

//Pause song

function pausesong(){
    track.pause();
    playing_song =false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

//Next song

function next_song(){
    if (index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
    }
}