class Game {
  constructor() {
    this.canvas = document.getElementById("game-board");
    this.ctx = this.canvas.getContext("2d");
    this.background = new Image();
    this.x = 0;
    this.y = 0;
    this.cWidth = this.canvas.width;
    this.cHeight = this.canvas.height;
    this.intervalId = null;
    this.newPoke = null;
    this.enemies = [];
    this.controls = null;
    this.frames = 0;
    this.points = 0;
    this.pokeId = 4;
    this.secondsLeft = 120;
  }
  start() {
    this.newPoke = new Pokemon(
      this,
      this.cWidth / 2 - 50,
      this.cHeight / 2 - 50,
      1
    );
    this.createEnemies();
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 30);
  }
  update() {
    this.checkGameOver();
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.frames++;
    this.drawBackground();
    this.createEnemies();
    this.checkPowerUp();
    this.newPoke.attackList.length > 0 ? this.newPoke.attack() : false;
    this.frames++;
  }
  checkPowerUp() {
    if (this.points < 100) {
      this.newPoke.level = 0;
    } else if (this.points >= 100 && this.points < 200) {
      this.newPoke.level = 1;
    } else if (this.points >= 200) {
      this.newPoke.level = 2;
    }
    this.newPoke.drawCharacter(this.newPoke.level);
  }
  createEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].drawCharacter();
    }
    //  if (this.enemies.length < 5) {
    console.log(this.enemies);
    console.log(this.frames);
    if (this.frames % 120 === 0) {
      const randomPoke = Math.floor(Math.random() * 4 + 1);
      let minX = 0;
      let maxX = this.cWidth - 100;

      let x = Math.floor(Math.random() * (maxX - minX) + minX);

      let minY = 0;
      let maxY = this.cHeight - 100;
      let y = Math.floor(Math.random() * (maxY - minY) + minY);

      this.enemies.push(
        new Enemies(
          this,
          x,
          y,
          `http://www.serebii.net/xy/pokemon/00${randomPoke}.png`,
          2
        )
      );
      //  }
    }
  }
  checkGameOver() {
    let updatedTime = Math.floor(this.secondsLeft - this.frames / 60);
    document.getElementById("time-left").innerHTML = `${updatedTime}`;
    if (updatedTime == 0) {
      console.log("stop");
      this.stop();
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }
  drawBackground() {
    this.background.src = "/docs/assets/imgs/tile.jpg";
    let tilePattern = this.ctx.createPattern(this.background, "repeat");
    this.ctx.fillStyle = tilePattern;
    this.ctx.fillRect(0, 0, this.cWidth, this.cHeight);
    this.ctx.drawImage(this.background, 0, 0, 50, 50);
  }
  kill() {
    this.enemies.map((el, i) => {
      if (el.dead(el)) {
        this.score(this.enemies[i].hpScore);
        this.enemies.splice([i], 1);
      }
    });
  }
  score(kills) {
    this.points += kills;
    (document.getElementById("score").innerHTML = `${this.points}`), 100, 50;
  }
}
