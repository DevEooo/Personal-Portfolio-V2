import Dither from "../components/Dither";

function Hero() {
  return (
    <div style={{ width: "100%", height: "845px", position: "relative" }}>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.1}
        colorNum={4}
        waveAmplitude={0.2}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      <div>
        <h1 style={{ position: "absolute", bottom: "-1rem", right: "0%", transform: "translate(-5%, -50%)", color: "white", fontSize: "48px" }}>
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  );
}

export default Hero;
