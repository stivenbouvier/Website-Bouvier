let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#volume_show");
let track_image = document.querySelector("#track_image");
let auto_play = document.querySelector("#auto");
let presents = document.querySelector("#presents");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create a audio Element
let track = document.createElement("audio");

//all song list

let All_song = [
  {
    name: "She Needs Flowers",
    path: "Nonstop/Track1.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: "Stiven Bouvier",
  },
  {
    name: "feel The Night",
    path: "Nonstop/Track2.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: " Stiven Bouvier",
  },
  {
    name: "Nonstop",
    path: "Nonstop/Track3.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: " Stiven Bouvier",
  },
  {
    name: "Everybody Are Summer",
    path: "Nonstop/Track4.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: "Stiven Bouvier",
  },
  {
    name: "She Wasnt",
    path: "Nonstop/Track5.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: "Stiven Bouvier",
  },
  {
    name: "Lovesick",
    path: "Nonstop/Track6.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: "Stiven Bouvier",
  },
  {
    name: "lovehurts",
    path: "Nonstop/Track7.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: "Stiven Bouvier",
  },
  {
    name: "Pandemic Love (Himno)",
    path: "Nonstop/Track8.mp3",
    img: "imgnonstop/Sheneedsflowers.jpg",
    singer: "Stiven Bouvier",
  },
];

//All Function

//Funtion load the track

function load_track(index_no) {
  clearInterval(timer);
  reset_slider();
  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  total.innerHTML = All_song.length;
  presents.innerHTML = index_no + 1;
  timer = setInterval(range_slider, 1000);
}

load_track(index_no);

//mute sound

function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}

//reset song slider
function reset_slider() {
  slider.value = 0;
}

//checking the song is playing or not

function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

//play song
function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<span class="fa fa-pause"></span>';
}

//Pause song

function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<span class="fa fa-play"></span>';
}

//Next song

function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

//previous song

function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  }
}

//Change Volume

function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

//change slider duration
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

//autoplay function

function autoplay_switch(){
    if (autoplay == 1){
        autoplay =0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    }else{
        autoplay = 1;
        auto_play.style.background = "#1DB954";
    }
}

function range_slider() {
  let position = 0;

  //update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  // fuction will run when the song is over

  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-main_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
