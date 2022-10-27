// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest, response: NextResponse) {
  console.log("I am in the middleware");
  console.log("Requested URL: ", request.url);

  console.log("Location: ", request.geo?.city, request.geo?.country );
  console.log("Latitude: ", request.geo?.latitude);
  console.log("Longitude: ", request.geo?.longitude);

  console.log("HTTP Method: ", request.method);
  console.log("IP: ", request.ip);

  console.log("Credentials: ", request.credentials);
  console.log("Referrer: ", request.referrer);

  return;

}

export const config = {
  matcher: '/',
}