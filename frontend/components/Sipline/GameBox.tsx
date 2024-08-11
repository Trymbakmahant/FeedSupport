import Spline from "@splinetool/react-spline";

export default function GameBox() {
  return (
    <main className="h-screen bg-transparent absolute top-0 w-full left-0">
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
