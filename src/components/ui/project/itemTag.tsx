"use client";

type Props = {
  name: string;
  keyProps: number;
};

export function ItemTag({ name, keyProps }: Props) {
  const background = keyProps % 2 == 0 ? "bg-white" : "bg-[#0EC47E]";

  const textColor = keyProps % 2 == 0 ? "text-black" : "text-white";
  return (
    <div
      className={`border-2 border-[#0EC47E] rounded-[12px] px-[9px] py-[4px] ${background}`}
    >
      <div className={`${textColor} font-light text-[12px]`}>{name}</div>
    </div>
  );
}
