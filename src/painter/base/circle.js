export const circleFill = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.fillStyle = '#fff';
  context.fill();
};

export const circleStroke = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 0.5, false);
  context.strokeStyle = 'white';
  context.stroke();
};
