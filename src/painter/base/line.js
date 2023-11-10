export const lineSingle = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.beginPath();
  context.moveTo(100, 100); // move pencil
  context.lineTo(200, 200);
  context.strokeStyle = '#fff';
  context.stroke();
};

export const lineMultiple = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.beginPath();
  context.moveTo(100, 50);
  context.lineTo(150, 100);
  context.lineTo(100, 150);
  context.lineTo(150, 200);
  context.lineTo(100, 250);
  context.strokeStyle = '#fff';
  context.stroke();
};

export const lineFill = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.beginPath();
  context.moveTo(100, 50);
  context.lineTo(150, 100);
  context.lineTo(100, 150);
  context.lineTo(150, 200);
  context.lineTo(100, 250);
  context.fillStyle = 'pink';
  context.fill();
};

export const lineWidth = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.lineWidth = 15;

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(200, 200);
  context.strokeStyle = '#fff';
  context.stroke();
}

export const lineCap = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.lineWidth = 15;

  ['butt', 'round', 'square'].forEach((cap, index) => {
    context.lineCap = cap;
    context.beginPath();
    context.moveTo(50, 50 * (index + 1));
    context.lineTo(200, 50 * (index + 1));
    context.strokeStyle = '#fff';
    context.stroke();
  });
};

export const lineJoin = ({ canvas }) => {
  const context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  canvas.style.backgroundColor = '#000';

  context.lineWidth = 10;
  ['round', 'bevel', 'miter'].forEach((join, index) => {
    context.lineJoin = join;
    context.beginPath();
    context.moveTo(10, 20 + index * 40);
    context.lineTo(50, 60 + index * 40);
    context.lineTo(90, 20 + index * 40);
    context.lineTo(130, 60 + index * 40);
    context.lineTo(170, 20 + index * 40);
    context.strokeStyle = '#fff';
    context.stroke();
  });
};
