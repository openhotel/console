import { ConfigTypes } from "shared/types/config.types.ts";

export const CONFIG_DEFAULTS: ConfigTypes = {
  version: "latest",
  port: 9400,
  auth: {
    api: "http://localhost:2024/api/v3",
    token: "PRIVATE_TOKEN",
  },
};
