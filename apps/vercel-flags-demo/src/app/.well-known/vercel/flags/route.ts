import * as flags from '@/lib/flags';
import { verifyAccess } from '@vercel/flags';
import type { ApiData } from '@vercel/flags';
import { unstable_getProviderData as getProviderData } from '@vercel/flags/next';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(undefined, { status: 401 });

  return NextResponse.json<ApiData>(getProviderData(flags));
}
