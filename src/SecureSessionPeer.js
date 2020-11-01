const nacl = require("libsodium-wrappers");

const Decryptor = require("./Decryptor.js");

module.exports = () => {
  return Object.freeze({
    publicKey: () => {
      return nacl.randombytes_buf(sodium.crypto_sign_PUBLICKEYBYTES);
    },
    privateKey: undefined,
    encrypt: (msg) => {
      const nonce = nacl.randombytes_buf(nacl.crypto_secretbox_NONCEBYTES);
      const ciphertext = nacl.crypto_secretbox_easy(
        msg,
        nonce,
        nacl.crypto_secretbox_keygen()
      );
      return { nonce, ciphertext };
    },
    decrypt: (ciphertext, nonce) => {
      return nacl.crypto_secretbox_open_easy(ciphertext, nonce, nacl.randombytes_buf(nacl.crypto_sign_PUBLICKEYBYTES));
    },
    send: () => {

    },
    receive: () => {
        
    }
  });
};
