import NextArrow from "@root/public/assets/arrowNext.svg";
import Image from "next/image";

export function ContactMeButton() {
  return (
    <a className="bg-gradient-to-r from-[#0ACF83] via-[#7EF98B] via-23% to-[#7EF98B] to-93% px-[10px] py-[9px] flex flex-row rounded-[6px] mt-[16px] hover:opacity-100 cursor-pointer">
      <div className="font-medium text-[14px] text-black">Contact me</div>
      <Image src={NextArrow} alt="" className="ml-[6px]" />
    </a>
  );
}
