import React, { useState, useEffect } from "react"

interface Props {
    text: string
    speed: number
    linebreak: number
    stepsize: number
}

const TypingEffect: React.FC<Props> = ({
    text,
    speed,
    linebreak,
    stepsize,
}) => {
    const [currentText, setCurrentText] = useState("")

    useEffect(() => {
        let currentIndex = 0

        const intervalId = setInterval(() => {
            if (currentIndex >= text.length) {
                clearInterval(intervalId)
                return
            }

            for (var i = 0; i < stepsize; i++) {
                const nextChar = text[currentIndex]
                setCurrentText((prevText) => prevText + nextChar)

                // Add a line break after the number of characters that is stored in linebreak
                if ((currentIndex + 1) % linebreak === 0) {
                    setCurrentText((prevText) => prevText + "<br/>")
                }

                currentIndex++
            }
        }, speed)

        return () => clearInterval(intervalId)
    }, [text])

    return <div dangerouslySetInnerHTML={{ __html: currentText }} />
}

export default TypingEffect
