import { User } from "./user";
import { v4 as uuidv4 } from "uuid";

const user = new User();

export class Auth {
  auth;
  constructor() {
    this.auth = {};
    this.errors = {};
  }

  saveToStorage(auth) {
    localStorage.setItem("auth", JSON.stringify(auth));
  }

  authenticate(email, password) {
    const user = new User().findByEmail(email);
    if (!user) {
      this.errors.email = "Provided email is not registered!";
      return;
    }

    if (user.password != password) {
      this.errors.password = "Provided incorrect password!";
      return;
    }
    const expiresInHours = 1000 * 60 * 60 * 2;

    user.password = "";
    this.auth.user = user;

    this.auth.token = uuidv4();
    this.auth.expiresAt = new Date(Date.now() + expiresInHours).toISOString();
    this.saveToStorage(this.auth);

    console.log("this.auth");
    console.log(this.auth);
    return true;
  }

  logout() {
    localStorage.removeItem("auth");
  }
}
