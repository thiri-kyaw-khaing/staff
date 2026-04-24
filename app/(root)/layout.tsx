import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/appSideBar";
import { getMe } from "@/lib/api/getMe";
import { MenuIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const me = await getMe();
  const user = me?.user;

  if (!user) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar: fixed on lg+, drawer on mobile */}
        <AppSidebar
          user={{
            name: user.name,
            position: user.position,
            employeeID: user.employeeID,
          }}
        />

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
