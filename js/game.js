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
    this.enemies = [];
    this.obstacles = [];
    this.controls = null;
    this.frames = 0;
    this.points = 0;
    this.chosenPoke = 0;
    this.secondsLeft = 120;
    this.backgroundGameOver = new Image();
    this.backgroundGameOver.src = "docs/assets/imgs/game-over.jpg";
    this.startScreen = new Image();
    this.startScreen.src = "docs/assets/imgs/start-canvas-image.jpg";
  }
  start(chosenPoke) {
    this.chosenPoke = chosenPoke;
    this.newPoke = new Pokemon(
      this,
      this.cWidth / 2 - 50,
      this.cHeight / 2 - 50,
      data[chosenPoke]
    );
    this.createEnemies();
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 30);
  }
  update() {
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    this.frames++;
    this.drawBackground();
    this.createObstacles();
    this.createEnemies();
    this.checkPowerUp();
    this.newPoke.attackList.length > 0 ? this.newPoke.attack() : false;
    this.checkGameOver();
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
        this.enemies[i].x < 0 - 50 ||
        this.enemies[i].x > this.cWidth - 50 ||
        this.enemies[i].y < 0 - 50 ||
        this.enemies[i].y > this.cHeight - 50
      ) {
        this.enemies.splice([i], 1);
      } else {
        if (this.enemies[i].data.attackImg != null) {
          let randomEnemyAttack = Math.floor(Math.random() * 750 + 1);
          randomEnemyAttack <= 2 ? this.enemies[i].attack() : "";
        }
        this.enemies[i].attackList.length > 0
          ? this.enemies[i].attack(this.enemies[i].attackList)
          : false;
        this.enemies[i].drawCharacter();
      }
    }
    if (this.enemies.length < 9) {
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

        this.enemies.push(new Enemies(this, x, y, data[this.randomPoke], 100));
      }
    }
  }
  createObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].drawCharacter();
    }

    if (this.obstacles.length < 5) {
      let minX = 0;
      let maxX = this.cWidth - 100;

      let x = Math.floor(Math.random() * (maxX - minX) + minX);

      let minY = 0;
      let maxY = this.cHeight - 100;
      let y = Math.floor(Math.random() * (maxY - minY) + minY);

      this.obstacles.push(new Enemies(this, x, y, data[0], 75));
    }
  }
  checkGameOver() {
    let updatedTime = Math.floor(this.secondsLeft - this.frames / 30);
    document.getElementById("countdown-number").textContent = updatedTime;
    if (updatedTime == 0) {
      this.stop("Well done");
    }
  }
  stop(endText) {
    document.getElementById("countdown-svg").classList = "paused";

    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    this.ctx.drawImage(
      this.backgroundGameOver,
      0,
      0,
      this.cWidth,
      this.cHeight
    );
    this.ctx.font = "36px VT323";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(
      `${endText}! Score: ${this.points}`,
      this.cWidth / 2 - 125,
      this.cHeight / 2 + 25
    );
    this.ctx.fillText(
      `Ready to try again?`,
      this.cWidth / 2 - 125,
      this.cHeight / 2 + 150
    );
    this.ctx.fillText(
      `Hit the "Q" key to reset`,
      this.cWidth / 2 - 150,
      this.cHeight / 2 + 225
    );
    this.enemies = [];
    this.newPoke = "";
    this.attackList = [];
    clearInterval(this.intervalId);
    this.points = 0;
    this.secondsLeft = 120;
    this.frames = 0;
    this.game = null;
    document.getElementById("score-info").innerHTML = "Score: 0";
    document.getElementById("damage-dealt").innerHTML = "Dealt: 0";
    document.getElementById("damage-dealt").style.color = "black";
    document.getElementById("damage-taken").innerHTML = "Taken: 0";
    document.getElementById("damage-taken").style.color = "black";
  }
  drawBackground() {
    this.background.src = "docs/assets/imgs/grass-tile-1.png";
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
  checkObstaclesHit() {
    this.obstacles.map((el) => {
      el.dead(el);
    });
  }
  score(kills) {
    this.points += kills;
    (document.getElementById("score-info").innerHTML = `Score: ${this.points}`),
      100,
      50;
  }
  preview() {
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    this.ctx.drawImage(this.startScreen, 0, 0, this.cWidth, this.cHeight);
  }
}
