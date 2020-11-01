const sodium = require("libsodium-wrappers");

(async () => {
    await sodium.ready;
  })();

  module.exports = (key = undefined) => {
    return Object.freeze({
      decrypt: (ciphertext, nonce) => {
        return sodium.crypto_secretbox_open_easy(ciphertext, nonce, key);
      },
    });
  };