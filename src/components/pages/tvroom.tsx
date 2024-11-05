import Item from "../item"
import Mixer from "../mixer"
import VideoPlayer from "../videoPlayer"
import WindowFrame from "../windowFrame"

interface TVRoomProps {
    addWindow: (newWindow: React.ReactNode) => void
}

const TVRoom: React.FC<TVRoomProps> = ({ addWindow }) => {
    return (
        <div className="flex gap-5 px-6">
            <Item addWindow={addWindow} icon="video" text="powerplant.wavy">
                <WindowFrame title="Powerplant.wavy">
                    <VideoPlayer size={600}></VideoPlayer>
                </WindowFrame>
            </Item>

            <Item addWindow={addWindow} icon="video" text="mixer.wavy">
                <Mixer></Mixer>
            </Item>
        </div>
    )
}
export default TVRoom
