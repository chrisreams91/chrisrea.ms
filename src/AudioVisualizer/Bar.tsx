import * as THREE from "three";

interface BarProps {
  position: number;
  color: string;
  height: number;
  width: number;
  depth: number;
}

const Bar = ({ position, color, width, height, depth }: BarProps) => {
  return (
    <mesh
      position={new THREE.Vector3(position / 1.8, 0, 10)}
      name={`Bar - ${position}`}
    >
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color={color}
        emissive={"#000000"}
        emissiveIntensity={1}
      />
    </mesh>
  );
};

export default Bar;
