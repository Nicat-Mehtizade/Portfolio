import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarsBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        number: {
          value: 100,
        },
        size: {
          value: 1.5,
        },
        move: {
          enable: true,
          speed: 0.1,
        },
        opacity: {
          value: 0.8,
          animation: {
            enable: true,
            speed: 0.5, 
            minimumValue: 0.3,
            sync: false, 
          },
        },
        shape: {
          type: "circle",
        },
        color: {
          value: "#ffffff",
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute top-0 left-0 w-full h-full z-15 pointer-events-none"
    />
  );
};

export default StarsBackground;
