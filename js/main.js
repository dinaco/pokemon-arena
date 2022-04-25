window.onload = () => {
  // BEGIN COMPONENTS
  /* class Pokemon {
    constructor(x, y, url) {
      this.x = x;
      this.y = y;
      this.direction = "";
      const img = new Image();
      this.img = img;
      this.drawCharacter();
      img.src = url;
      this.frames = 0;
    }
    attack(x, y) {
      const attackImg = new Image();
      this.attackImg = attackImg;
      this.attackImg.src =
        "https://www.clipartmax.com/png/full/250-2502429_fireball-clipart-pixel-sprite-pixel-transparent-fire-ball.png";
      ctx.drawImage(this.attackImg, x, y, 100, 100);
    }
    moveUp() {
      this.y - 50 >= 0 ? (this.y -= 50) : false;
    }

    moveDown() {
      this.y + 100 <= cHeight ? (this.y += 50) : false;
    }

    moveLeft() {
      this.direction = "left";
      this.x - 50 >= 0 ? (this.x -= 50) : false;
    }

    moveRight() {
      this.direction = "right";
      this.x + 100 <= cWidth ? (this.x += 50) : false;
    }

    reset() {
      this.x = cWidth / 2;
      this.y = cHeight / 2;
    }

    drawCharacter() {
      //  ctx.scale(this.direction === "right" ? -1 : 1, 1);
      ctx.drawImage(
        this.img,
        this.x,
        // this.direction === "right" ? this.x * -1 : this.x,
        this.y,
        100,
        100
      );
      //  if (this.direction === "left" || this.direction === "") {
      // ctx.drawImage(this.img, this.x, this.y, 100, 100);
      //    } else {
      //  ctx.translate(this.x + 100, this.y);
      //  ctx.scale(-1, 1);
      //  ctx.drawImage(this.img, this.x, this.y, 100, 100);
      //ctx.setTransform(1, 0, 0, 1, 0, 0);
      //ctx.setTransform(1,0,0,-1,0,canvas.height);
      //  }
    }
  } */
  /*   class Enemies extends Pokemon {
    constructor(x, y, url) {
      super(x, y, url);
    }
    drawCharacter() {
      ctx.drawImage(this.img, this.x, this.y, 100, 100);
    }
    dead(enemies) {
      if (attackList[0]) {
        if (
          attackList[0].x < enemies.x + 50 &&
          attackList[0].x > enemies.x - 50 &&
          attackList[0].y < enemies.y + 55 &&
          attackList[0].y > enemies.y - 55
        ) {
          console.log("hit");
          attackList.pop();
          return true;
          //         return !(
          //  this.x < enemies.x - 45 || this.x > enemies.x + enemies.width 
          //);
        }
      }
    }
  } */

  /*   class Attack {
    constructor(x, y, url) {
      this.x = x;
      this.y = y;
      this.direction = "";
      const img = new Image();
      this.img = img;
      img.src = url;
      this.frames = 0;
    }
    drawAttack() {
      ctx.drawImage(this.img, this.x, this.y, 100, 100);
    }
  } */
  // END COMPONENTS

  //BEGIN IMAGES

  // END IMAGES

  // BEGIN FUNCTIONS
  /*   const enemies = [];
  function updateEnemies() {
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].drawCharacter();
    }
    if (enemies.length < 5) {
      if (newPoke.frames === 1 || newPoke.frames % 120 === 0) {
        const randomPoke = Math.floor(Math.random() * 4 + 1);
        let minX = 0;
        let maxX = cWidth - 100;

        let x = Math.floor(Math.random() * (maxX - minX) + minX);

        let minY = 0;
        let maxY = cHeight - 100;
        let y = Math.floor(Math.random() * (maxY - minY) + minY);
        enemies.push(
          new Enemies(
            x,
            y,
            `http://www.serebii.net/xy/pokemon/00${randomPoke}.png`
          )
        );
      }
    }
  } */
  /*   const attackList = [];
  function attack() {
    for (let i = 0; i < attackList.length; i++) {
      if (attackList[i].x < 0 || attackList[i].x > cWidth) {
        attackList.pop();
        return false;
      } else {
        newPoke.direction !== "right"
          ? (attackList[i].x -= 20)
          : (attackList[i].x += 20);
        attackList[i].drawAttack();
        kill();
      }
    }

    if (attackList.length < 1) {
      attackList.push(
        new Attack(
          newPoke.direction !== "right" ? newPoke.x - 100 : newPoke.x,
          newPoke.y,
          `https://www.clipartmax.com/png/full/250-2502429_fireball-clipart-pixel-sprite-pixel-transparent-fire-ball.png`
        )
      );
    }
  } */

  /*   function kill() {
    enemies.map((el, i) => {
      if (el.dead(el)) {
        enemies.splice([i], 1);
        score(10);
      }
    });
  } */

  // END FUNCTIONS

  // START FUNCTION

  const game = new Game();
  game.start();
};
