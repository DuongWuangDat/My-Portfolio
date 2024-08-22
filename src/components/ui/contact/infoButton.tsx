import Image from "next/image";

type Props = {
  link: string;
  name: string;
  image: any;
};

export function InfoButton({ link, name, image }: Props) {
  return (
    <a className="border-2 border-[#E4E4E7] rounded-[9999px] px-[10px] py-[5px] flex justify-center items-center gap-[10px] cursor-pointer">
      <Image src={image} alt="" />
      <div className="font-light text-[12px]">{name}</div>
    </a>
  );
}
