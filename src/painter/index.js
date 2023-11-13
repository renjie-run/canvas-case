import { availableOperators } from './register';

export const painter = ({ type, canvas, ...restParams }) => {
  const draw = availableOperators[type];
  if (!canvas || !draw) {
    return;
  }
  draw({ canvas, ...restParams });
};
