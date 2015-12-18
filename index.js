var $root = {};

function nspc(namespace, root) {
  var space = root || $root;
  var parts = namespace.split(".");
  var name;

  while (parts.length) {
    name = parts.shift();
    if (!space[name]) {
      space[name] = {};
    }
    space = space[name];
  }

  return space;
}

module.exports = nspc;
