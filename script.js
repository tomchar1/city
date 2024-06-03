//cavas
var cnv = document.getElementById("mycanvas");
var ctx = cnv.getContext("2d");
let windcolor1 = "black";
let windcolor2 = "red";
let windcolor3 = "blue";
let windcolor4 = "yellow";
cnv.width = 400;
cnv.height = 400;
let car1x = 1;
let bird1x = 430;
let car2x = 50;
let car3x = 100;
let car4x = 150;
let car5x = 200;
let car1y = 305;
let bird1y = 80;
let car2y = 305;
let car3y = 305;
let car4y = 305;
let car5y = 305;
let moon1y = 450;
let car1xspeed = +1;
let bird1xspeed = -1;
let sunY = 75;
let R = 173;
let G = 216;
let B = 230;

requestAnimationFrame(draw);

function draw() {
  var moon1Img = document.getElementById("moonimg");
  ctx.drawImage(moonimg, 300, moon1y, 30, 30);

  ctx.fillStyle = `rgb(${R}, ${G}, ${B})`;
  ctx.fillRect(0, 0, 400, 400);

  //moon

  //sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, sunY, 20, 0, 2 * Math.PI);
  ctx.fill();

  // top-left corner (0,0)
  // top-right corner (400,0)
  // bottom-left corner (0,400)
  // bottom-right corner (400,400)
  //buildings
  ctx.fillStyle = "darkgray";
  ctx.fillRect(0, 300, 400, 150);

  ctx.fillStyle = "lightgray";
  ctx.fillRect(2, 150, 30, 150);

  ctx.fillStyle = "white";
  ctx.fillRect(50, 130, 36, 170);

  ctx.fillStyle = "pink";
  ctx.fillRect(100, 160, 52, 140);

  ctx.fillStyle = "purple";
  ctx.fillRect(180, 190, 70, 110);

  //street
  ctx.fillStyle = "black";
  ctx.fillRect(0, 340, 400, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 350, 400, 1);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 310, 400, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 320, 400, 1);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 370, 400, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 380, 400, 1);

  //Cloud
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(0, 20, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(20, 10, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(50, 0, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(100, 0, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(150, 0, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(200, 0, 20, 0, 2 * Math.PI);
  ctx.fill();

  //imgs

  var birdImg = document.getElementById("birdimg");
  ctx.drawImage(birdImg, bird1x, bird1y, 60, 60);
  console.log(bird1x);

  var moon1Img = document.getElementById("moonimg");
  ctx.drawImage(moonimg, 300, moon1y, 90, 90);
  var car1Img = document.getElementById("carimg");
  ctx.drawImage(carimg, car1x, car1y, 30, 30);

  var car2Img = document.getElementById("carimg");
  ctx.drawImage(carimg, car2x, car2y, 30, 30);

  var car3Img = document.getElementById("carimg");
  ctx.drawImage(carimg, car3x, car3y, 30, 30);

  var car4Img = document.getElementById("carimg");
  ctx.drawImage(carimg, car4x, car4y, 30, 30);

  var car5Img = document.getElementById("carimg");
  ctx.drawImage(carimg, car5x, car4y, 30, 30);
  //window1
  ctx.fillStyle = windcolor1;

  // ctx.fillRect(10, 10, 30, 30);
  // ctx.fillRect(60, 10, 30, 30);
  // ctx.fillRect(110, 10, 30, 30);

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 11; j++) {
      ctx.fillRect(4 + i * 10, 160 + j * 10, 5, 7);
    }
  }
  //window2

  ctx.fillStyle = windcolor2;

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 14; j++) {
      ctx.fillRect(55 + i * 10, 135 + j * 10, 5, 7);
    }
  }

  //window3

  ctx.fillStyle = windcolor3;

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 10; j++) {
      ctx.fillRect(113 + i * 10, 170 + j * 10, 5, 7);
    }
  }

  //window4

  ctx.fillStyle = windcolor4;

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 7; j++) {
      ctx.fillRect(197 + i * 15, 200 + j * 10, 5, 7);
    }
  }

  //hill
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(375, 300, 100, (2 * Math.PI) / 2, 0);
  ctx.fill();

  //Tree bark
  ctx.fillStyle = "brown";
  ctx.fillRect(300, 195, 5, 40);

  ctx.fillStyle = "brown";
  ctx.fillRect(320, 180, 5, 40);

  ctx.fillStyle = "brown";
  ctx.fillRect(340, 170, 5, 40);

  ctx.fillStyle = "brown";
  ctx.fillRect(360, 165, 5, 40);

  ctx.fillStyle = "brown";
  ctx.fillRect(380, 163, 5, 40);

  //treeleaf
  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(322, 180, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(302, 190, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(342, 170, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(362, 165, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(382, 165, 10, 0, 2 * Math.PI);
  ctx.fill();

  //Apples
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(382, 165, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(387, 165, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(380, 160, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(362, 160, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(364, 165, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(361, 167, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(343, 167, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(345, 175, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(340, 175, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(320, 175, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(325, 180, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(315, 183, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(300, 183, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(305, 190, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(300, 190, 2, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(draw);
  //animation

  //bird ss
  bird1x = bird1x - 2;
  if (bird1x <= -75) {
    bird1x = 430;
  }

  //car ss
  car1x = car1x + 4;
  // car2x = car2x + 1;

  if (car1x >= 400) {
    car1x = -75;
    // Reappear at a selected height
    let rand = Math.random();
    if (rand < 0.33) {
      car1y = 305;
    } else if (rand < 0.66) {
      car1y = 335;
    } else {
      car1y = 365;
    }
  }
  car2x = car2x + 4;
  // car2x = car2x + 1;

  if (car2x >= 400) {
    car2x = -75;
    // Reappear at a selected height
    let rand = Math.random();
    if (rand < 0.33) {
      car2y = 305;
    } else if (rand < 0.66) {
      car2y = 335;
    } else {
      car2y = 365;
    }
  }

  car3x = car3x + 4;
  if (car3x >= 400) {
    car3x = -75;
    // Reappear at a selected height
    let rand = Math.random();
    if (rand < 0.33) {
      car3y = 305;
    } else if (rand < 0.66) {
      car3y = 335;
    } else {
      car3y = 365;
    }
  }

  car4x = car4x + 4;
  if (car4x >= 400) {
    car4x = -75;
    // Reappear at a selected height
    let rand = Math.random();
    if (rand < 0.33) {
      car4y = 305;
    } else if (rand < 0.66) {
      car4y = 335;
    } else {
      car4y = 365;
    }
  }

  car5x = car5x + 4;
  if (car5x >= 400) {
    car5x = -75;
    // Reappear at a selected height
    let rand = Math.random();
    if (rand < 0.33) {
      car5y = 305;
    } else if (rand < 0.66) {
      car5y = 335;
    } else {
      car5y = 365;
    }
  }
  // if (car2x >= 400) {
  //   car2x = -75;
  //   car2y = rand;
  // }

  // When car goes off screen (its x value >= canvas width)
  // randomly choose a lane (useing if statement skeleton above)
  // set x value back to 0
}
//key handler
document.addEventListener("keypress", keyboardHandler);
function keyboardHandler(event) {
  if (event.code == "KeyT") {
    console.log("you've just turned on night mode!!!");
    windcolor1 = "black";
    windcolor2 = "black";
    windcolor3 = "black";
    windcolor4 = "black";
    R = "0";
    G = "0";
    B = "139";

    sunY = 400;

    moon1y = 10;
  }
}
