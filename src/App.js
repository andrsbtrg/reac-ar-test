import "./styles.css";

import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

export default function App() {
  return (
    <div className="App">
      <ARCanvas
        camera={{ position: [0, 0, 0] }}
        dpr={window.devicePixelRatio}
        onCreated={({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
        }}
      >
        <ambientLight />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </ARCanvas>
    </div>
  );
}
