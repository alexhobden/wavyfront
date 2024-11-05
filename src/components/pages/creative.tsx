import exp from "constants"
import Item from "../item"
import WavyConsole from "../wavyConosle"
import Kasten from "../wavyContainer"
import ModelViewer from "../modelViewer"

interface CreativeProps {
    addWindow: (newWindow: React.ReactNode) => void
}

const Creative: React.FC<CreativeProps> = ({ addWindow }) => {
    return (
        <div className="flex gap-3">
            <Item addWindow={addWindow} icon="console" text="hello.exe">
                <WavyConsole></WavyConsole>
            </Item>
            <Item addWindow={addWindow} icon="videofile" text="car.mp4">
                <Kasten title="car.mp4">
                    <video width="320" height="480" autoPlay muted loop>
                        <source src="/videos/wavy.mp4" type="video/mp4" />
                    </video>
                </Kasten>
            </Item>

            <Item addWindow={addWindow} icon="videofile" text="frog.mp4">
                <Kasten title="frog.mp4">
                    <img
                        style={{ width: "500px", height: "500px" }}
                        src="./videos/frog_only.gif"
                        alt=""
                    />
                </Kasten>
            </Item>
            <Item addWindow={addWindow} icon="videofile" text="idle.mp4">
                <Kasten>
                    <img
                        style={{ width: "300px", height: "500px" }}
                        src="./videos/skeleton_idle.gif"
                        alt=""
                    />
                </Kasten>
            </Item>
            <Item addWindow={addWindow} icon="videofile" text="walking.mp4">
                <Kasten>
                    <img
                        style={{ width: "350px", height: "500px" }}
                        src="./videos/skeleton_walking.gif"
                        alt=""
                    />
                </Kasten>
            </Item>

            <Item addWindow={addWindow} icon="network" text="skeleton.fbx">
                <Kasten title="Skeleton.fbx">
                    <ModelViewer />
                </Kasten>
            </Item>
        </div>
    )
}
export default Creative
