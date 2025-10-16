import { Providers, Roles } from "../../infrastructure/types/enums";
import { Email } from "../value objects/Email";
import { Name } from "../value objects/Name";
import { Password } from "../value objects/Password";

class User {
  private constructor(
    private name: Name,
    private email: Email,
    private password: string,
    private verified = false,
    private role: Roles = Roles.USER,
    private provider: Providers | null = null,
    private googleId: string | null = null,
    private avatarUrl: string | null = null,
    private createdAt: Date = new Date(),
    private updatedAt: Date = new Date()
  ) {}

  static create(
    name: string,
    email: string,
    password: string,
    role?: Roles,
    provider?: Providers,
    googleId?: string,
    avatarUrl?: string
  ) {
    return new User(
      Name.create(name),
      Email.create(email),
      password,
      false,
      role ?? Roles.USER,
      provider ?? null,
      googleId ?? null,
      avatarUrl ?? null
    );
  }

  public getVO() {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
      provider: this.provider,
      googleId: this.googleId,
      avatarUrl: this.avatarUrl,
      verified: this.verified,
    };
  }

  public getDTO() {
    return {
      name: this.name.getName(),
      email: this.email.getEmail(),
      password: this.password,
      role: this.role,
      provider: this.provider,
      googleId: this.googleId,
      avatarUrl: this.avatarUrl,
      verified: this.verified,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  public activate() {
    if (this.verified) throw new Error("Usuário já verificado");
    this.verified = true;
  }

  public updateTimestamps() {
    this.updatedAt = new Date();
  }
}

export { User };
