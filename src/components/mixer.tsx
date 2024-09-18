import VideoPlayer from "./videoPlayer"
import WindowFrame from "./windowFrame"

const Mixer: React.FC = () => {
    return (
        <WindowFrame>
            <div
                className={
                    "grid grid-cols-2 grid-rows-2 auto-cols-auto auto-rows-auto"
                }
            >
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                {/* <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer> */}
            </div>
        </WindowFrame>
    )
}

export default Mixer
