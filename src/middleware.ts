// middleware.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    console.log('🔍 Middleware triggered for path:', path)

    //public path -> skip
    if (publicPath.includes(path)) {
        return NextResponse.next()
    }

    //check token for private route
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    //decode token and check expiery 
    if (token) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/login', request.url))

}

export const config = {
    // matcher: ['/member/:path*'],
}
const publicPath = ['/', '/login', '/signup']