class Attack {
  // adjust attack image size or get specific image of attack for each level of attack
  // flip attack image
  // fireball is being dragged around when moving pokemon x position
  constructor(newPoke, x, y) {
    this.newPoke = newPoke;
    this.data = this.newPoke.data;
    this.x = x;
    this.y = y;
    this.attackImg = new Image();
    this.attackImg.src = this.data.attackImg;
    this.attackWidth = 75;
    this.attackHeight = 75;
    this.AttackPower = this.data.attack.power;
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
    this.newPoke.game.ctx.drawImage(
      this.attackImg,
      this.x,
      //this.newPoke.direction !== "right" ? this.x : this.x - 100,
      this.y,
      this.attackWidth,
      this.attackHeight
    );
  }
}
