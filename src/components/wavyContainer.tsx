import WindowFrame from "./windowFrame"

interface KastenProps {
    children?: React.ReactNode
    title?: string
    descriptions?: string
}

const Kasten: React.FC<KastenProps> = ({ children, title, descriptions }) => {
    return (
        <>
            <WindowFrame title={title}>
                <div className="flex w-full mb-[4px]">
                    <div className="wavy-solid p-2 whitespace-normal break-words flex-1 font-wavy">
                        {descriptions ? descriptions : "Project X"}
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
