class Pokemon {
  // flip pokemon image makes the controls not work sometimes (issue with controls, problably moveright())
  constructor(game, x, y, data, enemy) {
    this.game = game;
    this.data = data;
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.img = new Image();
    this.attackList = [];
    this.pokeId = this.data.id;
    this.imgSizeX = this.data.img.sizeX;
    this.imgSizeY = this.data.img.sizeY;
    this.imgSize = this.data.img.size;
    this.enemy = enemy;
    this.level = this.data.level;
    this.hpScore = this.data.hp;
    this.hp = this.data.hp;
    this.criticalHit = 0;
    this.hitPower = 0;
    this.weakness = this.data.attackPower.weakness;
    this.bonus = this.data.attackPower.bonus;
    this.attackPower = this.data.attackPower.power;
    this.attackList = [];
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
    if (this.level < 5 && this.enemy) {
      const randomX = Math.round(Math.random());
      const randomY = Math.round(Math.random());
      randomX == 1 ? (this.x += 5) : (this.x -= 5);
      randomY == 1 ? (this.y += 5) : (this.y -= 5);
    }

    if (this.level <= 10 && this.enemy) {
      this.game.ctx.beginPath();
      this.game.ctx.fillStyle = "green";
      this.game.ctx.fillRect(this.x + 25, this.y + 90, this.hpScore, 5);
      this.game.ctx.fillStyle = "red";
      this.game.ctx.fillRect(
        this.x + 25,
        this.y + 90,
        this.hpScore - this.hp,
        5
      );
    }

    !this.enemy
      ? (this.img.src = this.data.img.url.shiny[this.direction])
      : (this.img.src = this.data.img.url.normal[this.direction]);
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
      this.imgSize,
      this.imgSize
    );
  }
  dead(enemy) {
    if (this.game.newPoke.attackList[0]) {
      if (
        this.game.newPoke.attackList[0].x <= enemy.x + 25 &&
        this.game.newPoke.attackList[0].x >= enemy.x &&
        this.game.newPoke.attackList[0].y <= enemy.y + 75 &&
        this.game.newPoke.attackList[0].y >= enemy.y - 50
      ) {
        this.criticalHit = Math.floor(Math.random() * 10);
        this.criticalHit < this.game.newPoke.level
          ? (this.criticalHit = 2)
          : (this.criticalHit = 1);
        if (enemy.data.type === this.game.newPoke.weakness.type) {
          this.hitPower =
            ((this.game.newPoke.attackPower *
              Math.floor(Math.random() * 5 + 1)) /
              enemy.data.level) *
            this.game.newPoke.weakness.penalty *
            this.game.newPoke.level *
            this.criticalHit;

          this.hp -= this.hitPower;

          document.getElementById(
            "special-info"
          ).innerHTML = `Weak against <b>${
            enemy.data.type
          }</b>  type Pokemon. Penalty ${Math.round(
            (this.game.newPoke.weakness.penalty - 1) * 100
          )}%`;
        } else if (enemy.data.type === this.game.newPoke.bonus.type) {
          this.hitPower =
            ((this.game.newPoke.attackPower *
              Math.floor(Math.random() * 5 + 1)) /
              enemy.data.level) *
            this.game.newPoke.bonus.powerBonus *
            this.game.newPoke.level *
            this.criticalHit;

          this.hp -= this.hitPower;

          document.getElementById(
            "special-info"
          ).innerHTML = `Strong against <b>${
            enemy.data.type
          }</b> type Pokemon.  Bonus ${Math.round(
            (this.game.newPoke.bonus.powerBonus - 1) * 100
          )}%`;
        } else {
          this.hitPower =
            ((this.game.newPoke.attackPower *
              Math.floor(Math.random() * 5 + 1)) /
              enemy.data.level) *
            this.game.newPoke.level *
            this.criticalHit;

          this.hp -= this.hitPower;

          document.getElementById("special-info").innerHTML = ``;
        }
        document.getElementById("last-damage").innerHTML =
          this.hitPower.toFixed(2);
        this.game.newPoke.attackList.pop();
        if (this.hp <= 0) {
          return true;
        }
      }
    }
  }
}
