class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (strs.length === 0) return "|separator|";

    return strs.join("|separator|");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str === "|separator|") return [];

    return str.split("|separator|");
  }
}
