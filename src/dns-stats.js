const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsMap = new Map();
  for (let domain of domains) {
    let domainTop = '';
    for (let item of domain.split('.').reverse()) {
      domainTop += '.' + item;
      let count = domainsMap.get(domainTop);
      if (count) {
        domainsMap.set(domainTop, count + 1);  
      } else {
        domainsMap.set(domainTop, 1);
      }
    }
  }
  return Object.fromEntries(domainsMap.entries());
}

module.exports = {
  getDNSStats
};
