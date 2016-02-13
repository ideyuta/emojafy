/* eslint-disable new-cap */
import VerEx from 'verbal-expressions';
import emoja from './emoja';

/**
 * emojafy
 *
 * @param {string} text - text
 * @return {string}
 */
export default function emojafy(text) {
  let result = text;
  Object.keys(emoja).forEach(emoji => {
    const ja = emoja[emoji];
    let i = 0;
    while (i < ja.length) {
      result = VerEx().find(ja[i]).replace(result, emoji);
      i++;
    }
  });
  return result;
}
