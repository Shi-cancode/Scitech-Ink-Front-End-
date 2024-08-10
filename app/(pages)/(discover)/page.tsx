
import AcceleratorSection from "@/components/common/AcceleratorSection";
import HomeSection from "./_partials/HomeSection";
import UpcommingEventSection from "./_partials/UpcommingEventSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HomeSection/>
      <UpcommingEventSection/>
      <AcceleratorSection/>
    </main>
  );
}
