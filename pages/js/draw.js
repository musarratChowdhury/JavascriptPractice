const canvas = document.getElementById("draw-canvas");
canvas.style.backgroundColor = "white";
canvas.style.border = "1px solid black";
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

let characterImg = null;
let ch2;

window.onload = function () {
  const spriteSheet = new Image();
  spriteSheet.src = "../../assets/sprites/character_sprite.jpg"; // Replace with your sprite sheet image path
  spriteSheet.onload = () => {
    ch2 = new SPRITEIMAGE(
      0,
      0,
      1920,
      1549,
      7,
      6,
      0,
      0,
      200,
      200,
      spriteSheet,
      "main"
    );
    ch2.sheight = 227;
    let lastUpdateTime = 0;
    const updateInterval = 100; // Interval in milliseconds for 2 ticks per second (1000ms / 2 ticks)

    function animate(currentTime) {
      // Calculate the time difference since the last update
      const deltaTime = currentTime - lastUpdateTime;

      // Check if enough time has elapsed to update
      if (deltaTime > updateInterval) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw the sprite
        ch2.updateFrame();
        ch2.draw();

        // Update the last update time
        lastUpdateTime = currentTime - (deltaTime % updateInterval);
      }

      // Request the next animation frame
      requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate(0); // Pass 0 to start immediately
  };
};

// function renderSpriteToCanvas(row, col) {
//   const spriteWidth = 274.286; // Width of each sprite in the sheet (adjust according to your sprite sheet)
//   const spriteHeight = 221.286; // Height of each sprite in the sheet (adjust according to your sprite sheet)

//   //   console.log(canvas);
//   //   console.log(character);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   if (character) {
//     ctx.drawImage(
//       character,
//       col * spriteWidth, // X position of the sprite in the sheet
//       row * spriteHeight, // Y position of the sprite in the sheet
//       spriteWidth, // Width of the sprite
//       spriteHeight, // Height of the sprite
//       0, // X position on the canvas to draw the sprite
//       0, // Y position on the canvas to draw the sprite
//       spriteWidth, // Width to draw on the canvas
//       spriteHeight // Height to draw on the canvas
//     );
//   }
// }
// let i = 0;
// setInterval(() => {
//   if (i < 7) {
//     renderSpriteToCanvas(2, i);
//     i++;
//   } else {
//     i = 0;
//   }
// }, 100);

