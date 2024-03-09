import type { H3Event } from "h3";
import { verify } from "jsonwebtoken";

export interface AuthPayload {
  sub: number;
  email: string;
  role: "ADMIN " | "MANAGER" | "MEMBER";
}

export function ensureAuth(event: H3Event) {
  const err = createError({ statusCode: 401, statusMessage: "Please login" });
  const { accessToken: { secretKey } } = useRuntimeConfig();
  const sessionToken = getCookie(event, 'auth.token');
  console.log(sessionToken)
  if (!sessionToken) 
    throw err;

  try {
    return verify(sessionToken, secretKey) as unknown as AuthPayload;
  } 
  catch {
    throw err;
  }
}
