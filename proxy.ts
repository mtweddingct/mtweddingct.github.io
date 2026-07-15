import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// TODO: Replace with the actual IP address that should have access to voice messages
const ALLOWED_IP = '203.0.113.42'

export function proxy(request: NextRequest) {
  // NOTE: x-forwarded-for can be spoofed in some configurations.
  // For production, ensure your reverse proxy (Vercel, Nginx, etc.) sets this header reliably.
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const ip = forwardedFor?.split(',')[0].trim() ?? realIp ?? ''

  if (ip !== ALLOWED_IP) {
    return NextResponse.redirect(new URL('/forbidden', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/messages/:path*'],
}
