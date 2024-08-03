"use client";
import React, { useState } from "react";
import {
  ChartSpline,
  HandCoins,
  Heart,
  LayoutDashboard,
  NotebookPen,
} from "lucide-react";
import Sidebars, { SidebarItem } from "./SidebarComponent";
import { useRouter } from "next/navigation";

interface SidebarType {
  activeTab: string | null;
}
const Sidebar = () => {
  const router = useRouter();
  const [tab, setFlag] = useState<SidebarType>({
    activeTab: null,
  });
  const handleOnclickTab = (tabName: string) => {
    setFlag({
      activeTab: tabName === tab.activeTab ? null : tabName,
    });
    router.push(`${tabName}`);
  };

  return (
    <main className="min-w-[50px]">
      <Sidebars>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          active={tab.activeTab === "/dashboard"}
          handleOnclick={() => {
            handleOnclickTab("/dashboard");
          }}
          text="Dashboard"
        />
        <SidebarItem
          icon={<HandCoins size={20} />}
          active={tab.activeTab === "/dashboard/supportform"}
          handleOnclick={() => {
            handleOnclickTab("/dashboard/supportform");
          }}
          text="Support Card"
        />

        <SidebarItem
          active={tab.activeTab === "/dashboard/feedbackform"}
          icon={<NotebookPen size={20} />}
          text="Feedback Form"
          handleOnclick={() => {
            handleOnclickTab("/dashboard/feedbackform");
          }}
        />
        <SidebarItem
          active={tab.activeTab === "/dashboard/liked"}
          icon={<Heart size={20} />}
          text="Liked"
          handleOnclick={() => {
            handleOnclickTab("/dashboard/liked");
          }}
        />
        <SidebarItem
          active={tab.activeTab === "/dashboard/analitics"}
          icon={<ChartSpline size={20} />}
          text="Analitcs"
          handleOnclick={() => {
            handleOnclickTab("/dashboard/analitics");
          }}
        />
      </Sidebars>
    </main>
  );
};

export default Sidebar;
