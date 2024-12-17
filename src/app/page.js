import RenderModel from "@/components/RenderModel";
import Image from "next/image";
import { Cauldron } from "@/components/models/Cauldron";

export default function Home() {
  return (
    <main className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-screen bg-[url('/background/home.jpg')] relative">
      <div className="flex flex-col h-screen w-screen bg-black/40 justify-center items-center">
        <RenderModel>
          <Cauldron />
        </RenderModel>
      </div>
    </main>
  );
}
