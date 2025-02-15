import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-12 items-center border-b border-border bg-background/90 py-2 backdrop-blur-sm">
      <Container className="flex items-center gap-12">
        <Link href="/" className="inline-block leading-none">
          <span className="text-lg font-bold text-foreground">altcn</span>
        </Link>

        <nav className="block flex-1">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>

        <ul className="ml-auto block">
          <li>
            <ModeToggle />
          </li>
        </ul>
      </Container>
    </header>
  );
}
