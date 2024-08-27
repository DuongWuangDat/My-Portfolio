"use client";

import { useSectionStore } from "@/store/section";

export function ResumeBtn() {
  const { section } = useSectionStore();
  return (
    <a
      className={`font-medium text-[12px] border-2  px-[30px] py-[9px] hidden md:block cursor-pointer ${
        section !== "#project"
          ? "text-white border-white"
          : "text-black border-black"
      }`}
    >
      Resume
    </a>
  );
}
