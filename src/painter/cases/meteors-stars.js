const meteorsAndStars = ({ canvas, canvasWrapper }) => {
  if (!canvasWrapper) {
    return;
  }
  const wrapperWidth = canvasWrapper.offsetWidth;
  const wrapperHeight = canvasWrapper.offsetHeight;
  canvas.width = wrapperWidth;
  canvas.height = wrapperHeight;
  canvas.style.backgroundColor = '#000';
  const context = canvas.getContext('2d');

  const MAX_STARS = 500;
  let stars = [];
  let rnd = -1;
  for (let i = 0; i < MAX_STARS; i++) {
    stars.push({
      x: Math.round(Math.random() * wrapperWidth),
      y: Math.round(Math.random() * wrapperHeight),
      r: Math.random() * 3,
      ra: Math.random() * 0.05,
      alpha: Math.random(),
      vx: Math.random() * 0.2 - 0.1,
			vy: Math.random() * 0.2 - 0.1,
    });
  }

  function meteors() {
    const time = Math.round(Math.random() * 3000 + 33);
    setTimeout(function(){
      rnd = Math.ceil(Math.random() * stars.length)
      meteors();
    }, time);
  }

  function render() {
    context.fillStyle = 'rgba(0, 0, 0, .1)';
		context.fillRect(0, 0, wrapperWidth, wrapperHeight);
    let nextStars = [];
    stars.forEach((star, index) => {
      let nextStar = { ...star };
      if(index === rnd){
        nextStar.vx = -5;
        nextStar.vy = 20;
        context.beginPath();
        context.strokeStyle = `rgba(255, 255, 255, ${nextStar.alpha})`;
        context.lineWidth = nextStar.r;
        context.moveTo(nextStar.x, nextStar.y);
        context.lineTo(nextStar.x + nextStar.vx, nextStar.y + nextStar.vy);
        context.stroke();
        context.closePath();
      }

      // change alpha
      nextStar.alpha += nextStar.ra;
      if(nextStar.alpha <= 0){
        nextStar.alpha = 0;
        nextStar.ra = -nextStar.ra;
        nextStar.vx = Math.random() * 0.2 - 0.1;
        nextStar.vy = Math.random() * 0.2 - 0.1;
      } else if(nextStar.alpha > 1){
        nextStar.alpha = 1;
        nextStar.ra = -nextStar.ra;
      }

      // change x
      nextStar.x += nextStar.vx;
      if(nextStar.x >= wrapperWidth){
        nextStar.x = 0;
      } else if (nextStar.x < 0){
        nextStar.x = wrapperWidth;
        nextStar.vx = Math.random() * 0.2 - 0.1;
        nextStar.vy = Math.random() * 0.2 - 0.1;
      }

      // change y
      nextStar.y += nextStar.vy;
      if(nextStar.y >= wrapperHeight){
        nextStar.y = 0;
        nextStar.vy = Math.random() * 0.2 - 0.1;
        nextStar.vx = Math.random() * 0.2 - 0.1;
      } else if (nextStar.y < 0) {
        nextStar.y = wrapperHeight;
      }

      // draw star
      context.beginPath();
      const bg = context.createRadialGradient(nextStar.x, nextStar.y, 0, nextStar.x, nextStar.y, nextStar.r);
      bg.addColorStop(0, `rgba(255, 255, 255, ${nextStar.alpha}`);
      bg.addColorStop(1, 'rgba(255, 255, 255, 0');
      context.fillStyle = bg;
      context.arc(nextStar.x, nextStar.y, nextStar.r, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
      nextStars.push(nextStar);
    });
    stars = nextStars;
  };

  setInterval(render, 33);
  meteors();
};

export { meteorsAndStars };
