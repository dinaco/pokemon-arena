// align health bar properly
class Enemies {
  constructor(game, x, y, data, imgSize) {
    this.game = game;
    this.data = data;
    this.newPoke = this.game.newPoke.data;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = this.data.img.url[0];
    this.imgSizeX = this.data.img.sizeX;
    this.imgSizeY = this.data.img.sizeY;
    this.imgSize = imgSize;
    this.level = this.data.level;
    this.hpScore = this.data.hp;
    this.hp = this.data.hp;
    this.weakness = this.newPoke.attack.weakness;
    this.bonus = this.newPoke.attack.bonus;
    this.attackPower = this.newPoke.attack.power;
    this.criticalHit = 0;
    this.hitPower = 0;
  }
  drawCharacter() {
    if (this.level < 5) {
      const randomX = Math.round(Math.random());
      const randomY = Math.round(Math.random());
      randomX == 1 ? (this.x += 5) : (this.x -= 5);
      randomY == 1 ? (this.y += 5) : (this.y -= 5);
    }
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
          ).innerHTML = `Weak against <b>${enemy.data.type}</b>  type Pokemon`;
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
          ).innerHTML = `Strong against <b>${enemy.data.type}</b> type Pokemon`;
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
}
