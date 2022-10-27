// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest, response: NextResponse) {
  console.log("I am in the middleware");
  console.log("\nRequested URL: ", request.url,
    "\nLocation: ", request.geo?.city, request.geo?.country,
    "\nLatitude: ", request.geo?.latitude,
    "\nLongitude: ", request.geo?.longitude,
    "\nHTTP Method: ", request.method,
    "\nIP: ", request.ip,
  );

  return;
}

export const config = {
  matcher: '/',
}