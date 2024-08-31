export { auth as middleware } from '@/lib/auth';

export const config = {
  /*
   * Secure the following routes. Users who try to go to these routes without authenticating
   * will be redirected to the sign-in page.
   */
  matcher: ['/movies', '/watchlist'],
};
