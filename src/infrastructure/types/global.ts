export type UseCaseResponse<T = unknown> = {
  status:
    | "success"
    | "error"
    | "verification_required"
    | "unauthorized"
    | "login_required";
  message: string;
  data?: T;
};

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        email: string;
        role: "Admin" | "User";
        token: string;
      };
    }
  }
}
