const sodium = require("libsodium-wrappers");

(async () => {
  await sodium.ready;
})();

module.exports = () => {
    return Object.freeze({
        verify: (hashedpw, pw) => {
            return sodium.crypto_pwhash_str_verify(hashedpw, pw);
        }
    })
}