import runIndexAt from './runIndexAt';

/**
 * Filter runs contained between start and end
 *
 * @param {number}  start
 * @param {number}  end
 * @param {Object[]}   runs
 * @returns {Object} filtered runs
 */
const filter = (start, end, runs) => {
  const startIndex = runIndexAt(start, runs);
  const endIndex = Math.max(runIndexAt(end - 1, runs), startIndex);

  return runs.slice(startIndex, endIndex + 1);
};

export default filter;
