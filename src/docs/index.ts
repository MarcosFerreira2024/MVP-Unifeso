import { openapi as spec } from "./spec.js";

const baseUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_BRANCH_URL
      ? `https://${process.env.VERCEL_BRANCH_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.API_URL || "http://localhost:3333";

const openapi = {
  ...spec,
  servers: [{ url: baseUrl, description: "API Server" }],
};

export { openapi };
