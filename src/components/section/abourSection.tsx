"use client";

import SignIcon from "@root/public/assets/sign.svg";
import Image from "next/image";
import myFace from "@root/public/assets/myFace.jpg";
import { InfoExperience } from "../ui/about/infoExperience";
import { Banner } from "../ui/about/banner";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { text } from "stream/consumers";
import { useSectionStore } from "@/store/section";
import useScrollActive from "@/hook/useScrollActive";

export function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
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
            q(".animation-box-up"),
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
            }
          );

          tl.fromTo(
            q(".animation-box-down"),
            {
              y: -100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
            }
          );

          tl.to(q(".experience-animation"), {
            innerText: 0,
            duration: 0.5,
            snap: {
              innerText: 1,
            },
          });
          tl.to(q(".project-animation"), {
            innerText: 6,
            duration: 0.5,
            snap: {
              innerText: 1,
            },
          });
          tl.to(q(".contributor-animation"), {
            innerText: 15,
            duration: 0.5,
            snap: {
              innerText: 1,
            },
          });
        },
      },
    });
  }, []);

  const { setSection } = useSectionStore();
  const aboutSectionScroll = useScrollActive(sectionRef);
  useEffect(() => {
    aboutSectionScroll && setSection("#about");
  }, [aboutSectionScroll, setSection]);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full h-auto bg-[#161D1F] flex flex-col items-center"
    >
      <div className="animation-box-up h-auto font-medium text-[36px] mt-[55px] inline-flex text-center">
        Simplicity is the soul of efficiency.
        <Image
          src={SignIcon}
          alt=""
          className="hidden self-start mt-[20px] ml-[10px] md:flex"
        />
      </div>
      <div className="flex flex-row w-full grid-cols-1 lg:grid-cols-2">
        <div className=" animation-box-up flex flex-col flex-1 ml-[100px] mr-[200px] gap-[20px]">
          <div className="mt-[96px]  text-[#0EC47E] font-medium text-[36px]">
            About me
          </div>
          <div className="font-light text-[16px]">
            With an unwavering passion for technology, particularly in IT fields
            like backend, frontend, and AI. I&apos;m always eager to explore and
            acquire new knowledge. Currently, I&apos;m striving to become a
            comprehensive fullstack developer.
          </div>
          <div className="font-light text-[16px]">My Education Background</div>
          <div className="font-light text-[16px] text-[#0EC47E]">
            The University of Information Technology - VNU
          </div>
          <div className="font-light text-[16px] ">
            Currently a third-year student at university, where I am improving
            not only my technical skills but also my soft skills.
          </div>
          <div className="border-y-2 border-[#0EC47E] flex flex-row py-[20px]">
            <InfoExperience
              content="Experiences"
              number={0}
              animation="experience-animation"
            />
            <InfoExperience
              content="Projects"
              number={0}
              animation="project-animation"
            />
            <InfoExperience
              content="Contributors"
              number={0}
              animation="contributor-animation"
            />
          </div>
        </div>
        <div className="relative flex flex-1">
          <div className="animation-box-up bg-[#0EC47E] size-[60%] absolute rounded-[4px] top-[186px] left-[60px]" />
          <Image
            src={myFace}
            alt=""
            className="animation-box-down size-[60%] rounded-[4px] z-[3] absolute top-[170px] left-[40px] object-cover"
          />
        </div>
      </div>
      <Banner />
    </section>
  );
}
