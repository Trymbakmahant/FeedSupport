import Spline from "@splinetool/react-spline";

export default function GameBox() {
  return (
    <main className="h-screen bg-blue-200 w-[50vw]">
      <Spline
        onLoad={() => {
          console.log("hello");
        }}
        scene="https://prod.spline.design/tpogw5wCFCHfvi4z/scene.splinecode"
      />
    </main>
  );
}

//
