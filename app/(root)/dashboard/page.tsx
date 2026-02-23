import DashboardCard from "@/components/dashboard/dashboardCard";
import PageHeader from "@/components/dashboard/pageHeadert";
import { CheckCheckIcon, TrophyIcon } from "lucide-react";
import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen overflow-y-auto p-4">
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

      {/* Training Calendar */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight">Training Calendar</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Upcoming training sessions and events
        </p>
        <div className="mt-4 w-full rounded-2xl shadow-md border overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0"
            className="w-full h-[500px] md:h-[600px]"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
