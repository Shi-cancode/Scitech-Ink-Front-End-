import TalesHomeSection from "./_partials/TalesHomeSection";
import TalesSection from "./_partials/TalesSection";
import AcceleratorSection from "@/components/common/AcceleratorSection";

export default function Home() {
  return (
    <main className="flex-1">
      <TalesHomeSection/>
      <TalesSection/>
      <AcceleratorSection/>
    </main>
  );
}
