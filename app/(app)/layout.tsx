import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="relative flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
