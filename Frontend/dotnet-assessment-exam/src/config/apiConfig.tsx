import { Configuration } from "../api";

export const apiConfig: Configuration = {
  basePath: process.env.REACT_APP_API_BASE_URL,
  isJsonMime: function (mime: string): boolean {
    return true;
  },
};
