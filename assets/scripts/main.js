// main.js

// TODO
// Radio buttons
airHorn = document.getElementById("radio-air-horn");
carHorn = document.getElementById("radio-car-horn");
partyHorn = document.getElementById("radio-party-horn");

// Horn sound/images
hornSound = document.getElementById("horn-sound");
hornImage = document.getElementById("sound-image");

// Volume inputs
volumeSlider = document.getElementById("volume-slider");
volumeNumber = document.getElementById("volume-number");

// Volume image
volumeImage = document.getElementById("volume-image");

// Honk button
honkButton = document.getElementById("honk-btn");

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

// Sync volume slider and number input, update volume image
volumeSlider.oninput = function() {
    var volume = volumeSlider.value;
    volumeNumber.value = volume;

    if (volume == 0) {
        honkButton.disabled = true;
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }
    else {
        honkButton.disabled = false;

        if (volume >= 67) {
            volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        }
        else if (volume >= 34) {
            volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        }
        else {
            volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        }
    }
    hornSound.volume = volume;
}
volumeNumber.oninput = function() {
    var volume = volumeNumber.value;
    volumeSlider.value = volume;
    if (volume == 0) {
        honkButton.disabled = true;
    }
    else {
        honkButton.disabled = false;

        if (volume >= 67) {
            volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        }
        else if (volume >= 34) {
            volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        }
        else {
            volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        }
    }
    hornSound.volume = volume;
}

honkButton.onsubmit = function() {
    hornSound.play();
}