export const transRotate = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.strokeStyle = '#fff';
  context.rotate(10 * Math.PI / 180)
  context.strokeRect(150, 150, 100, 50);
};

export const transScale = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.strokeStyle = '#fff';
  context.strokeRect(10, 10, 50, 25);
  context.scale(2, 2);
  context.strokeRect(10, 10, 50, 25);
  context.scale(2, 2);
  context.strokeRect(10, 10, 50, 25);
};
