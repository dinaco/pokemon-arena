class Attack {
  // adjust x and y of the attack depending of the size of pokemon's image size/level
  // flip attack image
  // fireball is being dragged around when moving pokemon x position
  constructor(newPoke, x, y) {
    this.newPoke = newPoke;
    this.x = x;
    this.y = y;
    this.direction = "";
    this.frames = 0;
    this.attackImg = new Image();
    this.attackImg.src = `https://www.clipartmax.com/png/full/250-2502429_fireball-clipart-pixel-sprite-pixel-transparent-fire-ball.png`;
    this.attackWidth = 50;
    this.attackHeight = 50;
    this.AttackPower = 10;
  }
  drawAttack() {
    switch (this.newPoke.level) {
      case 1:
        this.attackWidth = 75;
        this.attackHeight = 75;
        this.AttackPower = 20;
        break;
      case 2:
        this.attackWidth = 100;
        this.attackHeight = 100;
        this.AttackPower = 30;
        break;
    }
    this.newPoke.game.ctx.drawImage(
      this.attackImg,
      this.newPoke.direction !== "right" ? this.x : this.x - 100,
      this.y,
      this.attackWidth,
      this.attackHeight
    );
  }
}
