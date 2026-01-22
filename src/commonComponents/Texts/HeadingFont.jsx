

const HeadingFont = ({ text, className = '' }) => {
    return (
        <p className={`2xl:text-[35px] xl:text-[30px] md:text-[25px] sm:text-[20px] text-[18px] ${className}`}>
            {text}
        </p>
    )
}

export default HeadingFont;
