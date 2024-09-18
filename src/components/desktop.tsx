import { useState } from "react"
import Item from "./item"
import Kasten from "./wavyContainer"
import WavyConsole from "./wavyConosle"
import WavyTaskBar from "./wavyTaskBar"
import ModelViewer from "./modelViewer"
import WavyDirectory from "./wavyDirectory"
import VideoPlayer from "./videoPlayer"
import WindowFrame from "./windowFrame"
import Mixer from "./mixer"
import ExplorEntry from "../elements/explorEntry"
import Welcome from "./welcome"

const Desktop: React.FC = () => {
    const [windows, setWindows] = useState<React.ReactNode[]>([])

    const addWindow = (newWindow: React.ReactNode) => {
        setWindows((prevWindows) => [...prevWindows, newWindow])
    }

    return (
        <div className="App">
            <WavyTaskBar></WavyTaskBar>
            <Item addWindow={addWindow} icon="foldernormal" text="clickme">
                <Kasten>
                    <WavyDirectory>
                        <Item
                            addWindow={addWindow}
                            icon="console"
                            text="hello.exe"
                        >
                            <WavyConsole></WavyConsole>
                        </Item>
                        <Item
                            addWindow={addWindow}
                            icon="videofile"
                            text="car.mp4"
                        >
                            <Kasten>
                                <video
                                    width="320"
                                    height="480"
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        src="/videos/wavy.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </Kasten>
                        </Item>

                        <Item
                            addWindow={addWindow}
                            icon="videofile"
                            text="frog.mp4"
                        >
                            <Kasten>
                                <img
                                    style={{ width: "500px", height: "500px" }}
                                    src="./videos/frog_only.gif"
                                    alt=""
                                />
                            </Kasten>
                        </Item>
                        <Item
                            addWindow={addWindow}
                            icon="videofile"
                            text="idle.mp4"
                        >
                            <Kasten>
                                <img
                                    style={{ width: "300px", height: "500px" }}
                                    src="./videos/skeleton_idle.gif"
                                    alt=""
                                />
                            </Kasten>
                        </Item>
                        <Item
                            addWindow={addWindow}
                            icon="videofile"
                            text="walking.mp4"
                        >
                            <Kasten>
                                <img
                                    style={{ width: "350px", height: "500px" }}
                                    src="./videos/skeleton_walking.gif"
                                    alt=""
                                />
                            </Kasten>
                        </Item>

                        <Item
                            addWindow={addWindow}
                            icon="network"
                            text="skeleton.fbx"
                        >
                            <Kasten>
                                <ModelViewer />
                            </Kasten>
                        </Item>
                    </WavyDirectory>
                </Kasten>
            </Item>
            <Item addWindow={addWindow} icon="video" text="powerplant.wavy">
                <WindowFrame>
                    <VideoPlayer size={600}></VideoPlayer>
                </WindowFrame>
            </Item>

            <Item addWindow={addWindow} icon="video" text="mixer.wavy">
                <Mixer></Mixer>
            </Item>

            <Welcome></Welcome>

            {windows.map((window, index) => (
                <div key={index} style={{ position: "absolute" }}>
                    {window}
                </div>
            ))}
        </div>
    )
}

export default Desktop
