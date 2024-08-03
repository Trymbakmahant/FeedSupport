import React, { useContext, createContext, useState, ReactNode } from "react";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebars({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const router = useRouter();
  return (
    <aside className=" h-screen">
      <nav className="flex h-full w-fit flex-col border-r bg-secondary shadow-sm">
        <div className="flex items-center justify-between p-4 pb-2">
          <span
            className={`${
              expanded ? "hidden" : "text-xl w-14 h-14"
            } rounded-full flex items-center duration-300 justify-center bg-green-300`}
          >
            FBS
          </span>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {!expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="flex my-4 items-center justify-center">
          {" "}
          <ThemeToggle toggleSize={`${expanded ? "10px" : "20px"}`} />
        </div>
        <div className="flex justify-center"></div>
        <div className="flex justify-end duration-200"></div>
        <div className="flex cursor-pointer border-t p-3">
          <div className="flex items-center rounded-lg bg-blue-100 px-2">
            <span className="text-xl font-semibold">JD</span>
          </div>
          <div
            onClick={() => {
              router.push("/");
            }}
            className={`
               flex items-center justify-between
              overflow-hidden transition-all ${
                !expanded ? "z-50 ml-3 w-52" : "w-0"
              }
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  handleOnclick: () => void;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  handleOnclick,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext) || { expanded: true };

  return (
    <li
      onClick={handleOnclick}
      className={`
        group relative my-1 flex cursor-pointer items-center
        rounded-md px-3 py-2
        font-medium transition-colors
        ${
          active
            ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800"
            : "text-gray-600 hover:bg-green-50"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          !expanded ? "ml-3 w-52" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-green-400 ${
            !expanded ? "" : "top-2"
          }`}
        />
      )}

      {expanded && (
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md
          bg-green-100 px-2 py-1 
          text-sm text-green-800 opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
