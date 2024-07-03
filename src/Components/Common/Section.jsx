// Create Simple Section Component with Title, Discription and childer which wrapped with container

const Section = ({ title, description, children }) => {
    return (
        <div className="w-full px-3 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl mt-20">
            {title && <div className="text-center ">
                <h1 className="text-3xl lg:text-5xl font-bold mb-[10px] text-dark-grey text-nowrap font-oto">{title}</h1>
                {description && <p className="text-medium-grey mb-10  ">{description}</p>}
            </div>}
            {children}
        </div>
    );
}

export default Section;