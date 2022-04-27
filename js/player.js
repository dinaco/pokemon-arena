class Pokemon {
  // flip pokemon image makes the controls not work sometimes (issue with controls, problably moveright())
  constructor(game, x, y, data) {
    this.game = game;
    this.data = data;
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.img = new Image();
    this.attackList = [];
    this.pokeId = this.data.id;
    this.hp = this.data.hp * 10;
    this.hpScore = this.hp;
    this.imgSizeX = this.data.img.sizeX;
    this.imgSizeY = this.data.img.sizeY;
  }
  attack() {
    if (this.attackList.length > 0) {
      for (let i = 0; i < this.attackList.length; i++) {
        this.attackList[i].drawAttack();
        if (
          this.attackList[i].x < 0 ||
          this.attackList[i].x > this.game.cWidth
        ) {
          this.attackList.pop();
          return false;
        } else {
          this.game.kill();
        }
      }
    } else {
      this.attackList.push(
        new Attack(
          this,
          this.x,
          //this.direction !== "right" ? this.x : this.x + 200,
          this.y,
          this.direction
        )
      );
    }
  }
  moveUp() {
    this.y - 50 >= 0 ? (this.y -= 50) : false;
  }
  moveDown() {
    this.y + 150 <= this.game.cHeight ? (this.y += 50) : false;
  }
  moveLeft() {
    this.direction = 0;
    this.x - 50 >= 0 ? (this.x -= 50) : false;
  }
  moveRight() {
    this.direction = 1;
    this.x + 150 <= this.game.cWidth ? (this.x += 50) : false;
  }
  reset() {
    this.x = cWidth / 2;
    this.y = cHeight / 2;
  }
  drawCharacter() {
    this.img.src = this.data.img.url.shiny[this.direction];
    // this.game.ctx.scale(this.direction === "right" ? -1 : 1, 1);
    this.game.ctx.drawImage(
      this.img,
      0,
      0,
      this.imgSizeX,
      this.imgSizeY,
      this.x,
      // this.direction === "right" ? this.x * -1 : this.x,
      this.y,
      110,
      110
    );
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = "green";
    this.game.ctx.fillRect(this.x + 25, this.y + 90, this.hpScore, 5);
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x + 25, this.y + 90, this.hpScore - this.hp, 5);
  }
  dead(enemyAttack) {
    /*     const getTrees = this.game.enemies.map((e) => {
      if (e.data.id == 0) return e;
    });
    console.log(getTrees); */
    if (
      enemyAttack.x <= this.x + 25 &&
      enemyAttack.x >= this.x &&
      enemyAttack.y <= this.y + 75 &&
      enemyAttack.y >= this.y - 50
    ) {
      this.criticalHit = Math.floor(Math.random() * 10);
      this.criticalHit < enemyAttack.data.level
        ? (this.criticalHit = 2)
        : (this.criticalHit = 1);

      if (this.data.type === enemyAttack.data.attackPower.weakness.type) {
        this.hitPower =
          ((enemyAttack.data.attackPower.power *
            Math.floor(Math.random() * 5 + 1)) /
            this.data.level) *
          enemyAttack.data.attackPower.weakness.penalty *
          enemyAttack.data.level *
          this.criticalHit;

        this.hp -= this.hitPower;
      } else if (this.data.type === enemyAttack.data.attackPower.bonus.type) {
        this.hitPower =
          ((enemyAttack.data.attackPower.power *
            Math.floor(Math.random() * 5 + 1)) /
            this.data.level) *
          enemyAttack.data.attackPower.bonus.powerBonus *
          enemyAttack.data.level *
          this.criticalHit;

        this.hp -= this.hitPower;
      } else {
        this.hitPower =
          ((enemyAttack.data.attackPower.power *
            Math.floor(Math.random() * 5 + 1)) /
            this.data.level) *
          enemyAttack.data.level *
          this.criticalHit;

        this.hp -= this.hitPower;
      }
      document.getElementById("damage-taken").innerHTML =
        this.hitPower.toFixed(2);
      enemyAttack.newPoke.attackList.pop();
      if (this.hp <= 0) {
        console.log("Dead!");
        this.game.stop();
        // return true;
      }
    }
  }
}
