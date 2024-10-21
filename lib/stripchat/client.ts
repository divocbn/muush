import ky from "ky";

export const stripchat = ky.create({
  prefixUrl: 'http://localhost:3000/de/stripchat-api',
  throwHttpErrors: false
});
