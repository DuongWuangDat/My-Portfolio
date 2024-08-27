"use client";

import { Project } from "@/type/type";
import { ItemProject } from "../ui/project/itemProject";
import ProjectImageRaw from "@root/public/assets/rawImageProject.jpg";
import { useEffect, useRef } from "react";
import { useSectionStore } from "@/store/section";
import useScrollActive from "@/hook/useScrollActive";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
  const sectionRef = useRef(null);
  const bottomRef = useRef(null);
  const { setSection } = useSectionStore();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.2,
              duration: 0.3,
            },
          });

          tl.fromTo(
            q(".text-animation"),
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1 }
          );
        },
      },
    });
  }, []);

  const projectScrollActive = useScrollActive(sectionRef);
  useEffect(() => {
    projectScrollActive && setSection("#project");
  }, [projectScrollActive, setSection]);
  return (
    <section
      ref={sectionRef}
      id="project"
      className="bg-white w-full flex flex-col items-center h-auto min-h-screen text-black"
    >
      <div className="text-animation font-medium text-[#0EC47E] text-[36px] mt-[50px]">
        Featured Projects
      </div>
      <div className="mt-[10px]">
        <div className="text-animation font-medium text-[16px] text-center">
          It&apos;s not a bug, it&apos;s a feature
        </div>
        <div className="text-animation font-medium text-[16px] text-center">
          Backend is the heartbeat of any application; it&apos;s the unseen
          force that brings everything to life.
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10 px-[20%] mt-[20px]">
        {dataProject.map((item, index) => (
          <ItemProject key={index} item={item} />
        ))}
      </div>
      <div className="text-animation font-medium text-[16px] my-[20px]">
        Explore more projects in{" "}
        <a className="text-[#0EC47E]">my profile github</a>
      </div>
    </section>
  );
}
