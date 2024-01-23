let backward = document.getElementById("backward")
let forward = document.getElementById("forward")
let playpause = document.getElementById("playpause")
let audio = document.getElementById("aud")
let songname = document.getElementById("name")
let img = document.getElementById("imgg")
let searchbtn = document.getElementById("search")
let audiodata = ["Animal teaser.mp3", "Arjan vailey.mp3", "Badrang Satranga.mp3", "Dil diyan gallan.mp3", "Humdard Ek villan.mp3", "Ranjhana.mp3", "Mai Bairagan.mp3"]
let imgdata = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpg", "img6.jpeg", "img7.jpeg"]
let ar = document.getElementsByClassName("ar")
let count = 0;
// console.log(audio.)
playpause.addEventListener("click", () => {
     if (!audio.paused) {
          audio.pause();
          playpause.classList.add("fa-play")
          playpause.classList.remove("fa-pause")
     } else {
          audio.play()
          playpause.classList.add("fa-pause")
          playpause.classList.remove("fa-play")
     }
})

songname.innerText = audiodata[count]
forward.addEventListener("click", () => {
     if (count == audiodata.length - 1) {
          count = 0;
     } else {
          count++;
     }
     audio.src = audiodata[count];
     img.setAttribute("src", imgdata[count])
     songname.innerText = audiodata[count]
     audio.play();
     playpause.classList.add("fa-pause")
     playpause.classList.remove("fa-play")
})

backward.addEventListener("click", () => {
     if (count == 0) {
          count = audiodata.length - 1;
     } else {
          count--;
     }
     audio.src = audiodata[count];
     img.setAttribute("src", imgdata[count])
     songname.innerText = audiodata[count]
     audio.play();
     playpause.classList.add("fa-play")
     playpause.classList.remove("fa-pause")
})

function songplay(l) {
     audio.src = l.innerText
     songname.innerHTML = `${l.innerText} `
     for (let i = 0; i < imgdata.length; i++) {
          if (l.innerText == audiodata[i]) {
               img.setAttribute("src", imgdata[i])
               break;
          }
     }
     audio.play()
     playpause.classList.add("fa-pause")
     playpause.classList.remove("fa-play")
}

searchbtn.addEventListener("click", () => {
     searchbtn.innerHTML = "<button   class=bg-info border-5 p-1 m-3  style= width: 100px; border-radius:50px>submit</button><input class=w-75 p-5  text-center  placeholder=Search song>"
})