var nspc = require("./index");

function nspcGlobal(namespace) {
  return nspc(namespace, global);
}

module.exports = nspcGlobal;
