import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function POST(request) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (secret !== process.env.WORDPRESS_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
 
  revalidatePath("/")
  revalidatePath("/blogs")
 
  return NextResponse.json({ revalidated: true, now: Date.now() })
}