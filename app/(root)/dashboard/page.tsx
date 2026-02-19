import DashboardCard from "@/components/dashboard/dashboardCard";
import PageHeader from "@/components/dashboard/pageHeadert";
import { CheckCheckIcon, TrophyIcon } from "lucide-react";
import React from "react";

function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto p-4">
      <PageHeader
        title="My Dashboard"
        subtitle="Your training overview and progress"
      />
      <div className="flex flex-wrap gap-10 mt-6">
        <DashboardCard
          icon={<CheckCheckIcon className="w-6 h-6" />}
          percentChange="+12%"
          count={245}
          description="Finished Training"
        />

        <DashboardCard
          icon={<TrophyIcon className="w-6 h-6" />}
          percentChange="+8%"
          count={120}
          description="Topic Completed"
        />
      </div>
    </div>
  );
}

export default Dashboard;
