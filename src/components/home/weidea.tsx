import Image from "next/image";
import Who from "../../../public/images/index/who.png";
import Idea from "../../../public/images/index/idea.svg";

const WeIdea = () => {
    return (
        <>
            <div className="mx-10 md:mx-32 py-10 flex flex-col items-center my-10">
                <div className="flex flex-col gap-10 md:gap-40 lg:flex-row items-center text-center lg:text-left pb-16 md:pb-0 justify-between mt-16">
                    <Image src={Who} alt="" className="h-[23rem] md:h-[35rem] w-auto"/>
                    <div>
                        <h1 className="text-secondary-heading md:text-primary-heading font-bold">Who are we?</h1>
                        <p className="text-big-text md:text-tertiary-heading py-6 text-dark_blue_text">We are one of a kind platform for both Learners and Mentors to build a community and help each other grow and succeed. </p>
                    </div>
                </div>
                <div className="flex flex-col gap-10 md:gap-40 lg:flex-row-reverse items-center text-center lg:text-left pb-16 md:pb-0 justify-between">
                    <Image src={Idea} alt="" className="h-[24rem] md:h-[35rem] w-auto"/>
                    <div>
                        <p className="text-secondary-heading md:text-primary-heading font-bold">Our Ideology</p>
                        <p  className="text-big-text md:text-tertiary-heading py-6 text-dark_blue_text"> To provide instant bite-sized consultation through verified experts from different industries via call, video conference or chat. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeIdea;