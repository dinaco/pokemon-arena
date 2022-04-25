class Enemies {
  // not being generated using frames%120
  // some enemies are not being hit properly
  // best way to implement levels / images /type randomly?
  // use fetch pokeapi?
  constructor(game, x, y, url, level) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = url;
    this.enemies = this.game.enemies;
    this.level = level;
    this.hpScore = 10 * this.level;
    this.hp = 10 * this.level;
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
