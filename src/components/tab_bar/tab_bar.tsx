"use client";

import { ResumeBtn } from "../button/ResumeButton";

const listFunction: string[] = ["About", "Project", "Blog", "Contact"];

export function TabBar() {
  return (
    <header className="fixed z-[100] w-full bg-transparent backdrop:blur-sm">
      {" "}
      <div className="flex h-auto min-h-[4.5rem] px-[5%]">
        <div className="grid grid-cols-8 md:grid-cols-12 w-full h-auto">
          <div className="col-span-3 md:col-span-4 flex items-center">
            <span className="text-white font-medium text-[20px]">
              {" "}
              QuangDat
            </span>
            <span className="text-[#0EC47E] font-bold text-[20px]">.dev</span>
          </div>
          <div className=" flex col-span-3 md:col-span-4 items-center justify-center gap-[7%]">
            {listFunction.map((func, index) => (
              <a
                key={index}
                className="flex font-medium text-[14.4px] text-white cursor-pointer"
              >
                {func}
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
