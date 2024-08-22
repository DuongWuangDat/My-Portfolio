import SignIcon from "@root/public/assets/sign.svg";
import Image from "next/image";
import myFace from "@root/public/assets/myFace.jpg";
import { InfoExperience } from "../ui/about/infoExperience";
import { Banner } from "../ui/about/banner";

export function AboutSection() {
  return (
    <section className="relative w-full h-auto bg-[#161D1F] flex flex-col items-center">
      <div className=" h-auto font-medium text-[36px] mt-[55px] inline-flex text-center">
        Simplicity is the soul of efficiency.
        <Image
          src={SignIcon}
          alt=""
          className="hidden self-start mt-[20px] ml-[10px] md:flex"
        />
      </div>
      <div className="flex flex-row w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col flex-1 ml-[100px] mr-[200px] gap-[20px]">
          <div className="mt-[96px]  text-[#0EC47E] font-medium text-[36px]">
            About me
          </div>
          <div className="font-light text-[16px]">
            With an unwavering passion for technology, particularly in IT fields
            like backend, frontend, and AI. I'm always eager to explore and
            acquire new knowledge. Currently, I'm striving to become a
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
            <InfoExperience content="Experiences" number={0} />
            <InfoExperience content="Projects" number={6} />
            <InfoExperience content="Contributors" number={30} />
          </div>
        </div>
        <div className="relative flex flex-1">
          <div className="bg-[#0EC47E] size-[60%] absolute rounded-[4px] top-[186px] left-[60px]" />
          <Image
            src={myFace}
            alt=""
            className="size-[60%] rounded-[4px] z-[3] absolute top-[170px] left-[40px] object-cover"
          />
        </div>
      </div>
      <Banner />
    </section>
  );
}
