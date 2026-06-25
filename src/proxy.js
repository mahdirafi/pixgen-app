import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers';
 
export async function proxy(request) {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if(!session){
    return NextResponse.redirect(new URL('/signin', request.url))

  }
// console.log("message from proxy");
}
 
 
 
export const config = {
  matcher: ['/all-photos/:path' , '/profile' , '/pricing'],
}