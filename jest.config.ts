import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: { "^.+\\.tsx?$": "ts-jest" },
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(test|spec).ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"],
  coverageProvider: "v8",
};

export default config;
