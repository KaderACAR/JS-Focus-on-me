AOS.init();

const clickTop = document.getElementById("click-top");
clickTop.addEventListener("click", function (){
    const count = document.getElementById("count");
    let countNumber = Number (count.innerHTML);
   
    countNumber++;
    count.innerHTML = countNumber;
    if(countNumber %5 == 0){
        var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
        alert("0 distractions! 😲 Look at me, not the phone! 📱👀")
    }
 })

 const birdAudioPlay = document.getElementById("birdAudioPlay");
 const doveIcon = document.getElementById("doveIcon");
 doveIcon.addEventListener("click", function () {

    if(birdAudioPlay.paused){
        birdAudioPlay.play();
        doveIcon.className = "fa-solid fa-music";
        AOS.refresh();
    } else {
        birdAudioPlay.pause();
        doveIcon.className = "fa-solid fa-dove";
        AOS.refresh();
    }
 })
 const pianoAudioPlay = document.getElementById("pianoAudioPlay");
 const starIcon = document.getElementById("starIcon");
 starIcon.addEventListener("click", function () {
    
    if(pianoAudioPlay.paused){
        pianoAudioPlay.play();
        starIcon.className = "fa-solid fa-music";
        AOS.refresh();
    } else {
        pianoAudioPlay.pause();
        starIcon.className = "fa-solid fa-star";
        AOS.refresh();
    }
 })
 const rainAudioPlay = document.getElementById("rainAudioPlay");
 const cloudIcon = document.getElementById("cloudIcon");
 cloudIcon.addEventListener("click", function () {
   
    if(rainAudioPlay.paused){
        rainAudioPlay.play();
        cloudIcon.className = "fa-solid fa-music";
        AOS.refresh();
    } else {
        rainAudioPlay.pause();
        cloudIcon.className = "fa-solid fa-cloud";
        AOS.refresh();
    }
 })

 const volumeInput = document.getElementById("volume-input");
 volumeInput.addEventListener("input", function () {
    birdAudioPlay.volume = volumeInput.value / 100;
    pianoAudioPlay.volume = volumeInput.value / 100;
    rainAudioPlay.volume = volumeInput.value / 100;
 })