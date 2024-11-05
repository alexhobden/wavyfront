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
                <Kasten title="Explorer">
                    <WavyDirectory addWindow={addWindow}></WavyDirectory>
                </Kasten>
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
