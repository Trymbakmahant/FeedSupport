"use client";
import React, { useState } from "react";
import { HandCoins, Heart, NotebookPen } from "lucide-react";
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
          icon={<HandCoins size={20} />}
          active={tab.activeTab === "create/supportform"}
          handleOnclick={() => {
            handleOnclickTab("create/supportform");
          }}
          text="Support Card"
        />

        <SidebarItem
          active={tab.activeTab === "create/feedbackform"}
          icon={<NotebookPen size={20} />}
          text="Feedback Form"
          handleOnclick={() => {
            handleOnclickTab("create/feedbackform");
          }}
        />
        <SidebarItem
          active={tab.activeTab === "dashboard/liked"}
          icon={<Heart size={20} />}
          text="Liked"
          handleOnclick={() => {
            handleOnclickTab("dashboard/liked");
          }}
        />
      </Sidebars>
    </main>
  );
};

export default Sidebar;
