import { v4 as uuidv4 } from "uuid";

// Class to handle all user operations
export class User {
  users = [];
  errors = {};

  constructor() {
    this.errors = {};
    const userStrData = localStorage.getItem("users");

    if (!userStrData) {
      this.users = [];
    } else {
      const usersParsedData = JSON.parse(userStrData);
      this.users = usersParsedData;
    }
    console.log("users");
    console.log(this.users);
  }

  saveToStorage(userArr) {
    localStorage.setItem("users", JSON.stringify(userArr));
  }

  create(userObj) {
    const user = this.findByEmail(userObj.email);
    if (user) {
      this.errors.email = "email already registered";
      return;
    }
    userObj.id = uuidv4();
    userObj.createdAt = new Date(Date.now()).toISOString();
    userObj.role = "user";
    this.users.push(userObj);

    this.saveToStorage(this.users);
    return userObj;
  }

  createAdmin(userObj) {
    const user = this.findByEmail(userObj.email);
    if (user) {
      this.errors.email = "email already registered";
      return;
    }
    userObj.id = uuidv4();
    userObj.createdAt = new Date(Date.now()).toISOString();
    userObj.role = "admin";
    this.users.push(userObj);

    this.saveToStorage(this.users);
    return userObj;
  }

  findById(id) {
    let user;

    this.users.map((usr) => {
      if (usr.id === id) {
        user = usr;
      }
    });
    return user;
  }

  findByEmail(email) {
    let user;

    this.users.map((usr) => {
      if (usr.email === email) {
        user = usr;
      }
    });
    return user;
  }

  findAll() {
    return this.users;
  }

  update(userObj) {
    let user = this.findById(userObj.id);
    if (!userObj.id) {
      this.errors.id = "Please provide user id";
      return;
    }
    if (user.email !== userObj.email) {
      user = this.findByEmail(userObj.email);
      if (user) {
        this.errors.email = "Can't update to already registered email";
        return;
      }
    }
    const updatedUsers = this.users.map((user) => {
      // If user has matching ID, replace with new object
      if (user.id === userObj.id) {
        return Object.assign({}, user, userObj);
      }
      // If user does not have matching ID, return original object
      return user;
    });

    this.saveToStorage(updatedUsers);
    return userObj;
  }

  delete(id) {
    if (!id) {
      this.errors.id = "Please provide user id";
      return;
    }
    const updatedUsers = this.users.filter((user) => user.id !== id);
    console.log("updatedUsers after deleting!");
    console.log(updatedUsers);
    this.saveToStorage(updatedUsers);
  }

  updatePassword(userObj) {
    userObj.password = userObj.newPassword;

    delete userObj["confirmPassword"];
    delete userObj["newPassword"];

    if (!userObj.id) {
      this.errors.id = "Please provide user id";
      return;
    }
    const updatedUsers = this.users.map((user) => {
      // If user has matching ID, replace with new object
      if (user.id === userObj.id) {
        return Object.assign({}, user, userObj);
      }
      // If user does not have matching ID, return original object
      return user;
    });

    this.saveToStorage(updatedUsers);
    return userObj;
  }
}
