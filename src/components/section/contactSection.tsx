import { InfoButton } from "../ui/contact/infoButton";
import LinkedinIcon from "@root/public/assets/linkedinIcon.svg";
import GithubIcon from "@root/public/assets/githubIcon.svg";
import FaceBookIcon from "@root/public/assets/facebookIcon.svg";

export function ContactSection() {
  return (
    <section className="w-full h-auto bg-[#161D1F] flex flex-col items-center justify-center">
      <div className="mt-[5%] font-light text-[18px]">Want to collaborate?</div>
      <a className="font-medium text-[48px] text-[#0EC47E] hover:text-white cursor-pointer">
        Contact me!
      </a>
      <div className="flex flex-row justify-center gap-[10px] mt-[160px]">
        <InfoButton link="" image={LinkedinIcon} name="Linkedin" />
        <InfoButton link="" image={FaceBookIcon} name="Facebook" />
        <InfoButton link="" image={GithubIcon} name="Github" />
      </div>
      <div className="font-semibold text-[#0EC47E] text-[18px] mt-[32px]">
        {" "}
        Quang Dat
      </div>
      <div className="font-light text-[14px]">
        {" "}
        Mobile developer and full-stack developer
      </div>
      <div className="my-[2%]">
        <div className="text-center text-[#9CA3AF] font-light text-[16px]">
          I&apos;m always excited to connect with like-minded professionals and
          potential collaborators.
        </div>
        <div className="text-center text-[#9CA3AF] font-light text-[16px]">
          Whether you have a project in mind, need assistance, or just want to
          say hello, feel free to reach out!
        </div>
      </div>
      <div className="font-light text-[16px] mb-[5%]">
        Made with ❤️ by Quang Dat
      </div>
    </section>
  );
}
