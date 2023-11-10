export const styleShadow = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.fillStyle = '#fff';
  context.shadowColor = '#fff';
  context.shadowBlur = 20;
  context.fill();
};

export const styleCreateLinearGradient = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  const grid = context.createLinearGradient(100, 100, 100, 300);
  grid.addColorStop(0,'rgb(255, 0, 0)');
  grid.addColorStop(0.2,'rgb(255, 165, 0)');
  grid.addColorStop(0.3,'rgb(255, 255, 0)');
  grid.addColorStop(0.5,'rgb(0, 255, 0)');
  grid.addColorStop(0.7,'rgb(0, 127, 255)');
  grid.addColorStop(0.9,'rgb(0, 0, 255)');
  grid.addColorStop(1,'rgb(139, 0, 255)');

  context.fillStyle = grid;
  context.fillRect(100, 100, 200, 200);
};
