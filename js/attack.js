class Attack {
  // adjust attack image size or get specific image of attack for each level of attack
  // flip attack image
  constructor(newPoke, x, y, direction) {
    this.newPoke = newPoke;
    this.data = this.newPoke.data;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.attackImg = new Image();
    this.attackImg.src = "";
    this.attackWidth = null;
    this.attackHeight = null;
    this.AttackPower = this.data.attackPower.power;
  }
  drawAttack() {
    /*     switch (this.newPoke.data.level) {
      case 2:
        this.attackWidth = 75;
        this.attackHeight = 75;
        break;
      case 3:
        this.attackWidth = 100;
        this.attackHeight = 100;
        break;
    } */
    this.attackWidth = this.data.attackImg.sizeX;
    this.attackHeight = this.data.attackImg.sizeY;
    this.attackImg.src = this.data.attackImg.url[this.direction];
    this.newPoke.game.ctx.drawImage(
      this.attackImg,
      this.direction !== 1 ? (this.x -= 20) : (this.x += 20),
      this.y,
      this.attackWidth,
      this.attackHeight
    );
  }
}
