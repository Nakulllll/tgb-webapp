import Image from "next/image";

import Instagram from "../../../../public/wrapper/insta.svg";
import LinkedIn from "../../../../public/wrapper/linkedin.svg";
import BlueBee from "../../../../public/hero-blue-bee.svg";

const BottomNavBar = () => {
    return (
        <div className="bg-[#0A204A] w-full flex flex-col justify-center items-center h-[30rem] -z-20 rounded-t-[50px] md:rounded-t-[300px] text-center text-white py-10 relative">
            <Image src={BlueBee} alt="blue-bee" className="absolute -z-10 right-1 md:right-1/3 items-center h-[30rem]"/>
            <p className="text-2xl md:text-4xl font-bold py-2 text-[#FDB813]">The Guiding Bee</p>
            <p className="text-lg md:text-xl font-bold">An unit of Edbee Technologies Pvt. Ltd.</p>
            <a className="bg-white text-black px-4 py-2 cursor-pointer rounded-2xl my-4">Contact Us</a>

            <div className="flex flex-col md:flex-row items-center gap-4 py-4 ">
                <p>About Us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
            </div>

            <div className="flex gap-4">
                <Image src={Instagram} alt="Instagram"/>
                <Image src={LinkedIn} alt="LinkedIn"/>
            </div>
        </div>
    )
}

export default BottomNavBar;