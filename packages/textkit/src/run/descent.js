import scale from './scale';

/**
 * Get run descent
 *
 * @param {Object}  run
 * @returns {number} descent
 */
const descent = run => {
  const fontDescent = run.attributes?.font?.descent || 0;

  return scale(run) * fontDescent;
};

export default descent;
