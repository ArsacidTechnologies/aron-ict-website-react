const test = () => {
  //console.log('tarun')
  let canvas = document.querySelector("canvas");

  //console.log({canvas});
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let c = canvas.getContext("2d");

  let mouse = {};
  let maxRadius = 40;
  let minRadius = 2;

  window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
  });

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = getRandomColor();

    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      // c.strokeStyle = this.color;
      // c.stroke();
      c.fillStyle = this.color;
      c.fill();
    };
    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      // interactivity
      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        this.radius < maxRadius ? (this.radius += 1) : null;
      } else if (this.radius > minRadius) {
        this.radius -= 1;
      }

      this.draw();
    };
  }

  let circleArr = [];
  for (let i = 0; i < 300; i++) {
    let radius = 30;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = Math.random() - 0.5; // the velocity
    let dy = Math.random() - 0.5; // the velocity

    let circle = new Circle(x, y, dx, dy, radius);
    circleArr.push(circle);
  }

  function animate() {
    // clear the canvas
    c.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(animate);
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update();
    }
  }

  animate();

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};
export default test;
