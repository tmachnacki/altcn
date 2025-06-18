import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <Header />
      <div className="relative flex-1">{children}</div>
      <Footer />
    </div>
  );
}
