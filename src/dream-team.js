const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members.length) return false;
  let name = '';
  for (let item of members) {
    if (typeof(item) !== 'string') continue;
    name += item.trim()[0].toUpperCase();
  }
  return name.split('').sort((a, b) => a.localeCompare(b)).join('');
}

module.exports = {
  createDreamTeam
};
