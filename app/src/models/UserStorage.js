"use strict";

class UserStorage {
  static #users = {
    id: ["Nemoo", "yeeSiSi", "Bettoo"],
    psWord: ["1234", "12345", "123456"],
    name: ["yurim", "Nemoo", "sisi"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    //console.log(newUsers);
    return newUsers;
  }
}

module.exports = UserStorage;
