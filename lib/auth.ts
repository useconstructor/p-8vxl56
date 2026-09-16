import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? "dev-secret-change-in-prod");

export async function getUser(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const token = cookie.split(";").find((part) => part.trim().startsWith("session="))?.split("=")[1];
  if (!token) return null;
  try { return (await jwtVerify(token, secret)).payload; } catch { return null; }
}
