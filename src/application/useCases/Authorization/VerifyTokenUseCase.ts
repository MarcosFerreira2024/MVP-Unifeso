import { inject, injectable } from "tsyringe";
import { ITokenProvider } from "../../../domain/interfaces/ITokenProvider";

@injectable()
class VerifyTokenUseCase {
  constructor(@inject("TokenProvider") private tokenProvider: ITokenProvider) {}

  async execute(token: string) {
    return await this.tokenProvider.verify(token);
  }
}

export { VerifyTokenUseCase };
