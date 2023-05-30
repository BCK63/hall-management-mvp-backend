/* eslint-disable import/prefer-default-export */
/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 */
export const success = (message, results) => {
  return {
    message,
    results,
  };
};
