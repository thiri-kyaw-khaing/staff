import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/appSideBar";
import { MenuIcon } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar: fixed on lg+, drawer on mobile */}
        <AppSidebar />

        {/* Main content area */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Mobile header with hamburger toggle */}
          <header className="flex items-center gap-2 border-b px-4 py-3 lg:hidden">
            <SidebarTrigger className="size-8">
              <MenuIcon className="size-5" />
              <span className="sr-only">Toggle sidebar</span>
            </SidebarTrigger>
            <span className="text-sm font-semibold">Staff Portal</span>
          </header>

          {/* Scrollable page content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
