class Controls {
  constructor(game) {
    this.game = game;
    this.newPoke = this.game.newPoke;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          this.newPoke.moveUp();
          break;
        case "ArrowDown":
          this.newPoke.moveDown();
          break;
        case "ArrowLeft":
          this.newPoke.moveLeft();
          break;
        case "ArrowRight":
          this.newPoke.moveRight();
          break;
        case "Space":
          this.newPoke.attack();
          break;
      }
    });
  }
}
