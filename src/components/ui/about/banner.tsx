import "../../../styles/banner.css";
import { ItemBanner } from "./item_about";
import GithubIcon from "@root/public/assets/github.svg";
import ReactIcon from "@root/public/assets/react.svg";
import SpringIcon from "@root/public/assets/spring.svg";
import TypeScriptIcon from "@root/public/assets/typescript.svg";
import NodeJS from "@root/public/assets/nodejs.svg";
import KotlinIcon from "@root/public/assets/kotlin.svg";
import FlutterIcon from "@root/public/assets/flutter.svg";

type Data = {
  name: string;
  image: any;
};
const dataAnimation: Data[] = [
  {
    image: ReactIcon,
    name: "React",
  },
  {
    image: TypeScriptIcon,
    name: "Typescript",
  },
  {
    image: SpringIcon,
    name: "Spring",
  },
  {
    image: NodeJS,
    name: "ExpressJS",
  },
  {
    image: KotlinIcon,
    name: "Kotlin",
  },
  {
    image: FlutterIcon,
    name: "Flutter",
  },
  {
    image: GithubIcon,
    name: "Github",
  },
];

export function Banner() {
  return (
    <div className="flex flex-row overflow-hidden w-[85%] mt-[80px]">
      <div className="section flex flex-row gap-20 pr-20">
        {dataAnimation.map((object, index) => (
          <ItemBanner key={index} name={object.name} image={object.image} />
        ))}
      </div>
      <div className="section flex flex-row gap-20 pr-20">
        {dataAnimation.map((object, index) => (
          <ItemBanner key={index} name={object.name} image={object.image} />
        ))}
      </div>
      <div className="section flex flex-row gap-20 pr-20">
        {dataAnimation.map((object, index) => (
          <ItemBanner key={index} name={object.name} image={object.image} />
        ))}
      </div>
    </div>
  );
}
