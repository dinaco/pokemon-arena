window.onload = () => {
  /*   document.getElementById("start-button").onclick = () => {
      gameLogic.start();
    }; */

  /*   document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          position.moveLeft();
          break;
        case "ArrowRight":
          position.moveRight();
          break;
      }
    }); */

  const canvas = document.getElementById("game-board");
  const ctx = canvas.getContext("2d");

  const cWidth = canvas.width;
  const cHeight = canvas.height;

  const drawCanvas = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };

  //Saved properties - fillStyle, strokeStyle, font, shadow, blur, transformations

  /* drawCanvas(10, 20, 60, 60, 'turquoise');
    ctx.save();
    drawCanvas(100, 150, 60, 60, 'orangeRed');
    ctx.save();
    drawCanvas(150, 250, 60, 60, 'magenta');
    ctx.restore();
    drawCanvas(300, 150, 60, 60);
    ctx.restore();
    drawCanvas(400, 20, 60, 60); */

  // setTimeout, setInterval, requestAnimationFrame

  const color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
    rgb: function () {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
  };

  /* const updateCanvas = () => {
      color.red = (color.red + 1) % 255;
      color.green = (color.green + 1) % 255;
      color.blue = (color.blue + 1) % 255;
      ctx.clearRect(0, 0, cWidth, cHeight);
      ctx.fillStyle = color.rgb();
      ctx.fillRect(100, 100, 250, 250);
      requestAnimationFrame(updateCanvas);
    };
    updateCanvas(); */

  function clearCanvas() {
    ctx.clearRect(0, 0, cWidth, cHeight);
  }
  /* let speed1 = 0;
    let speed2 = 600;
    let speed3 = 700;
    const updateCanvas = () => {
      speed1 -= 1;
      speed2 -= 2;
      speed3 -= 3;
      clearCanvas();
      drawCanvas(speed1, 50, 100, 100, 'red');
      drawCanvas(100, speed2, 100, 100, 'green');
      drawCanvas(speed3, speed3, 100, 100, 'blue');
      requestAnimationFrame(updateCanvas);
    };
    updateCanvas(); */

  // OOP - User inputs

  ctx.font = "18px serif";

  class Pokemon {
    constructor(x, y, url) {
      this.x = x;
      this.y = y;

      const img = new Image();
      this.img = img;
      this.drawCharacter();
      img.src = url;
      /* 'https://www.seekpng.com/png/full/182-1829970_caterpie-pokemon-sprite-animation-gifs.png' */
    }

    moveUp() {
      this.y -= 25;
    }

    moveDown() {
      this.y += 25;
    }

    moveLeft() {
      this.x -= 25;
    }

    moveRight() {
      this.x += 25;
    }

    reset() {
      this.x = 25;
      this.y = 25;
    }

    drawCharacter() {
      ctx.drawImage(this.img, this.x, this.y, 50, 50);
    }
  }

  const caterpie = new Pokemon(
    25,
    25,
    "https://projectpokemon.org/images/shiny-sprite/caterpie.gif"
  );
  const bulbasaur = new Pokemon(
    1100,
    700,
    "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"
  );

  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        caterpie.moveUp();
        break;
      case "ArrowDown":
        caterpie.moveDown();
        break;
      case "ArrowLeft":
        caterpie.moveLeft();
        break;
      case "ArrowRight":
        caterpie.moveRight();
        break;
      case "Space":
        caterpie.reset();
        break;
      case "KeyW":
        bulbasaur.moveUp();
        break;
      case "KeyA":
        bulbasaur.moveLeft();
        break;
      case "KeyS":
        bulbasaur.moveDown();
        break;
      case "KeyD":
        bulbasaur.moveRight();
        break;
    }

    updateCanvas();
  });

  const draw = () => {
    //rectangles
    /*   ctx.fillStyle = 'purple';
      ctx.fillRect(125, 125, 300, 300);
      ctx.clearRect(145, 145, 260, 260);
      ctx.strokeRect(150, 150, 250, 250);
      ctx.fillStyle = 'color'
      ctx.strokeStyle = 'color'
      ctx.lineWidth = 20
      //paths
      ctx.fillStyle = 'black';
      ctx.lineWidth = 10; */
    /* ctx.beginPath();
      //first line
      ctx.moveTo(50, 50);
      ctx.lineTo(250, 50);
      //moves the pen to the end of the first line
      ctx.moveTo(250, 50);
      ctx.lineTo(250, 250); */
    //strokes the line
    /*  ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
      ctx.closePath(); */
    //Arcs
    //arc(x, y, radius, startAngle, endAngle, anticlockWise)
    // radians = (Math.PI/180) * degrees
    /*  ctx.beginPath();
      ctx.arc(350, 350, 175, 0, Math.PI * 2);
      ctx.lineWidth = 20;
      ctx.strokeStyle = 'green';
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(350, 350, 75, 0, Math.PI * 2);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath(); */
    /* let grd = ctx.createLinearGradient(0, 0, 800, 0);
      grd.addColorStop(0, 'red');
      grd.addColorStop(1, 'blue');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 900, 600); */
    /*  ctx.font = '64px serif';
      ctx.fillText('Hello world', 10, 100);
      ctx.strokeText('Hello world', 10, 300); */
  };

  //draw();

  //Paths
  //beginPath()
  //stroke()
  //fill()
  //closePath

  //Color
  //ctx.fillStyle = 'rgba(2, 2, 2, 0.5)'
  //ctx.strokeStyle = 'red'

  //Images

  const tileImg = new Image();

  /* tileImg.addEventListener('load', () => {
      tileImg.src = 'images/tile.jpg';
    }); */

  tileImg.src = "/docs/assets/imgs/tile.jpg";

  let tileX = 0;
  let tileY = 0;

  const updateCanvas = () => {
    clearCanvas();
    ctx.fillText("Caterpie x: " + caterpie.x, 1000, 40);
    ctx.fillText("Caterpie y: " + caterpie.y, 1000, 100);

    caterpie.drawCharacter();
    bulbasaur.drawCharacter();
  };

  updateCanvas();
};
