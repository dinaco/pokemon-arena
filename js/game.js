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
    this.randomPoke = null;
    this.chosenPoke = 4;
    this.newPoke = new Pokemon(
      this,
      this.cWidth / 2 - 50,
      this.cHeight / 2 - 50,
      data[this.chosenPoke],
      false
    );
    this.enemies = [];
    this.obstacles = [];
    this.controls = null;
    this.frames = 0;
    this.points = 0;
    this.secondsLeft = 120;
  }
  start() {
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
    this.createObstacles();
    this.createEnemies();
    this.checkPowerUp();
    this.newPoke.attackList.length > 0 ? this.newPoke.attack() : false;
  }
  checkPowerUp() {
    if (
      this.points >= this.newPoke.data.evolveScore &&
      this.newPoke.data.evolve
    ) {
      this.newPoke.data = data[this.chosenPoke++];
    }
    this.newPoke.drawCharacter();
  }
  createEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      if (
        this.enemies[i].x < 0 ||
        this.enemies[i].x > this.cWidth ||
        this.enemies[i].y < 0 ||
        this.enemies[i].y > this.cHeight
      ) {
        this.enemies.splice([i], 1);
      } else {
        /*      let randomEnemyAttack = Math.floor(Math.random() * 1000 + 1);
        randomEnemyAttack <= 2 ? this.enemies[i].attack() : ""; */
        this.enemies[i].drawCharacter();
      }
    }
    if (this.enemies.length < 12) {
      if (this.frames % 60 === 0) {
        if (this.points >= 950 && !this.enemies.some((e) => e.data.id == 13)) {
          this.randomPoke = 13;
        } else if (
          this.points >= 750 &&
          !this.enemies.some((e) => e.data.id == 12)
        ) {
          this.randomPoke = 12;
        } else {
          this.randomPoke = Math.floor(Math.random() * 11 + 1);
        }
        let minX = 0;
        let maxX = this.cWidth - 100;

        let x = Math.floor(Math.random() * (maxX - minX) + minX);

        let minY = 0;
        let maxY = this.cHeight - 100;
        let y = Math.floor(Math.random() * (maxY - minY) + minY);

        this.enemies.push(new Pokemon(this, x, y, data[this.randomPoke], true));
      }
    }
  }
  createObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.enemies[i].drawCharacter();
    }

    if (this.enemies.length < 5) {
      let minX = 0;
      let maxX = this.cWidth - 100;

      let x = Math.floor(Math.random() * (maxX - minX) + minX);

      let minY = 0;
      let maxY = this.cHeight - 100;
      let y = Math.floor(Math.random() * (maxY - minY) + minY);

      this.enemies.push(new Pokemon(this, x, y, data[0], true));
    }
  }
  checkGameOver() {
    let updatedTime = Math.floor(this.secondsLeft - this.frames / 30);
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
    this.background.src = "/docs/assets/imgs/grass-tile-1.png";
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
  preview() {
    this.drawBackground();
    /*     this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.rect(0, 0, this.cWidth, this.cHeight);
    this.ctx.fill(); */
    this.newPoke = new Pokemon(
      this,
      this.cWidth / 2 - 50,
      this.cHeight / 2 - 50,
      data[0],
      false
    );
    this.newPoke.drawCharacter();
  }
}
