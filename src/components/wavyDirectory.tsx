import { useState } from "react"
import ExplorEntry from "../elements/explorEntry"
import Home from "./pages/home"
import Creative from "./pages/creative"
import TVRoom from "./pages/tvroom"

interface WavyDirectoryProps {
    children?: React.ReactNode
    addWindow: (newWindow: React.ReactNode) => void
}

const WavyDirectory: React.FC<WavyDirectoryProps> = ({
    children,
    addWindow,
}) => {
    const [explorerTab, setExplorerTab] = useState<React.ReactNode>()

    const switchTab = (newTab: React.ReactNode) => {
        setExplorerTab(newTab)
    }
    return (
        <>
            <div
                style={{ display: "flex" }}
                className="w-full h-[36px] font-wavy p-[8px] ml-[4px] bg-white wavy-hollow"
            >
                <img
                    className="ml-[12px] mr-[8px]"
                    src={`/images/foldernormal.png`}
                    alt=""
                />{" "}
                W:/user/alex/desktop/wavydrive
            </div>
            <div className="flex">
                <div className="w-[200px] p-[20px] bg-white wavy-hollow">
                    <ExplorEntry name="Home" switchTab={switchTab}>
                        <Home></Home>
                    </ExplorEntry>
                    <ExplorEntry name="Creative" switchTab={switchTab}>
                        <Creative addWindow={addWindow}></Creative>
                    </ExplorEntry>
                    <ExplorEntry name="TV Room" switchTab={switchTab}>
                        <TVRoom addWindow={addWindow}></TVRoom>
                    </ExplorEntry>
                    {/* <VideoPlayer size={228}></VideoPlayer> */}
                </div>
                <div className="wavy-hollow flex pl-[8px] pr-[12px] pb-[12px] pt-[16px] bg-white w-[480px] h-96">
                    {explorerTab}
                </div>
            </div>
        </>
    )
}

export default WavyDirectory
