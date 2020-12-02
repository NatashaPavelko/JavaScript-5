/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */


let prevIndicator = null;

function createSlides(slidesCount) {
  elem = document.createElement('ul');
  elem.setAttribute('class', 'slides');

  for (let i = 0; i < slidesCount; i++) {
  slide = document.createElement('li');
  if (i === 0) {
    slide.setAttribute('class', 'slides__item active');
  } else {
    slide.setAttribute('class', 'slides__item');
  }
  a = document.createElement('a');
  a.setAttribute('href', '#');
  slide.appendChild(a);
  elem.appendChild(slide);
  }

 wrapper.appendChild(elem);
}


function createIndicators(slidesCount) {
 elem = document.createElement('div');
 elem.setAttribute('class', 'indicators');

 for (let i = 0; i < slidesCount; i++) {
   indicators = document.createElement('span');
   if (i === 0) {
     indicators.setAttribute('class', 'indicators__item active');
   } else {
     indicators.setAttribute('class', 'indicators__item'); 
   }
   indicators.setAttribute('data-slide-to', i);
   elem.appendChild(indicators);
 }

 wrapper.appendChild(elem);
}


function createControls() {
  elem = document.createElement('div');
  elem.setAttribute('class', 'controls');

  for (let i = 0; i < 3; i++) {
  controls = document.createElement('div');
  controls.setAttribute('class', 'controls__item');
  icon = document.createElement('i');
  icon.setAttribute('class', 'fas');

  if (i == 0) {
    controls.setAttribute('class', 'controls__item controls__prev');
    icon.setAttribute('class', 'fas fa-chevron-left');
  } 
  if (i == 1) {
    controls.setAttribute('class', 'controls__item controls__next');
    icon.setAttribute('class', 'fas fa-chevron-right');
  }
  if (i == 2) {
    controls.setAttribute('class', 'controls__item controls__pause');
    icon.setAttribute('class', 'fas fa-play');
  }
  controls.appendChild(icon);
  elem.appendChild(controls);
  }
 wrapper.appendChild(elem);
}

function createStyle () {
styleWrapper = document.createElement('style');
styleWrapper.innerHTML = `
.slides,
.controls {
  position: relative;
}
.indicators {
  display: flex;
}
.indicators__item {
  display: block;
  width: 25px;
  height: 25px;
  background-color: green;
  margin: 10px;
  border-radius: 10px;
}`;

wrapper.appendChild(styleWrapper);
}

function indicatorsHandler(e) {
  target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator !== null) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  }
}

function setListener() {
  indicatorsWrapper = document.querySelector('div.indicators');

  indicatorsWrapper.addEventListener('click', indicatorsHandler);
}



function createCarousel(slidesCount = 5) {
  // ваш код здесь
 wrapper = document.querySelector('#carousel');
createSlides(slidesCount);
createIndicators(slidesCount);
createControls();
createStyle();
setListener();
}

createCarousel();