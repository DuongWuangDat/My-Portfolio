"use client";
import { Activity } from "@/type/type";
import Image from "next/image";
import ViewActivity from "@root/public/assets/ViewActivity.svg";
import DateMark from "@root/public/assets/dateMark.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
type Props = {
  item: Activity;
};

export function ItemActivity({ item }: Props) {
  const activityRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: activityRef.current,
        start: "70% bottom",
      },
    });

    tl.fromTo(activityRef.current, { scale: 0 }, { scale: 1 });
  }, []);
  return (
    <div ref={activityRef} className="flex flex-row gap-[20px]">
      <Image src={item.image} alt="" className="w-[20%] object-cover" />
      <div className="flex flex-col flex-1 gap-[5px]">
        <div className="text-[#D1D5DB] font-light text-[16px]">{item.name}</div>
        <div className="flex flex-row gap-[5px]">
          <Image src={DateMark} alt="" />
          <div className="font-light text-[#0EC47E] text-[14px]">
            {item.time}
          </div>
        </div>
        <div className="span-y font-light text-[#9CA3AF] text-[14px]">
          {item.description}
        </div>
      </div>
      <Image src={ViewActivity} alt="" />
    </div>
  );
}
