class Enemies {
  // some enemies are not being hit properly (problem with dead function with this.x ou the attack function this.x or the x postion of the attck itself)
  constructor(game, x, y, data) {
    this.game = game;
    this.data = data;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = this.data.imgUrl[0];
    this.enemies = this.game.enemies;
    this.level = this.data.level;
    this.hpScore = this.data.hp;
    this.hp = this.data.hp;
  }
  drawCharacter() {
    this.game.ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }
  dead(enemiesLocation) {
    if (this.game.newPoke.attackList[0]) {
      if (
        this.game.newPoke.attackList[0].x < enemiesLocation.x + 50 &&
        this.game.newPoke.attackList[0].x > enemiesLocation.x - 50 &&
        this.game.newPoke.attackList[0].y < enemiesLocation.y + 55 &&
        this.game.newPoke.attackList[0].y > enemiesLocation.y - 55
      ) {
        this.hp -= this.game.newPoke.attackList[0].AttackPower;
        this.game.newPoke.attackList.pop();
        if (this.hp <= 0) {
          return true;
        }
      }
    }
  }
}
