import { Center } from "@react-three/drei"
import { useState } from "react"

interface ItemProps {
    icon: string
    text: string
    children?: React.ReactNode // Make the children prop optional
    addWindow: (child: React.ReactNode) => void
}

const Item: React.FC<ItemProps> = ({ children, icon, text, addWindow }) => {
    const [showContent, setShowContent] = useState<boolean>()

    const toggleShowContent = () => {
        setShowContent(!showContent)
    }

    const addChildToWindow = () => {
        addWindow(children)
    }

    return (
        <div className="w-[64px]">
            <div className="flex justify-center" onClick={addChildToWindow}>
                <img
                    style={{ transform: "scale(1.1)" }}
                    src={`/images/${icon}.png`}
                    alt=""
                />
            </div>
            <div className="flex justify-center font-wavy text-[14px] text-center">
                {text}
            </div>
        </div>
    )
}

export default Item
