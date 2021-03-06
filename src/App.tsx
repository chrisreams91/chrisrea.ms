import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./Components/Skybox";
import DroneProjector from "./DroneProjector/DroneProjector";
import Model from "./Components/Model";
import { useControls } from "leva";

const { SkyBoxImages } = require("../src/assets");
const defaultSkybox = "blueSpace";

const App = () => {
  const [fpsControlsEnabled, setFpsControlsEnabled] = useState(true);

  const { skybox } = useControls({
    skybox: {
      value: defaultSkybox,
      options: ["blueSpace", "interstellar", "redSpace"],
    },
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <FPSControls
        camProps={{
          makeDefault: true,
          fov: 100,
          position: [0, 10, 20],
        }}
        orbitProps={{
          target: [5, 5, 0],
        }}
        enableKeyboard={fpsControlsEnabled}
      />
      <Suspense fallback={null}>
        <Model
          name="/k07.glb"
          position={[10, 17.9, -26.8]}
          scale={[0.1, 0.1, 0.1]}
        />
      </Suspense>
      <Suspense fallback={null}>
        <DroneProjector setFpsControlsEnabled={setFpsControlsEnabled} />
      </Suspense>
      <Suspense fallback={null}>
        <SkyBox images={SkyBoxImages[skybox]} />
      </Suspense>
    </Canvas>
  );
};

export default App;
