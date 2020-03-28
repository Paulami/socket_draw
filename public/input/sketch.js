//1. open and connect input sockets
let socket = io('/input');

//2. listen for configuration of connection
socket.on('connect', function() {
    console.log("Connected");
});

//3. ==>> send something based on the code
//p5 draw code

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }

  //  ==>> should this be inside the draw function or outside
  // send mouse position
  socket.emit('data', { x: mouseX, y: mouseY });