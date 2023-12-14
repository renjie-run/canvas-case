export const DRAW_TYPE = {
  // base
  LINE_SINGLE: 'line_single',
  LINE_MULTIPLE: 'line_multiple',
  LINE_FILL: 'line_fill',
  LINE_WIDTH: 'line_width',
  LINE_CAP: 'line_cap',
  LINE_JOIN: 'line_join',
  CIRCLE_FILL: 'circle_fill',
  CIRCLE_STROKE: 'circle_stroke',
  TRANS_ROTATE: 'trans_rotate',
  TRANS_SCALE: 'trans_scale',
  STYLE_SHADOW: 'style_shadow',
  STYLE_CREATE_LINEAR_GRADIENT: 'style_create_linear_gradient',
  RANDOM_ROUNDS: 'random_rounds',
  MOVING_ROUNDS: 'moving_rounds',
  ROUNDS_FOLLOWING_MOUSE: 'rounds_following_mouse',
  CACHED_ROUNDS: 'cached_rounds',

  // cases
  METEORS_STARS: 'meteors_stars',
  GROWING_TREE: 'growing_tree',
};

export const DEFAULT_DRAW_TYPE = DRAW_TYPE.MOVING_ROUNDS;
