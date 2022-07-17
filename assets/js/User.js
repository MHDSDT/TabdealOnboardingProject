export default class User {
  static allUsers = {};

  constructor(phoneNumber, password) {
    this._phoneNumber = phoneNumber;
    this._password = password;
    User.allUsers[phoneNumber] = this;
    console.log(`User ${phoneNumber} with password ${password} created!`);
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  get password() {
    return this._password;
  }

  set phoneNumber(value) {
    this._phoneNumber = value;
  }

  set password(value) {
    this._password = value;
  }
}
