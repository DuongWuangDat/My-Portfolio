import Image from "next/image";

type Props = {
  name: string;
  image: any;
};

export function ItemBanner({ name, image }: Props) {
  return (
    <div className="flex flex-row w-auto h-auto justify-center items-center gap-[10px]">
      <Image src={image} alt="" className="size-[60%]" />
      <div className="font-medium text-[18px]">{name}</div>
    </div>
  );
}
