"use client";
import BackgroundLine from "@root/public/assets/behind-background-line.png";
import CodeIcon from "@root/public/assets/code_icon.png";
import GitIcon from "@root/public/assets/git_icon.png";
import MyLottie from "@root/public/assets/lottie.json";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import Image from "next/image";
import { useEffect } from "react";
import { ContactMeButton } from "../button/ContactMeButton";
import gsap from "gsap";
export function MainSection() {
  useEffect(() => {
    gsap.fromTo(
      ".text-animation",
      {
        y: 100,
        opacity: 0,
      },
      {
        stagger: 0.2,
        y: 0,
        opacity: 1,
      }
    );
  }, []);
  return (
    <section className="min-h-screen max w-full bg-[#121A1C]">
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="w-full h-full hidden xl:flex flex-row justify-end items-center">
          <div className="bottom-[12.5rem] left-[0rem] absolute">
            <DynamicLottie animationData={MyLottie} loop={true} />
          </div>
          <Image
            src={GitIcon}
            alt="giticon"
            className="size-[15%] z-[3] absolute bottom-[19rem] left-[16rem] object-contain"
          />
        </div>

        <Image
          src={BackgroundLine}
          alt="backgroundLine"
          className="size-[70%] xl:size-[60%] absolute"
          priority
        />
        <div className="w-full h-full hidden xl:flex flex-row justify-start items-center">
          <Image
            src={CodeIcon}
            alt="giticon"
            className="size-[15%] z-[3] absolute bottom-[19rem] right-[16rem] object-contain"
          />
        </div>

        <div className="flex flex-col absolute top-[35%] justify-center items-center">
          <div className="text-animation font-semibold text-[60px]">
            I&apos;m Quang Dat
          </div>
          <div className="text-animation font-semibold text-[36px]">
            A <span className="text-[#0EC47E]">full-stack</span> developer
          </div>
          <div className="text-animation mt-[9px] flex justify-center items-center flex-col">
            <div>Passionate about crafting seamless digital experiences</div>
            <div className="text-center">
              I thrive on building robust backend systems and dynamic front-end
              interfaces that bring ideas to life.
            </div>
            <ContactMeButton />
          </div>
        </div>
      </div>
    </section>
  );
}
