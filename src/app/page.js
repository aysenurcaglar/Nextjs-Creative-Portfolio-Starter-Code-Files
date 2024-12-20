import RenderModel from "@/components/RenderModel";
import Image from "next/image";
import { Cauldron } from "@/components/models/Cauldron";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-screen bg-[url('/background/home.jpg')] relative">
      <div className="w-full h-screen bg-black/40">
        <Navigation />
        <RenderModel>
          <Cauldron />
        </RenderModel>
      </div>
    </main>
  );
}
