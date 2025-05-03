import Header from "@/componenets/layouts/Header";
import Sidebar from "@/componenets/layouts/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
