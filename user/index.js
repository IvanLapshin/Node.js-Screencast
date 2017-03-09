let db = require('db');
let log = require('logger')(module);

class User {
  constructor(name) {
    this._name = name;
  }

  hello(who) {
    log(db.getPhrase("Hello") + ", " + who._name);
  }
}

module.exports = User;
