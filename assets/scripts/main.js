// main.js

// TODO
// Radio buttons
airHorn = document.getElementById("radio-air-horn");
carHorn = document.getElementById("radio-car-horn");
partyHorn = document.getElementById("radio-party-horn");

// Horn sound/image
hornSound = document.getElementById("horn-sound");
hornImage = document.getElementById("sound-image");

// Volume inputs
volumeSlider = document.getElementById("volume-slider");
volumeNumber = document.getElementById("volume-number");

// Update audio and image based on selection
airHorn.onclick = function() {
    hornSound.src = "./assets/media/audio/air-horn.mp3";
    hornImage.src = "./assets/media/images/air-horn.svg";
    hornImage.alt = "Air Horn";
}
carHorn.onclick = function() {
    hornSound.src = "./assets/media/audio/car-horn.mp3";
    hornImage.src = "./assets/media/images/car.svg";
    hornImage.alt = "Car Horn";
}
partyHorn.onclick = function() {
    hornSound.src = "./assets/media/audio/party-horn.mp3";
    hornImage.src = "./assets/media/images/party-horn.svg";
    hornImage.alt = "Party Horn";
}

// Sync volume slider and number input
volumeSlider.oninput = function() {
    volumeNumber.value = volumeSlider.value;
}
volumeNumber.oninput = function() {
    volumeSlider.value = volumeNumber.value;
}