import style from "../components/wavy.module.css"

interface WindowProps {
    children?: React.ReactNode
}

const ExplorEntry: React.FC<WindowProps> = ({ children }) => {
    return (
        <button className="flex align-bottom h-[16px] w-full font-wavy text-[14px] mb-[6px] hover:cursor-default focus:bg-[#97be0d]">
            <img
                style={{
                    height: "16px",
                    marginRight: "4px",
                }}
                src={`/images/foldernormal.png`}
                alt=""
            />
            {children}
        </button>
    )
}

export default ExplorEntry
