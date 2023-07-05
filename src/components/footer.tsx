import Facebook from "./../../public/logo/facebook.png";
import Twitter from "./../../public/logo/twitter.png";
import Linkedin from "./../../public/logo/linkedin.png";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="text-center bg-primary w-full py-10">
            <h1 className="text-4xl font-bold">The Guiding Bee</h1>
            <p className="text-xl font-bold text-white pt-2">An unit of Edbee Technologies Pvt. Ltd.</p>
            <div className="flex text-lg py-2 flex-row items-center text-center justify-center text-white">
                <p>Privacy Policy</p>
                <p className="mx-2">|</p>
                <p>Terms of use</p>
            </div>
            <div className="flex flex-row items-center pt-4 justify-center">
                <Image src={Facebook} alt="facebook_icon"/>
                <Image src={Twitter} alt="twitter_icon" className="mx-6"/>
                <Image src={Linkedin} alt="facebook_icon"/>
            </div>
        </div>
    )
}

export default Footer;