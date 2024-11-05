import { useEffect, useState } from "react"
import WavyButton from "./wavyButton"

interface WindowProps {
    children?: React.ReactNode
    title?: string
}

const WindowFrame: React.FC<WindowProps> = ({ children, title }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [position, setPosition] = useState<{ top: number; left: number }>({
        top: 0,
        left: 0,
    })
    const [zIndex, setZIndex] = useState<number>()
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    const handleRemove = () => {
        setIsVisible(false)
    }

    const generateRandomPosition = () => {
        const randomTop = Math.floor(Math.random() * (window.innerHeight - 600))
        const randomLeft = Math.floor(Math.random() * (window.innerWidth - 400))
        setPosition({ top: randomTop, left: randomLeft })
        handleZ()
    }

    const handleMouseDown = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setIsDragging(true)
        // Calculate the offset between the mouse position and the div's top-left corner
        setOffset({
            y: e.clientY - position.top,
            x: e.clientX - position.left,
        })

        handleZ()
    }

    const handleZ = () => {
        const elements = document.querySelectorAll("*") // Select all elements
        let highestZIndex = 0

        elements.forEach((el) => {
            const zIndex = Number(window.getComputedStyle(el).zIndex)
            if (!isNaN(zIndex)) {
                highestZIndex = Math.max(highestZIndex, zIndex)
            }
        })

        setZIndex(highestZIndex + 1)
    }

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
    ) => {
        if (isDragging) {
            // Update the position of the div based on the mouse movement
            setPosition({
                top: e.clientY - offset.y,
                left: e.clientX - offset.x,
            })
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        } else {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isDragging])

    useEffect(() => {
        generateRandomPosition()
    }, [])

    return (
        <>
            {isVisible && (
                <div
                    className="fixed p-[3px] wavy-solid inline-block select-none"
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        zIndex: `${zIndex}`,
                    }}
                    onClick={handleZ}
                >
                    <div className="shadow-header px-[8px] pb-[6px] pt-[6px] flex items-center h-[36px] bg-header mb-[2px]">
                        <div
                            className="flex-grow-4 font-wavy text-white text-stroke"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            style={{
                                cursor: isDragging ? "grabbing" : "grab",
                            }}
                        >
                            {title ? title : "Wavy Window"}
                        </div>
                        <WavyButton funktion="minimize"></WavyButton>
                        <WavyButton funktion="maximize"></WavyButton>
                        <WavyButton
                            funktion="close"
                            use={handleRemove}
                        ></WavyButton>
                    </div>
                    <div className="pl-[2px] pb-[4px] pr-[4px] pt[2px]">
                        <div className="flex flex-col items-center p-[4px] wavy-hollow">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default WindowFrame
