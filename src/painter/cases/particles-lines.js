const frequency = 100;
const MAX_PARTICLES = 100;
const INIT_NUM = MAX_PARTICLES;
let timeToRecreate = false;
let particles = [];

class Particle {

  constructor(ctx, canvasWidth, canvasHeight) {
    const colors = ['#feea00', '#a9df85', '#5dc0ad', '#ff9a00', '#fa3f20'];
    const types  = ['full', 'fill', 'empty'];
    this.random = Math.random();
    this.ctx = ctx;
    this.progress = 0;

    this.x = (canvasWidth / 2)  + (Math.random() * 200 - Math.random() * 200);
    this.y = (canvasHeight / 2) + (Math.random() * 200 - Math.random() * 200);
    this.w = canvasWidth;
    this.h = canvasHeight;
    this.radius = 1 + (8 * this.random);
    this.type = types[this.randomIntFromInterval(0, types.length-1)];
    this.color = colors[this.randomIntFromInterval(0, colors.length-1)];
    this.a = 0;
    this.s = (this.radius + (Math.random() * 1)) / 10;
  }

  getCoordinates() {
    return {
      x: this.x,
      y: this.y
    };
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    // Create arc
    const lineWidth = 0.2 + (2.8*this.random);
    const color = this.color;
    switch(this.type) {
      case 'full': {
        this.createArcFill(this.radius, color);
        this.createArcEmpty(this.radius + lineWidth, lineWidth / 2, color);
        break;
      }
      case 'fill': {
        this.createArcFill(this.radius, color);
        break;
      }
      case 'empty': {
        this.createArcEmpty(this.radius, lineWidth, color);
        break;
      }
      default: {
        break;
      }
    }
  }

  createArcFill(radius, color) {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  createArcEmpty(radius, lineWidth, color) {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  move() {
    this.x += Math.cos(this.a) * this.s;
    this.y += Math.sin(this.a) * this.s;
    this.a += Math.random() * 0.4 - 0.2;

    if(this.x < 0 || this.x > this.w - this.radius) {
      return false
    }

    if(this.y < 0 || this.y > this.h - this.radius) {
      return false
    }
    this.render();
    return true;
  }

  calculateDistance(v1, v2){
    const x = Math.abs(v1.x - v2.x);
    const y = Math.abs(v1.y - v2.y);
    return Math.sqrt((x * x) + (y * y));
  }
}

const clear = (ctx, canvasWidth, canvasHeight) => {
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
};

const connection = ({ particles, ctx }) => {
  let oldParticle = null
  particles.forEach((particle, index) => {
    if (index > 0) {
      let box1 = oldParticle.getCoordinates()
      let box2 = particle.getCoordinates()
      ctx.beginPath();
      ctx.moveTo(box1.x,box1.y);
      ctx.lineTo(box2.x,box2.y);
      ctx.lineWidth = 0.45;
      ctx.strokeStyle="#3f47ff";
      ctx.stroke();
      ctx.closePath();
    }
    oldParticle = particle;
  });
};

/**
 * clear layer canvas
 * @param {number} num number of particles`
 */
const popolate = (num, ctx, canvasWidth, canvasHeight) => {
  for (let i = 0; i < num; i++) {
    setTimeout(((x) => {
      return () => {
        // Add particle
        particles.push(new Particle(ctx, canvasWidth, canvasHeight));
      };
    })(i), frequency * i);
  }
  return particles.length
};

const draw = ({ ctx, canvasWidth, canvasHeight, timeToRecreate }) => {
  clear(ctx, canvasWidth, canvasHeight);
  connection({ ctx, particles })
  particles = particles.filter((particle) => particle.move());

  // Recreate particles
  if(timeToRecreate){
    if(particles.length < INIT_NUM){
      popolate(1, ctx, canvasWidth, canvasHeight);
    }
  }
  window.requestAnimationFrame(draw.bind(this, { ctx, canvasWidth, canvasHeight, particles, timeToRecreate }));
};

const particlesAndLines = ({ canvas, canvasWrapper }) => {
  if (!canvasWrapper) {
    return;
  }
  const canvasWidth = canvasWrapper.offsetWidth;
  const canvasHeight = canvasWrapper.offsetHeight;

  canvas.width = canvasWidth;
	canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d');

  timeToRecreate = false;
  particles = [];

  // Enable repopolate
  setTimeout(() => {
    timeToRecreate = true;
  }, frequency * MAX_PARTICLES);

  // Popolate particles
  popolate(100, ctx, canvasWidth, canvasHeight);

  draw({ ctx, canvasWidth, canvasHeight, particles, timeToRecreate });
};

export {
  particlesAndLines,
};
