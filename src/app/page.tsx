import { AboutSection } from "@/components/section/abourSection";
import { ActivitySection } from "@/components/section/activitySection";
import { ContactSection } from "@/components/section/contactSection";
import { MainSection } from "@/components/section/mainSection";
import { ProjectSection } from "@/components/section/projectSection";
import { TabBar } from "@/components/tab_bar/tab_bar";
import Image from "next/image";

export default function Home() {
  return (
    <main id="main">
      <MainSection />
      <AboutSection />
      <ProjectSection />
      <ActivitySection />
      <ContactSection />
    </main>
  );
}
