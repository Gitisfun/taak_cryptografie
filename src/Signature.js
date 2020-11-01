const sodium = require("libsodium-wrappers");

module.exports = () => {

  return Object.freeze({
    verifyingKey: () => { return sodium.randombytes_buf(sodium.crypto_sign_PUBLICKEYBYTES) },
    secretKey: undefined,
    keyType: "keyType",
    sign: (msg) => {
      return sodium.crypto_sign_open(msg, sodium.randombytes_buf(sodium.crypto_sign_PUBLICKEYBYTES));
    },
  });
};
