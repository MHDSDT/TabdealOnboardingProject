export default class User {
  static allUsers = [];

  constructor(phoneNumber, password) {
    this.phoneNumber = phoneNumber;
    this.password = password;
    User.allUsers.push(this);
  }

  static getUserByPhoneNumber(phoneNumber) {
    for (let i = 0; i < User.allUsers.length; i++) {
      if (User.allUsers[i].phoneNumber === phoneNumber) {
        return User.allUsers[i];
      }
    }
    return undefined;
  }
}
