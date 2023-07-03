import Image from "next/image";
import MentorImg from "./../../../public/images/mentor.svg";

const Mentor = () => {
    return (
        <>
        <div className="mx-10 md:mx-32">
            <div className="flex flex-row items-center justify-between">
            <Image src={MentorImg} alt=""/>
            <div>
                <h1 className="text-primary-heading font-bold">Are you a mentor?</h1>
                <div>
                <p>We got you covered! </p>
                <p>Join our platform, where you can make a lasting impact on the next generation of entrepreneurs. Our platform provides a unique opportunity for you to share your knowledge and experience with startups, helping them reach their full potential. </p>
                </div>
                    <p className="font-bold my-3">Excited? Wait there is more, we help you schedule webinars, master class, a lot more. </p>
                <div className="flex flex-row items-center my-2">
                    <div className="mr-10">
                        <p className="text-secondary-heading font-bold">20+</p>
                        <p>Teaching Categories</p>
                    </div>
                    <div>
                        <p className="text-secondary-heading font-bold">30+</p>
                        <p>Expert member board</p>
                    </div>
                </div>
                <div className="my-10">
                <h4 className="text-big-text font-bold">Want to be a mentor?</h4>
                <button
                    type="submit"
                    className="w-44 px-4 py-3 my-2 bg-primary rounded-3xl hover:bg-button_hover transition-all"
                >
                    Fill request form
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Mentor;