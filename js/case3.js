const boxes = document.getElementsByClassName("box");
const startBtn = document.getElementById("btnStart");
const stopBtn = document.getElementById("btnStop");
let isRunning = false;
let currentIndex = 0;
let direction = 1;
let interval;
const audio = new Audio("/assets/sounds/kitt_sound.mp3");
const colors = ["#ff0000", "#ff1a1a", "#ff4d4d", "#ff8080", "#ffffff"];

const resetBoxes = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "white";
  }
};

const animate = () => {
  resetBoxes();

  if (direction === 1) {
    for (let i = 0; i < colors.length; i++) {
      const boxIndex = currentIndex - i;
      if (boxIndex >= 0) {
        boxes[boxIndex].style.backgroundColor = colors[i];
      }
    }

    currentIndex++;
    if (currentIndex >= boxes.length) {
      direction = -1;
      currentIndex = boxes.length - 1;
    }
  } else {
    for (let i = 0; i < colors.length; i++) {
      const boxIndex = currentIndex + i;
      if (boxIndex < boxes.length) {
        boxes[boxIndex].style.backgroundColor = colors[i];
      }
    }

    currentIndex--;
    if (currentIndex < 0) {
      direction = 1;
      currentIndex = 0;
    }
  }
};

startBtn.onclick = () => {
  if (!isRunning) {
    isRunning = true;

    audio.play();
    audio.loop = true;

    interval = setInterval(animate, 150);

    startBtn.style.backgroundColor = "#ff4d4d";
    stopBtn.style.backgroundColor = "white";
  }
};

stopBtn.onclick = () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(interval);
    audio.pause();
    audio.currentTime = 0;

    currentIndex = 0;
    direction = 1;
    stopBtn.style.backgroundColor = "#ff4d4d";
    startBtn.style.backgroundColor = "white";
  }
};
