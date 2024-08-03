import Sidebar from "@/components/Sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex  w-screen justify-start">
      <div className="z-50 ">
        <Sidebar />
      </div>
      {children}
    </section>
  );
}
