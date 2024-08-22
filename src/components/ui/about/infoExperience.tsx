type Props = {
  number: number;
  content: string;
};

export function InfoExperience({ number, content }: Props) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-[1px]">
      <div className="flex flex-row">
        <div className="font-medium text-[36px]">
          {number} <span className="text-[#0EC47E]">+</span>
        </div>
      </div>
      <div className="font-light text-[14px]">{content}</div>
    </div>
  );
}
