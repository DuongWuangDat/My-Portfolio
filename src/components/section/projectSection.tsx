"use client";

import { Project } from "@/type/type";
import { ItemProject } from "../ui/project/itemProject";
import ProjectImageRaw from "@root/public/assets/rawImageProject.jpg";
const dataProject: Project[] = [
  {
    name: "My Portfolio",
    description: "Project to introduce myself",
    image: ProjectImageRaw,
    tag: ["ReactJS", "GSAP"],
    link: [],
  },
  {
    name: "My Portfolio",
    description: "Project to introduce myself",
    image: ProjectImageRaw,
    tag: ["ReactJS", "GSAP"],
    link: [],
  },
  {
    name: "My Portfolio",
    description: "Project to introduce myself",
    image: ProjectImageRaw,
    tag: ["ReactJS", "GSAP"],
    link: [],
  },
  {
    name: "My Portfolio",
    description: "Project to introduce myself",
    image: ProjectImageRaw,
    tag: ["ReactJS", "GSAP"],
    link: [],
  },
  {
    name: "My Portfolio",
    description: "Project to introduce myself",
    image: ProjectImageRaw,
    tag: ["ReactJS", "GSAP"],
    link: [],
  },
  {
    name: "My Portfolio",
    description: "Project to introduce myself",
    image: ProjectImageRaw,
    tag: ["ReactJS", "GSAP"],
    link: [],
  },
];

export function ProjectSection() {
  return (
    <section className="bg-white w-full flex flex-col items-center h-auto min-h-screen text-black">
      <div className="font-medium text-[#0EC47E] text-[36px] mt-[50px]">
        Featured Projects
      </div>
      <div className="mt-[10px]">
        <div className="font-medium text-[16px] text-center">
          It's not a bug, it's a feature
        </div>
        <div className="font-medium text-[16px] text-center">
          Backend is the heartbeat of any application; it's the unseen force
          that brings everything to life.
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10 px-[20%] mt-[20px]">
        {dataProject.map((item, index) => (
          <ItemProject key={index} item={item} />
        ))}
      </div>
      <div className="font-medium text-[16px] my-[20px]">
        Explore more projects in{" "}
        <a className="text-[#0EC47E]">my profile github</a>
      </div>
    </section>
  );
}
