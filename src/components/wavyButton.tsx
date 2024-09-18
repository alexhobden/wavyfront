interface WavyButtonProps {
    children?: React.ReactNode // Make the children prop optional
    use?: () => void
    funktion: string
}

const WavyButton: React.FC<WavyButtonProps> = ({ children, funktion, use }) => {
    const name = `/svgs/${funktion}.svg`

    return (
        <button
            onClick={use}
            style={{
                backgroundImage: `url(${name})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
            }}
            className="wavy-button w-[24px] h-[24px] ml-[1px] flex items-center justify-center"
        >
            {children}
        </button>
    )
}

export default WavyButton
