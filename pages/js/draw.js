const proxyUrl = "https://corsproxy.io/?";
const targetUrl = "https://brainasium.co.uk/feed/";
const canvas = document.getElementById("draw-canvas");
canvas.style.backgroundColor = "white";
canvas.style.border = "1px solid black";
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
let hungerData = null;

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
        ch2.movement();
        ch2.checkForBoundaries();

        if (hungerData) {
          drawHungerBar(hungerData, ctx);
        }

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

setInterval(() => {
  fetchData();
}, 100000);

fetchData();

function drawHungerBar(data, ctx) {
  const hungerPercentage = data.hunger; // Assuming hunger is a value between 0 and 100

  // Dimensions and styling for the hunger bar
  const barY = 80;
  const barWidth = 600;
  const barHeight = 40;
  const barPadding = 5;
  const barX = canvas.width / 2 - barWidth / 2 + barPadding;
  const barColor = "green"; // Red color for the hunger bar

  // Calculate the width of the hunger bar based on the percentage
  const filledWidth = (barWidth * hungerPercentage) / 100;

  // Draw the outline of the bar
  ctx.fillStyle = "tomato";
  ctx.fillRect(barX, barY, barWidth, barHeight);

  // Draw the filled portion representing hunger
  ctx.fillStyle = barColor;
  ctx.fillRect(
    barX,
    barY + barPadding,
    filledWidth - barPadding * 2,
    barHeight - barPadding * 2
  );
  drawText(
    ctx,
    `Day : ${data.day}`,
    barX + barWidth / 2 - 100,
    barY - 30,
    "100px Arcade"
  );
}
function drawText(
  ctx,
  text,
  x,
  y,
  fontSize = "16px Arial",
  color = "#000",
  textAlign = "left"
) {
  ctx.font = fontSize;
  ctx.fillStyle = color;
  ctx.textAlign = textAlign;
  ctx.fillText(text, x, y);
}
async function fetchData() {
  try {
    const apiUrl = `${proxyUrl}${targetUrl}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);
    hungerData = data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
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
    this.speed = 30;
    this.allDirections = {
      left: { x: -1, y: 0 },
      right: { x: 1, y: 0 },
      up: { x: 0, y: -1 },
      down: { x: 0, y: 1 },
      upLeft: { x: -1, y: -1 },
      upRight: { x: 1, y: -1 },
      downLeft: { x: -1, y: 1 },
      downRight: { x: 1, y: 1 },
    };
    this.currentDirection = this.allDirections.right;
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
  }
  movement() {
    if (this.currentDirection.x !== 0 || this.currentDirection.y !== 0) {
      this.x += this.currentDirection.x * this.speed;
      this.y += this.currentDirection.y * this.speed;

      // Adjust shiftRow based on direction (modify these values according to your needs)
      if (this.currentDirection.x === -1 && this.currentDirection.y === 0) {
        this.shiftRow(1); // Left
      } else if (
        this.currentDirection.x === 1 &&
        this.currentDirection.y === 0
      ) {
        this.shiftRow(2); // Right
      } else if (
        this.currentDirection.x === 0 &&
        this.currentDirection.y === -1
      ) {
        this.shiftRow(0); // Up
      } else if (
        this.currentDirection.x === 0 &&
        this.currentDirection.y === 1
      ) {
        this.shiftRow(0); // Down
      } else if (
        this.currentDirection.x === -1 &&
        this.currentDirection.y === -1
      ) {
        this.shiftRow(4); // Up Left
      } else if (
        this.currentDirection.x === 1 &&
        this.currentDirection.y === -1
      ) {
        this.shiftRow(5); // Up Right
      } else if (
        this.currentDirection.x === -1 &&
        this.currentDirection.y === 1
      ) {
        this.shiftRow(4); // Down Left
      } else if (
        this.currentDirection.x === 1 &&
        this.currentDirection.y === 1
      ) {
        this.shiftRow(5); // Down Right
      }
    }
  }

  checkForBoundaries() {
    let rightborder = canvas.width - this.width;
    let bottomborder = canvas.height - this.height;

    if (
      this.y < 0 ||
      this.y > bottomborder ||
      this.x > rightborder ||
      this.x < 0
    ) {
      // If hitting any boundary, adjust the currentDirection
      this.currentDirection = this.getRandomDirection();

      // Adjust the object's position to stay within the boundaries
      this.x = Math.max(0, Math.min(this.x, rightborder));
      this.y = Math.max(0, Math.min(this.y, bottomborder));
    }
  }

  getRandomDirection() {
    const keys = Object.keys(this.allDirections);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return this.allDirections[randomKey];
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
}
