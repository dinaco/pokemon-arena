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
  }
  drawCharacter() {
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
          this.hp -=
            (this.attackPower / enemy.data.level) *
            this.weakness.penalty *
            this.newPoke.level *
            this.criticalHit;
        } else if (enemy.data.type === this.bonus.type) {
          this.hp -=
            (this.attackPower / enemy.data.level) *
            this.bonus.powerBonus *
            this.newPoke.level *
            this.criticalHit;
        } else {
          this.hp -=
            (this.attackPower / enemy.data.level) *
            this.newPoke.level *
            this.criticalHit;
        }
        this.game.newPoke.attackList.pop();
        if (this.hp <= 0) {
          return true;
        }
      }
    }
  }
}
