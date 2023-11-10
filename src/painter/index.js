import { availableOperators } from './register';

export const painter = ({ type, canvas, ...restParams }) => {
  const draw = availableOperators[type];
  if (!canvas || !draw) {
    return;
  }
  draw({ canvas, ...restParams });
};

export const clearCanvas = (canvas) => {
  if (!canvas) {
    return;
  }
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, width, height)
  canvas.width = 'unset';
  canvas.height = 'unset';
  canvas.style.backgroundColor = 'unset';
};
