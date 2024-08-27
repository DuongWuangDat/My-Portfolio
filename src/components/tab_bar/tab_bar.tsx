"use client";

import { useSectionStore } from "@/store/section";
import { ResumeBtn } from "../button/ResumeButton";

interface navConfigState {
  name: string;
  href: string;
}

const listFunction: navConfigState[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Project",
    href: "#project",
  },
  {
    name: "Activity",
    href: "#activity",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function TabBar() {
  const { section } = useSectionStore();
  return (
    <header className="fixed z-[100] w-full bg-transparent backdrop-blur-[6px]">
      {" "}
      <div className="flex h-auto min-h-[4.5rem] px-[5%]">
        <div className="grid grid-cols-8 md:grid-cols-12 w-full h-auto">
          <div className="col-span-3 md:col-span-4 flex items-center">
            <span
              className={`${
                section !== "#project" ? "text-white" : "text-black"
              } font-medium text-[20px]`}
            >
              {" "}
              QuangDat
            </span>
            <span className="text-[#0EC47E] font-bold text-[20px]">.dev</span>
          </div>
          <div className=" flex col-span-3 md:col-span-4 items-center justify-center gap-[7%]">
            {listFunction.map((func, index) => (
              <a
                key={index}
                href={func.href}
                className={`flex font-medium text-[14.4px] ${
                  section !== "#project" ? "text-white" : "text-black"
                } cursor-pointer`}
              >
                {func.name}
              </a>
            ))}
          </div>
          <div className="flex col-span-4 items-center justify-center">
            <ResumeBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
