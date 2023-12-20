const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let keyInd = 0;
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) {
        res += char;
        continue;
      }
      const shift = key[keyInd % key.length].charCodeAt(0) - 65; // 65 - charCode 'A'
      const encryptedChar = String.fromCharCode((char.charCodeAt(0) + shift - 65 + 26) % 26 + 65);
      res += encryptedChar;
      keyInd++;
    }
    return this.direct ? res : res.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let keyInd = 0;
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) {
        res += char;
        continue;
      }
      const shift = 65 - key[keyInd % key.length].charCodeAt(0); // 65 - charCode 'A'
      const encryptedChar = String.fromCharCode((char.charCodeAt(0) + shift - 65 + 26) % 26 + 65);
      res += encryptedChar;
      keyInd++;
    }
    return this.direct ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
