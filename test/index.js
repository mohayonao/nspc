var assert = require("assert");
var nspc = require("../");
var wmap = new WeakMap();

assert(
  typeof nspc("System") === "object" && nspc("System") !== null,
  "return an object (but not null)"
);

nspc("System").Console = console;
nspc("System").Collections = wmap;

assert(
  nspc("System.Collections.Generic") === nspc("System.Collections.Generic"),
  "return the same object when given the same namespace"
);

assert(
  nspc("System.Console") === console && nspc("System.Collections") === wmap,
  "return it if already exists"
);

assert(
  nspc("Generic", nspc("System.Collections")) === nspc("Collections.Generic", nspc("System")),
  "receive the specific root space object"
);
