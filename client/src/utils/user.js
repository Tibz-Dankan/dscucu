import { v4 as uuidv4 } from "uuid";

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

  delete(id) {
    const updatedUsers = this.users.filter((user) => user.id !== id);
    this.saveToStorage(updatedUsers);
  }

  // TOD0: update user
}
