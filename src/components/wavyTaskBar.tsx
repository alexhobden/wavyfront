const WavyTaskBar: React.FC = () => {
    return (
        <div className="font-wavy flex font-custom fixed p-[3px] w-full bottom-0 left-0 h-11 wavy-solid">
            <button className="wavy-solid flex items-center justify-center">
                <img
                    style={{
                        height: "26px",
                        margin: "8px",
                    }}
                    src={`/images/network.png`}
                    alt=""
                />
            </button>
        </div>
    )
}

export default WavyTaskBar
