import ExplorEntry from "../elements/explorEntry"

interface WavyDirectoryProps {
    children?: React.ReactNode
}

const WavyDirectory: React.FC<WavyDirectoryProps> = ({ children }) => {
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
                    <ExplorEntry>Home</ExplorEntry>
                    <ExplorEntry>Blender</ExplorEntry>
                    <ExplorEntry>TV Room</ExplorEntry>
                    <ExplorEntry>Art</ExplorEntry>
                    <ExplorEntry>Animation</ExplorEntry>
                    {/* <VideoPlayer size={228}></VideoPlayer> */}
                </div>
                <div className="wavy-hollow flex pl-[8px] pr-[12px] pb-[12px] pt-[16px] bg-white w-[480px] h-96">
                    {children}
                </div>
            </div>
        </>
    )
}

export default WavyDirectory
