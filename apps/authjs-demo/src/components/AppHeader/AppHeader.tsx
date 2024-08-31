import { MainNav } from './MainNav';
import { UserMenu } from './UserMenu';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container flex h-14 max-w-screen-lg items-center px-4 sm:px-8">
        <MainNav />
        <nav className="flex flex-1 items-center justify-end gap-3">
          <UserMenu />
        </nav>
      </div>
    </header>
  );
}
