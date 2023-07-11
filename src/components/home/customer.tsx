import ProfPhoto from "./../../../public/images/profile.png";
import ProfPhoto1 from "./../../../public/images/profile2.png";
import ProfPhoto2 from "./../../../public/images/profile3.png";
import Image from "next/image";

const Customer = () => {
    return (
        <>
            <div className="flex flex-col items-center mx-10 md:mx-32 overflow-auto">
                <h1 className="text-primary-heading text-center font-bold">What Our Customers Say</h1>
                <p className="text-normal-text text-justify md:text-center font-light my-4">Our customers rave about the convenience and effectiveness of our platform. They love the ability to connect with verified experts from different industries for instant advice and guidance. From bite-sized consultations to personalized mentorship, they've found success and growth through our community. Join the many satisfied customers who are raving about the positive impact we've made on their lives and careers!</p>

                <div className="flex flex-col gap-10 md:flex-row justify-center my-16 items-center">

                    <div className="bg-grey_bg mx-10 flex flex-col items-center w-full md:w-1/4 relative px-20 py-10 rounded-3xl text-center">
                    <Image src={ProfPhoto} alt="" className="absolute -top-6"/>
                        <p className="pt-10">
                    Nakul sir, was a great help to get clarity about my entrepreneurial journey.
                    He was always a call away for all my problems, He is not only o me!
                    </p>
                    <h4 className="text-tertiary-heading text-yellow_text font-semibold mt-2">Taran Kumar</h4>
                    <p className="font-bold text-small-text">Student Entrepreneur</p>
                    </div>
                    <div className="bg-grey_bg mx-10 flex flex-col items-center w-full md:w-1/4 relative px-20 py-10 rounded-3xl text-center">
                        <Image src={ProfPhoto1} alt="" className="absolute -top-6"/>
                        <p className="pt-10">
                            Nakul sir, was a great help to get clarity about my entrepreneurial journey.
                            He was always a call away for all my problems, He is not only o me!
                        </p>
                        <h4 className="text-tertiary-heading text-yellow_text font-semibold mt-2">Taran Kumar</h4>
                        <p className="font-bold text-small-text">Student Entrepreneur</p>
                    </div>
                    <div className="bg-grey_bg mx-10 flex flex-col items-center w-full md:w-1/4 relative px-20 py-10 rounded-3xl text-center">
                        <Image src={ProfPhoto2} alt="" className="absolute -top-6"/>
                        <p className="pt-10">
                            Nakul sir, was a great help to get clarity about my entrepreneurial journey.
                            He was always a call away for all my problems, He is not only o me!
                        </p>
                        <h4 className="text-tertiary-heading text-yellow_text font-semibold mt-2">Taran Kumar</h4>
                        <p className="font-bold text-small-text">Student Entrepreneur</p>
                    </div>
                </div>

                <div className="font-bold text-yellow_text pb-6">
                    and many more...
                </div>
            </div>
        </>
    )
}

export default Customer;