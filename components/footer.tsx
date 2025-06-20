import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

const socialLinks = [
  {
    label: "Website",
    href: "https://timmachnacki.dev",
    icon: GlobeIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/tmachnacki",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/timothy-machnacki",
    icon: LinkedinIcon,
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50">
      <div className="container grid place-items-center gap-3 py-6">
        <div className="text-muted-foreground">
          <p>Made with ☕ by Tim</p>
        </div>
        <ul className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Button
                variant="ghost"
                size="icon-sm"
                asChild
                className="text-muted-foreground hover:text-subtle-foreground"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  aria-label={`Tim's ${link.label} (opens in new tab)`}
                >
                  <link.icon />
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
