// align health bar properly
class Enemies {
  constructor(game, x, y, data, imgSize) {
    this.game = game;
    this.data = data;
    this.newPoke = this.game.newPoke.data;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.imgSizeX = this.data.img.sizeX;
    this.imgSizeY = this.data.img.sizeY;
    this.imgSize = imgSize;
    this.level = this.data.level;
    this.hpScore = this.data.hp;
    this.hp = this.data.hp;
    this.weakness = this.newPoke.attackPower.weakness;
    this.bonus = this.newPoke.attackPower.bonus;
    this.attackPower = this.newPoke.attackPower.power;
    this.criticalHit = 0;
    this.hitPower = 0;
    this.attackList = [];
  }
  drawCharacter() {
    if (this.level < 5) {
      const randomX = Math.round(Math.random());
      const randomY = Math.round(Math.random());
      randomX == 1 ? (this.x += 5) : (this.x -= 5);
      randomY == 1 ? (this.y += 5) : (this.y -= 5);
    }
    this.img.src = this.data.img.url.normal[0];
    this.game.ctx.drawImage(
      this.img,
      0,
      0,
      this.imgSizeX,
      this.imgSizeY,
      this.x,
      this.y,
      this.imgSize,
      this.imgSize
    );
    if (this.level <= 10) {
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
        this.criticalHit < this.newPoke.level
          ? (this.criticalHit = 2)
          : (this.criticalHit = 1);
        if (enemy.data.type === this.weakness.type) {
          this.hitPower =
            ((this.attackPower * Math.floor(Math.random() * 5 + 1)) /
              enemy.data.level) *
            this.weakness.penalty *
            this.newPoke.level *
            this.criticalHit;

          this.hp -= this.hitPower;

          document.getElementById(
            "special-info"
          ).innerHTML = `Weak against <b>${
            enemy.data.type
          }</b>  type Pokemon. Penalty ${Math.ceil(
            (this.weakness.penalty - 1) * 100
          )}%`;
        } else if (enemy.data.type === this.bonus.type) {
          this.hitPower =
            ((this.attackPower * Math.floor(Math.random() * 5 + 1)) /
              enemy.data.level) *
            this.bonus.powerBonus *
            this.newPoke.level *
            this.criticalHit;

          this.hp -= this.hitPower;

          document.getElementById(
            "special-info"
          ).innerHTML = `Strong against <b>${
            enemy.data.type
          }</b> type Pokemon.  Bonus ${Math.ceil(
            (this.bonus.powerBonus - 1) * 100
          )}%`;
        } else {
          this.hitPower =
            ((this.attackPower * Math.floor(Math.random() * 5 + 1)) /
              enemy.data.level) *
            this.newPoke.level *
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
  attack() {
    //  if (this.attackList.length > 0) {
    for (let i = 0; i < this.attackList.length; i++) {
      this.attackList[i].drawAttack();
      if (this.attackList[i].x < 0 || this.attackList[i].x > this.game.cWidth) {
        this.attackList.pop();
        return false;
      } else {
        this.game.kill();
        console.log("kill function");
      }
    }
    // } else {
    this.attackList.push(
      new Attack(
        this,
        this.x,
        //this.direction !== "right" ? this.x : this.x + 200,
        this.y,
        0
        //this.direction
      )
    );
    //   }
  }
}
