// main.js

// update the audio and image source based on chosen radio button
airHorn = document.getElementById("radio-air-horn");
carHorn = document.getElementById("radio-car-horn");
partyHorn = document.getElementById("radio-party-horn");
hornSound = document.getElementById("horn-sound");
hornImage = document.getElementById("sound-image");

airHorn.oninput = function() {
    hornSound.src = "./assets/media/audio/air-horn.mp3";
    hornImage.src = "./assets/media/images/air-horn.svg";
}
carHorn.oninput = function() {
    hornSound.src = "./assets/media/audio/car-horn.mp3";
    hornImage.src = "./assets/media/images/car-horn.svg";
}
partyHorn.oninput = function() {
    hornSound.src = "./assets/media/audio/party-horn.mp3";
    hornImage.src = "./assets/media/images/party-horn.svg";
}