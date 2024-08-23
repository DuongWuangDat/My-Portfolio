import { Activity } from "@/type/type";
import ProjectImageRaw from "@root/public/assets/rawImageActivity.png";
import ArrowContinue from "@root/public/assets/continueArrow.svg";
import { ItemActivity } from "../ui/activity/itemActivity";
import Image from "next/image";
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
  return (
    <section className="w-full h-auto bg-[#121A1C] flex flex-col items-center">
      <div className="font-medium text-[#0EC47E] text-[36px] mt-[56px]">
        Activity
      </div>
      <div className="flex items-center flex-col mt-[10px]">
        <div>
          Every activity I&apos;ve engaged in is a stepping stone, each experience a
          thread in the fabric of my growth.
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
      <div className="my-[2%] flex flex-row gap-[10px]">
        <a className="text-[#0EC47E] font-medium italic cursor-pointer">
          Follow up on my facebook
        </a>
        <Image src={ArrowContinue} alt="" />
      </div>
    </section>
  );
}
