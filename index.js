const slides = document.querySelector('.slider').children;
console.log(slides);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

next.addEventListener('click', function () {
  nextSlide();
  resetTimer();
});

prev.addEventListener('click', function () {
  prevSlide();
  resetTimer();
});

function nextSlide() {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function prevSlide() {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }

  //CALL CHANGE SLIDE FUNCTION
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active'); // STEP TWO
  }
  slides[index].classList.add('active'); // STEP ONE
}

//Timer
function resetTimer() {
  //When click the controls stop the timer
  clearInterval(timer);

  //Then start the timer again
  timer = setInterval(autoPlay, 4000)
}

function autoPlay() {
  nextSlide();
}

let timer = setInterval(autoPlay, 4000);
