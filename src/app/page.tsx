import { AboutMe } from "@/features/AboutMe";
import { Experience } from "@/features/Experience";
import { Technologies } from "@/features/Technologies/Technologies";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Technologies />
      <Experience />
    </div>
  );
}
