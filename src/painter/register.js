import { DRAW_TYPE } from '../constants/painter';
import { circleFill, circleStroke } from './base/circle';
import {
  lineCap, lineFill, lineJoin, lineMultiple, lineSingle, lineWidth,
} from './base/line';
import { styleCreateLinearGradient, styleShadow } from './base/style-uses';
import { transRotate, transScale } from './base/trans-uses';
import { cachedRounds, movingRounds, randomRounds, roundsFollowingMouse } from './base/random-rounds';
import { meteorsAndStars } from './cases/meteors-stars';
import { growingTree } from './cases/growing-tree';
import { particlesAndLines } from './cases/particles-lines';

let availableOperators = Object.create(null);

const registerOperator = (symbol, operator) => {
  availableOperators[symbol] = operator;
};

registerOperator(DRAW_TYPE.LINE_SINGLE, lineSingle);
registerOperator(DRAW_TYPE.LINE_MULTIPLE, lineMultiple);
registerOperator(DRAW_TYPE.LINE_FILL, lineFill);
registerOperator(DRAW_TYPE.LINE_WIDTH, lineWidth);
registerOperator(DRAW_TYPE.LINE_CAP, lineCap);
registerOperator(DRAW_TYPE.LINE_JOIN, lineJoin);
registerOperator(DRAW_TYPE.CIRCLE_FILL, circleFill);
registerOperator(DRAW_TYPE.CIRCLE_STROKE, circleStroke);
registerOperator(DRAW_TYPE.TRANS_ROTATE, transRotate);
registerOperator(DRAW_TYPE.TRANS_SCALE, transScale);
registerOperator(DRAW_TYPE.STYLE_SHADOW, styleShadow);
registerOperator(DRAW_TYPE.STYLE_CREATE_LINEAR_GRADIENT, styleCreateLinearGradient);
registerOperator(DRAW_TYPE.RANDOM_ROUNDS, randomRounds);
registerOperator(DRAW_TYPE.MOVING_ROUNDS, movingRounds);
registerOperator(DRAW_TYPE.ROUNDS_FOLLOWING_MOUSE, roundsFollowingMouse);
registerOperator(DRAW_TYPE.CACHED_ROUNDS, cachedRounds);
registerOperator(DRAW_TYPE.METEORS_STARS, meteorsAndStars);
registerOperator(DRAW_TYPE.GROWING_TREE, growingTree);
registerOperator(DRAW_TYPE.PARTICLES_LINES, particlesAndLines);

export { availableOperators };
