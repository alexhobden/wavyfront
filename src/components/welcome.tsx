import Typewriter from "../utils/Typewriter"
import TypingEffect from "../utils/Typewriter"
import WindowFrame from "./windowFrame"

const Welcome: React.FC = () => {
    return (
        <WindowFrame>
            <div className="w-[480px] h-[320px] flex justify-center items-center text-[#04e200] bg-black p-12 text-center font-wavy">
                <Typewriter
                    text="Hello and Welcome to Wavy. This is a Website inspired by the classic win98 Desktop where i plan to experiment and dump products of my creative processes. The Website is currently in Development so a lot of Things won't work yet, but take a look around and enjoy :)"
                    speed={40}
                    linebreak={999}
                    stepsize={1}
                />
            </div>
        </WindowFrame>
    )
}

export default Welcome
