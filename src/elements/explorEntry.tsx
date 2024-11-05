import style from "../components/wavy.module.css"

interface WindowProps {
    children?: React.ReactNode
    switchTab: (child: React.ReactNode) => void
    name: string
}

const ExplorEntry: React.FC<WindowProps> = ({ name, children, switchTab }) => {
    const switchExplorerTab = () => {
        switchTab(children)
    }

    return (
        <button
            onClick={switchExplorerTab}
            className="flex align-bottom h-[16px] w-full font-wavy text-[14px] mb-[6px] hover:cursor-default focus:border-black"
        >
            <img
                style={{
                    height: "16px",
                    marginRight: "4px",
                }}
                src={`/images/foldernormal.png`}
                alt=""
            />
            {name}
        </button>
    )
}

export default ExplorEntry
