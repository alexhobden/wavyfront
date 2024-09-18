import React, { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { useFBX } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import { AmbientLight, DirectionalLight } from "three"

interface FBXModelProps {
    modelPath: string // Explicitly defining the type for modelPath
}

const FBXModel: React.FC<FBXModelProps> = ({ modelPath }) => {
    const fbx = useFBX(modelPath)
    return <primitive object={fbx} scale={0.01} />
}

const ModelViewer: React.FC = () => {
    return (
        <div style={{ width: "320", height: "500px" }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <FBXModel modelPath="/models/skeleton.fbx" />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default ModelViewer
