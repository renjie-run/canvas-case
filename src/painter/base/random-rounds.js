const INIT_ROUND_POPULATION = 200;

function CreateRound(x, y, useCache = false) {
  this.x = x;
  this.y = y;
  this.r = Math.random() * 2 + 1;
  this.useCache = useCache;

  if (this.useCache) {
    this.cacheCanvas = document.createElement('canvas');
    this.cacheCtx = this.cacheCanvas.getContext('2d');
    this.cacheCtx.width = 6 * this.r;
    this.cacheCtx.height = 6 * this.r;
  }

  const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
  this.color = `rgba(255, 255, 255, ${alpha})`;

  this.draw = function(context) {
    if (this.useCache) {
      context.drawImage(this.cacheCanvas, this.x - this.r, this.y - this.r);
    } else {
      context.fillStyle = this.color;
      context.shadowBlur = this.r * 2;
      context.beginPath();
      context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
    }
  };

  this.moveUp = function(context, maxHeight) {
    this.y -= 0.15;
    if (this.y <= -10) {
      this.y = maxHeight + 10;
    }
    this.draw(context);
  }

  this.cache = function() {
    this.cacheCtx.save();
    this.cacheCtx.fillStyle = this.color;
    this.cacheCtx.shadowColor = '#fff';
    this.cacheCtx.shadowBlur = this.r * 2;
    this.cacheCtx.beginPath();
    this.cacheCtx.arc(this.r * 3, this.r * 3, this.r, 0, 2 * Math.PI);
    this.cacheCtx.closePath();
    this.cacheCtx.fill();
    this.cacheCtx.restore();
  }
  if(this.useCache){
    this.cache();
  }
}

function createRounds(context, wrapperWidth, wrapperHeight, useCache = false) {
  let rounds = [];
  for (let i = 0; i < INIT_ROUND_POPULATION; i++) {
    rounds[i] = new CreateRound(Math.random() * wrapperWidth, Math.random() * wrapperHeight, useCache);
    rounds[i].draw(context);
  }
  return rounds;
}

export const randomRounds = ({ canvas, canvasWrapper }) => {
  if (!canvasWrapper) {
    return;
  }
  const wrapperWidth = canvasWrapper.offsetWidth;
  const wrapperHeight = canvasWrapper.offsetHeight;
  canvas.width = wrapperWidth;
  canvas.height = wrapperHeight;
  canvas.style.backgroundColor = '#000';
  const context = canvas.getContext('2d');

  createRounds(context, wrapperWidth, wrapperHeight);
};

export const movingRounds = ({ canvas, canvasWrapper }) => {
  if (!canvasWrapper) {
    return;
  }
  const wrapperWidth = canvasWrapper.offsetWidth;
  const wrapperHeight = canvasWrapper.offsetHeight;
  canvas.width = wrapperWidth;
  canvas.height = wrapperHeight;
  canvas.style.backgroundColor = '#000';
  const context = canvas.getContext('2d');

  const rounds = createRounds(context, wrapperWidth, wrapperHeight);
  function animate() {
    context.clearRect(0, 0, wrapperWidth, wrapperHeight);
    for (let i = 0; i < INIT_ROUND_POPULATION; i++) {
      rounds[i].moveUp(context, wrapperHeight);
    }
    requestAnimationFrame(animate);
  }

  animate();
};

export const roundsFollowingMouse = ({ canvas, canvasWrapper }) => {
  const wrapperWidth = canvasWrapper.offsetWidth;
  const wrapperHeight = canvasWrapper.offsetHeight;
  canvas.width = wrapperWidth;
  canvas.height = wrapperHeight;
  canvas.style.backgroundColor = '#000';
  const context = canvas.getContext('2d');

  const settings = {
    color: null,
    r: 0.9,
    step: 0.09,
  };

  let rounds = [];
  let fillColor = '';
  let initHSL = 0;
  if (settings.color) {
    fillColor = settings.color;
  } else {
    initHSL = Math.random() * 360;
  }

  window.onmousemove = function(evt) {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    rounds.push({
      mouseX,
      mouseY,
      r: settings.r,
      stay: 1,
    })
  };

  function draw() {
    if (!fillColor) {
      initHSL += 0.1;
      fillColor = `hsl(${initHSL}, 100%, 80%)`;
    }

    context.clearRect(0, 0, wrapperWidth, wrapperHeight);

    for (let i = 0; i < rounds.length; i++) {
      const round = rounds[i];
      const { mouseX, mouseY, r } = round;
      context.fillStyle = fillColor;
      context.beginPath();
      context.arc(mouseX, mouseY, r, 0, Math.PI * 2);
      context.closePath();
      context.fill();

      rounds[i].r += settings.r;
      rounds[i].stay -= settings.step;

      if (rounds[i].stay <= 0) {
        rounds.splice(i, 1);
        i--;
      }
    }
  }

  function animate() {
    draw();
    window.requestAnimationFrame(animate);
  }

  animate();
};

export const cachedRounds = ({ canvas, canvasWrapper }) => {
  if (!canvasWrapper) {
    return;
  }
  const wrapperWidth = canvasWrapper.offsetWidth;
  const wrapperHeight = canvasWrapper.offsetHeight;
  canvas.width = wrapperWidth;
  canvas.height = wrapperHeight;
  canvas.style.backgroundColor = '#000';
  const context = canvas.getContext('2d');
  const useCache = true;

  const rounds = createRounds(context, wrapperWidth, wrapperHeight, useCache);
  function animate() {
    context.clearRect(0, 0, wrapperWidth, wrapperHeight);
    for (let i = 0; i < INIT_ROUND_POPULATION; i++) {
      rounds[i].moveUp(context, wrapperHeight);
    }
    requestAnimationFrame(animate);
  }

  animate();
};
