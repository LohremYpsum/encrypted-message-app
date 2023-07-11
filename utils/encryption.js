import CryptoJS from 'crypto-js';

export const encryptMessage = (firstName, lastName, email, message) => {
  const keymessage = `${message}`; // Hier kann Ihre tatsächliche Nachricht stehen
  const key = `${firstName}${lastName}${email}`;
  const encrypted = CryptoJS.AES.encrypt(keymessage, key).toString();
  return encrypted;
};
