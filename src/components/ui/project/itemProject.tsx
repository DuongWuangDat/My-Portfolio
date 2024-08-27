import { Project } from "@/type/type";
import Image from "next/image";
import GithubIconBlack from "@root/public/assets/github2.svg";
import { ItemTag } from "./itemTag";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
type Props = {
  item: Project;
};

export function ItemProject({ item }: Props) {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "70% bottom",
      },
    });

    tl.fromTo(
      projectRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );
  }, []);
  return (
    <div
      ref={projectRef}
      className="drop-shadow-md border-2 rounded-[12px] h-[300px] overflow-hidden project-box-animation"
    >
      <Image src={item.image} alt="" className="w-full h-[50%] object-cover" />
      <div className="px-[10px] py-[6px] flex flex-col gap-1 h-full">
        <div className="text-[#0EC47E] font-medium text-[16px]">
          {item.name}
        </div>
        <div className="font-light text-[14px] h-[25%]">{item.description}</div>
        <div className="">
          <div className="font-light text-[16px] flex flex-row">
            <div className="flex-1 snap-x flex flex-row gap-2">
              {item.tag.map((item, index) => (
                <ItemTag key={index} name={item} keyProps={index} />
              ))}
            </div>
            <div>Visit</div>
            <Image
              src={GithubIconBlack}
              alt=""
              className="size-[10%] ml-[6px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
