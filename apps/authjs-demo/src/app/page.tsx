import { MinimalHeader } from '@/components/AppHeader';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

function Content() {
  return (
    <div className="pb-24 pt-6 sm:pb-32 lg:flex-1 lg:pb-0 lg:pt-28">
      <h1 className="animate-slide-up text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
        <span className="block">Unlimited movies</span>
        <span className="block text-primary">anytime, anywhere</span>
      </h1>
      <div className="animate-slide-up [animation-delay:1s] [animation-fill-mode:backwards]">
        <p className="mt-6 text-lg text-muted-foreground xl:text-xl">
          Watch a world of blockbusters, classics, and exclusive originals with
          our premium service.
        </p>
        <div className="mt-10 space-y-2">
          <p className="text-sm text-muted-foreground">New to Movie Magic?</p>
          <Button asChild size="lg">
            <Link href="/sign-up" prefetch={false}>
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage() {
  // if user is authenticated, redirect to movies page
  const session = await auth();
  if (session) {
    redirect('/movies');
  }

  return (
    <div className="mx-auto max-w-2xl px-6">
      <MinimalHeader />
      <Content />
    </div>
  );
}
