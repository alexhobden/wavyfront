import WindowFrame from "./windowFrame"

interface KastenProps {
    children?: React.ReactNode // Make the children prop optional
}

const Kasten: React.FC<KastenProps> = ({ children }) => {
    return (
        <>
            <WindowFrame>
                <div className="flex w-full mb-[4px]">
                    <div className="wavy-solid p-2 whitespace-normal break-words flex-1 font-wavy">
                        Blender Project
                    </div>
                    <div className="wavy-hollow bg-white ml-[4px] p-[8px] font-wavy">
                        Search Items...
                    </div>
                </div>
                <div>{children}</div>
            </WindowFrame>
        </>
    )
}

export default Kasten
