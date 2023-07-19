// FILE: powerOfPlay.js


// Function to create a playground
function createPlayground(width, height, material) {
  let playground = document.createElement('div');
  playground.style.width = width + 'px';
  playground.style.height = height + 'px';
  playground.style.background = material;
  playground.style.position = 'relative';

  return playground;
}

// Function to create playground elements
function createElement(type, color, position, size) {
  let element = document.createElement('div');
  element.style.background = color;
  element.style.position = position;
  element.style.width = size.width + 'px';
  element.style.height = size.height + 'px';

  if (type === 'circle') {
    element.style.borderRadius = '50%';
  }

  return element;
}

// Function to add elements to the playground
function addElement(playground, element) {
  playground.appendChild(element);
}

// Create playground
let playground = createPlayground(1000, 600, 'skyblue');
document.body.appendChild(playground);

// Create and add playground elements
let slide = createElement('rectangle', 'green', 'absolute', {width: 250, height: 75});
addElement(playground, slide);

let swing = createElement('rectangle', 'darkgreen', 'absolute', {width: 30, height: 150});
addElement(playground, swing);

let sandbox = createElement('rectangle', 'yellow', 'absolute', {width: 500, height: 250});
addElement(playground, sandbox);

let seesaw = createElement('rectangle', 'brown', 'absolute', {width: 250, height: 15});
addElement(playground, seesaw);

let merryGoRound = createElement('circle', 'red', 'absolute', {width: 30, height: 30});
addElement(playground, merryGoRound);

// Set playground elements positions
slide.style.left = '50px';
slide.style.top = '450px';

swing.style.left = '500px';
swing.style.top = '400px';

sandbox.style.left = '250px';
sandbox.style.top = '250px';

seesaw.style.left = '400px';
seesaw.style.top = '500px';

merryGoRound.style.left = '750px';
merryGoRound.style.top = '400px';

// Function to add animations to the playground elements
function animateElement(element, style, time) {
  element.animate([
    {transform: 'rotate(0deg)'},
    {transform: 'rotate('+style+')'}
  ], {
    duration: time,
    iterations: Infinity
  })
}

// Animate playground elements
animateElement(slide, '360deg', 2000);
animateElement(swing, '30deg', 500)
animateElement(seesaw, '30deg', 500);
animateElement(merryGoRound, '360deg', 2000);

// Function to add sound to the playground elements
function addSound(element, sound) {
  element.addEventListener('click', function() {
    let audio = new Audio(sound);
    audio.play();
  });
}

// Add sound to playground elements
addSound(slide, 'slide.mp3');
addSound(swing, 'swing.mp3');
addSound(sandbox, 'sandbox.mp3');
addSound(seesaw, 'seesaw.mp3');
addSound(merryGoRound, 'merrygoround.mp3');