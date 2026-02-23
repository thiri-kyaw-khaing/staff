import PageHeader from "@/components/dashboard/pageHeadert";
import { BellIcon } from "lucide-react";
import React from "react";

function NotificationPage() {
  return (
    <div className="min-h-screen space-y-4 m-2">
      <PageHeader title="Notifications" subtitle="View your notifications" />

      <NotificationCard
        icon={<BellIcon />}
        title="New Message"
        subtitle="You have received a new message."
      />
    </div>
  );
}

export default NotificationPage;

function NotificationCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border rounded-md p-4 flex items-center space-x-4 mt-4 border-[#006022]">
      {icon}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
