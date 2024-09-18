import WindowFrame from "./windowFrame"
import Typewriter from "../utils/Typewriter"

const WavyConsole: React.FC = () => {
    return (
        <>
            <WindowFrame>
                <div className="w-[600px] h-[400px] bg-black p-[6px] text-[#04e200] font-console text-[14px]">
                    {/* #TODO: Make Typewriter compatible with paragraphs */}
                    <Typewriter
                        text="Hello, my name is alex hobden, im a software developer based in stuttgart...I would love to gain a carreer in coding cool stuff :)"
                        speed={50}
                        linebreak={76}
                        stepsize={1}
                    />
                </div>
            </WindowFrame>
        </>
    )
}

export default WavyConsole