class SPRITEIMAGE {
  constructor(
    srcX,
    srcY,
    spritewidth,
    spriteheight,
    col,
    row,
    x,
    y,
    width,
    height,
    img,
    type
  ) {
    this.srcX = srcX;
    this.srcY = srcY;
    this.swidth = spritewidth / col;
    this.sheight = spriteheight / row;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = img;
    this.moveleftZ = false;
    this.type = type;
    this.curFrame = 0;
    this.frameCount = col;
    this.bounce = 0.3;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.keyMoveUp = false;
  }
  draw() {
    // this.updateFrame()
    let ctx = canvas.getContext("2d");
    ctx.drawImage(
      this.image,
      this.srcX,
      this.srcY,
      this.swidth,
      this.sheight,
      this.x,
      this.y,
      this.width,
      this.height
    );

    // if (this.type == "zombie") {
    //   this.updateFrame();
    //   ctx.drawImage(
    //     this.image,
    //     this.srcX,
    //     this.srcY,
    //     this.swidth,
    //     this.sheight,
    //     this.x,
    //     this.y,
    //     this.width,
    //     this.height
    //   );
    // } else {
    //   if (moveleft) {
    //     this.shiftRow(3);
    //     this.updateFrame();
    //     ctx.drawImage(
    //       this.image,
    //       this.srcX,
    //       this.srcY,
    //       this.swidth,
    //       this.sheight,
    //       this.x,
    //       this.y,
    //       this.width,
    //       this.height
    //     );
    //   } else if (moveright) {
    //     faceleft = false;
    //     this.shiftRow(2);
    //     this.updateFrame();
    //     ctx.drawImage(
    //       this.image,
    //       this.srcX,
    //       this.srcY,
    //       this.swidth,
    //       this.sheight,
    //       this.x,
    //       this.y,
    //       this.width,
    //       this.height
    //     );
    //   } else if (jump) {
    //     this.shiftRow(1);
    //     this.updateFrame();
    //     ctx.drawImage(
    //       this.image,
    //       this.srcX,
    //       this.srcY,
    //       this.swidth,
    //       this.sheight,
    //       this.x,
    //       this.y,
    //       this.width,
    //       this.height
    //     );
    //   } else {
    //     if (faceleft) {
    //       this.srcY = 0;
    //       this.shiftCol(2);
    //     } else {
    //       this.srcY = 0;
    //       this.srcX = 0;
    //     }
    //     ctx.drawImage(
    //       this.image,
    //       this.srcX,
    //       this.srcY,
    //       this.swidth,
    //       this.sheight,
    //       this.x,
    //       this.y,
    //       this.width,
    //       this.height
    //     );
    //   }
    // }
  }
  updateFrame() {
    if (this.curFrame >= this.frameCount) {
      this.curFrame = 0;
    }
    this.srcX = this.curFrame * this.swidth;
    this.curFrame++;
  }
  shiftRow(row_no) {
    if (row_no == 4 || row_no == 3) {
      this.srcY = row_no * 220;
      return;
    }
    this.srcY = row_no * this.sheight;
  }
  shiftCol(col_no) {
    this.srcX = col_no * this.swidth;
  }
  moveright() {
    this.x += 20;
  }
  moveleft() {
    this.x -= 20;
  }
  moveup() {
    if (!this.keyMoveUp) {
      this.gravitySpeed = -52;
      this.gravity = +12;
      return (this.keyMoveUp = true);
    }
  }
  hitbottom() {
    let rockbottom = CANVAS_HEIGHT - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      return (this.keyMoveUp = false);
    }
  }
  hitBorder() {
    let rightborder = CANVAS_WIDTH - this.width;

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.x > rightborder) {
      this.x = rightborder;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  }
  newpos() {
    this.gravitySpeed += this.gravity;
    this.y += this.gravitySpeed;
  }
  landOn(otherobj) {
    if (otherobj.type == "ground" || otherobj.type == "box") {
      let rockbottom = otherobj.y - this.height; //this.y=otherobj.y-this.height

      if (
        this.x + this.width > otherobj.x &&
        this.x < otherobj.x + otherobj.width
      ) {
        if (
          this.y > rockbottom &&
          this.y + this.height < otherobj.y + otherobj.height
        ) {
          this.y = rockbottom;

          this.gravitySpeed = -(this.gravitySpeed * this.bounce);
          return (this.keyMoveUp = false);
        }
      }
    }
    if (otherobj.type == "danger") {
      let rockbottom = otherobj.y - this.height; //this.y=otherobj.y-this.height

      if (
        this.x + this.width > otherobj.x &&
        this.x < otherobj.x + otherobj.width
      ) {
        if (
          this.y > rockbottom &&
          this.y + this.height < otherobj.y + otherobj.height
        ) {
          this.y = rockbottom;
          console.log("gameOver");
          gameOver = true;
        }
      }
    }
  }
  crashWith(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width - 50);
    var mytop = this.y;
    var mybottom = this.y + (this.height - 20);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  }
  getsDiamondChk(Diamonds) {
    Diamonds.forEach((Diamond, i) => {
      if (this.crashWith(Diamond)) {
        Diamonds.splice(i, 1);
        i--;
        score += 10;
      }
    });
  }
  zombieMove(ground) {
    if (this.moveleftZ) {
      this.x -= 12;
    } else {
      this.x += 12;
    }
    if (this.x <= ground.x) {
      this.moveleftZ = false;
    }
    if (this.x + this.width >= ground.x + ground.width) {
      this.moveleftZ = true;
    }
  }
}
