import rateLimit from "express-rate-limit";
import type { Request, Response } from "express";

const skipIfTest = () => process.env.NODE_ENV === "test";

function retryAfterHandler(baseMessage: string) {
  return (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resetTime = (req as any).rateLimit?.resetTime as Date | undefined;
    const seconds = resetTime
      ? Math.ceil((resetTime.getTime() - Date.now()) / 1000)
      : 300;
    const minutes = Math.ceil(seconds / 60);
    const timeMessage =
      minutes >= 1
        ? `Tente novamente em ${minutes} minuto${minutes > 1 ? "s" : ""}.`
        : `Tente novamente em ${seconds} segundo${seconds > 1 ? "s" : ""}.`;

    res.status(429).json({
      error: `${baseMessage} ${timeMessage}`,
    });
  };
}

export const authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  handler: retryAfterHandler("Muitas tentativas de autenticação."),
  standardHeaders: true,
  legacyHeaders: false,
  skip: skipIfTest,
});

export const authVerifyLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  handler: retryAfterHandler("Muitas tentativas de verificação."),
  standardHeaders: true,
  legacyHeaders: false,
  skip: skipIfTest,
});

export const ratingLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  handler: retryAfterHandler("Muitas requisições de avaliação."),
  standardHeaders: true,
  legacyHeaders: false,
  skip: skipIfTest,
});

export const adminLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  handler: retryAfterHandler("Muitas requisições administrativas."),
  standardHeaders: true,
  legacyHeaders: false,
  skip: skipIfTest,
});
