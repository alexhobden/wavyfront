import React, { useState, useEffect, useRef } from "react"

interface VideoPlayerProps {
    size: number
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ size }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const videoRef = useRef<HTMLVideoElement>(null)

    const videoSources: string[] = [
        "/powerplant/1.mov",
        "/powerplant/2.mov",
        "/powerplant/3.mov",
        "/powerplant/4.mov",
        "/powerplant/5.mov",
        "/powerplant/6.mov",
        "/powerplant/7.mov",
        "/powerplant/8.mov",
        "/powerplant/9.mov",
        "/powerplant/10.mov",
        "/powerplant/11.mov",
        "/powerplant/12.mov",
        "/powerplant/13.mov",
        "/powerplant/14.mov",
        "/powerplant/15.mov",
        "/powerplant/16.mov",
        "/powerplant/17.mov",
        "/powerplant/18.mov",
        "/powerplant/19.mov",
        "/powerplant/20.mov",
        "/powerplant/21.mov",
        "/powerplant/22.mov",
        "/powerplant/23.mov",
        "/powerplant/24.mov",
        "/powerplant/25.mov",
        "/powerplant/26.mov",
        "/powerplant/27.mov",
        "/powerplant/28.mov",
        "/powerplant/29.mov",
        "/powerplant/30.mov",
        "/powerplant/31.mov",

        // "/sylt/1.mov",
        // "/sylt/2.mov",
        // "/sylt/3.mov",
        // "/sylt/4.mov",
        // "/sylt/5.mov",
        // "/sylt/6.mov",
        // "/sylt/7.mov",
        // "/sylt/8.mov",
        // "/sylt/9.mov",
        // "/sylt/10.mov",
        // "/sylt/11.mov",
        // "/sylt/12.mov",
        // "/sylt/13.mov",
        // "/sylt/14.mov",

        // Add more video paths here
    ]

    useEffect(() => {
        if (!videoRef.current) return
        const shuffledVideos: string[] = shuffleArray([...videoSources])

        const videoElement = videoRef.current
        videoElement.src = shuffledVideos[currentIndex]

        function shuffleArray(array: string[]): string[] {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[array[i], array[j]] = [array[j], array[i]]
            }
            return array
        }

        const handleLoadedData = () => {
            videoElement.play().catch((error) => {
                console.error("Error attempting to play the video:", error)
            })
        }

        const handleEnded = () => {
            const nextIndex = (currentIndex + 1) % shuffledVideos.length
            setCurrentIndex(nextIndex)
            videoElement.src = shuffledVideos[nextIndex]
        }

        videoElement.addEventListener("ended", handleEnded)
        videoElement.addEventListener("loadeddata", handleLoadedData)

        return () => {
            videoElement.removeEventListener("ended", handleEnded)
            videoElement.removeEventListener("loadeddata", handleLoadedData)
        }
    }, [currentIndex])

    return (
        <video ref={videoRef} width={size} height={size} autoPlay muted>
            <source src={videoSources[currentIndex]} type="video/mp4" />
        </video>
    )
}

export default VideoPlayer
