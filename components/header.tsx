import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-12 items-center border-b border-border/50 bg-background/90 py-2 backdrop-blur">
      <Container className="flex items-center gap-12">
        <Link href="/" className="inline-block leading-none">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
            altcn
          </span>
        </Link>

        <nav className="block flex-1">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>
              <Link href="/colors">Colors</Link>
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
