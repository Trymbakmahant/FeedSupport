import DashbaordNavbar from "@/components/DashbaordNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import VerificationProvider from "./VerificationProvider";
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VerificationProvider>
      <section className="flex  w-screen justify-start">
        <div className="z-50 ">
          <Sidebar />
        </div>

        {children}
      </section>
    </VerificationProvider>
  );
}
