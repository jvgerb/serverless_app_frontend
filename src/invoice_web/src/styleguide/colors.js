/**
 * Named colors.
 */

import { path } from 'ramda';

export const colors = {
  white: '#ffffff',
  strongRed: '#c30017',
  moderateLimeGreen: '#5cb85c',
  buttonFace: 'buttonface'
};


/**
 * Helper colors.
 */

// eslint-disable-next-line
export const color = color => path([color], colors);
