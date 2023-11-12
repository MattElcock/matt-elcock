import { AboutMe } from "@/features/AboutMe";
import { Technologies } from "@/features/Technologies/Technologies";

export default function Home() {
  return (
    <div className="space-y-5">
      <AboutMe />
      <Technologies />
    </div>
  );
}
