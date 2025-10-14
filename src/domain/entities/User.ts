import { Email } from "../value objects/Email";
import { Name } from "../value objects/Name";

class User {
  private constructor(private name: Name, private email: Email) {}

  static create(name: string, email: string) {
    return new User(Name.create(name), Email.create(email));
  }

  public getVO() {
    return {
      name: this.name,
      email: this.email,
    };
  }

  public getDTO() {
    return {
      name: this.name.getName(),
      email: this.email.getEmail(),
    };
  }
}

export { User };
