import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cover bg-center bg-no-repeat bg-fixed h-screen w-screen bg-[url('/background/home.jpg')]">
      <div className="flex flex-col h-screen w-screen bg-black/40 justify-center items-center text-yellow-400 text-4xl font-bold">
        <h1 className="drop-shadow-lg">Hi, I'm Ayse</h1>
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Tasha's Cauldron of Everything (VR)"
            frameBorder="0"
            allowFullScreen
            mozAllowFullScreen="true"
            webkitAllowFullScreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/95441d741916413e92ff3e06d6986cd1/embed?transparent=1"
          ></iframe>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              margin: "5px",
              color: "#4A4A4A",
            }}
          >
            <a
              href="https://sketchfab.com/3d-models/tashas-cauldron-of-everything-vr-95441d741916413e92ff3e06d6986cd1?utm_medium=embed&utm_campaign=share-popup&utm_content=95441d741916413e92ff3e06d6986cd1"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Tasha's Cauldron of Everything (VR)
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/tfriedel217?utm_medium=embed&utm_campaign=share-popup&utm_content=95441d741916413e92ff3e06d6986cd1"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              tfriedel217
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=95441d741916413e92ff3e06d6986cd1"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
