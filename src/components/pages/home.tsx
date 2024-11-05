import Typewriter from "../../utils/Typewriter"

const Home: React.FC = () => {
    return (
        <div className="font-wavy text-center">
            <img src="/images/wavyIcon.png" alt="" />
            <Typewriter
                text="Welcome to the WavyOS. My name is Wavy. I am your personal Desktop. Look around and explore the features of WavyOS."
                speed={30}
                linebreak={999}
                stepsize={1}
            ></Typewriter>
        </div>
    )
}
export default Home
