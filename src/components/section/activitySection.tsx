"use client";

import { Activity } from "@/type/type";
import ProjectImageRaw from "@root/public/assets/rawImageActivity.png";
import ArrowContinue from "@root/public/assets/continueArrow.svg";
import { ItemActivity } from "../ui/activity/itemActivity";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useSectionStore } from "@/store/section";
import useScrollActive from "@/hook/useScrollActive";
const dataActivity: Activity[] = [
  {
    name: "Top 10 GDSC Hackathon Viet Nam 2024",
    description:
      "GDSC Hackathon 2023 was a 48-hour event where teams collaborated to solve real-world challenges using innovative tech solutions",
    image: ProjectImageRaw,
    time: "2024, August 22nd",
  },
  {
    name: "Top 10 GDSC Hackathon Viet Nam 2024",
    description:
      "GDSC Hackathon 2023 was a 48-hour event where teams collaborated to solve real-world challenges using innovative tech solutions",
    image: ProjectImageRaw,
    time: "2024, August 22nd",
  },
  {
    name: "Top 10 GDSC Hackathon Viet Nam 2024",
    description:
      "GDSC Hackathon 2023 was a 48-hour event where teams collaborated to solve real-world challenges using innovative tech solutions",
    image: ProjectImageRaw,
    time: "2024, August 22nd",
  },
];

export function ActivitySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(sectionRef);
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
            ".text-animation1",
            {
              y: -100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
            }
          );
        },
      },
    });
  }, []);

  const { setSection } = useSectionStore();
  const activityScroll = useScrollActive(sectionRef);

  useEffect(() => {
    activityScroll && setSection("#activity");
  }, [activityScroll, setSection]);

  return (
    <section
      ref={sectionRef}
      id="activity"
      className="w-full h-auto bg-[#121A1C] flex flex-col items-center"
    >
      <div className="text-animation1 font-medium text-[#0EC47E] text-[36px] mt-[56px]">
        Activity
      </div>
      <div className="text-animation1 flex items-center flex-col mt-[10px]">
        <div>
          Every activity I&apos;ve engaged in is a stepping stone, each
          experience a thread in the fabric of my growth.
        </div>
        <div>
          The journey behind me fuels the path ahead, shaping who I am and who I
          strive to become. 🚀
        </div>
      </div>
      <div className="grid grid-rows-3 gap-[50px] px-[200px] w-full mt-[80px]">
        {dataActivity.map((data, index) => (
          <ItemActivity key={index} item={data} />
        ))}
      </div>
      <div className="text-animation1 my-[2%] flex flex-row gap-[10px]">
        <a className=" text-[#0EC47E] font-medium italic cursor-pointer">
          Follow up on my facebook
        </a>
        <Image src={ArrowContinue} alt="" />
      </div>
    </section>
  );
}
