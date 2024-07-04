import Section from "../Common/Section";
import CircleWithPlus from "./CircleWithPlus";

const Counts = () => {
    return (
        <>
        <Section className={"bg-dark-grey relative"} >
            <div className="w-full absolute left-0 -bottom-10"><img src="green-to-white.jpg" alt="" srcset="" /></div>
            <div className="w-full absolute left-0 -top-10 rotate-180"><img src="green-to-white.jpg" alt="" srcset="" /></div>
            <div className="p-6 md:p-10 lg:p-20 flex flex-wrap justify-around">

            <CircleWithPlus number={"150"} text={"Cities"}/>
            <CircleWithPlus number={"400"} text={"Volunteers"}/>
            <CircleWithPlus number={"10K"} text={"Our Goal"}/>
            <CircleWithPlus number={"5K"} text={"Raised"}/>
            </div>
        </Section>
        </>
    );
}
export default Counts;


