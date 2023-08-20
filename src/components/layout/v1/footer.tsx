import Facebook from "../../../../public/logo/facebook.png";
import Twitter from "../../../../public/logo/twitter.png";
import Linkedin from "../../../../public/logo/linkedin.png";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="text-center bg-primary py-10 px-10 w-full">
            <h1 className="text-secondary-heading md:text-4xl font-bold">The Guiding Bee</h1>
            <p className="text-normal-text md:text-xl font-bold text-white pt-2">An unit of Edbee Technologies Pvt. Ltd.</p>
            <div className="flex text-lg py-2 flex-row items-center text-center justify-center text-white">
                <a>Privacy Policy</a>
                <p className="mx-2">|</p>
                <a>Terms of use</a>
            </div>
            <div className="flex flex-row items-center pt-4 justify-center">
                <a className="cursor-pointer" target="_blank" href="https://instagram.com/theguidingbee?igshid=NGExMmI2YTkyZg==">
                    <Image src={Facebook} alt="facebook_icon"/>
                </a>
                <a className="cursor-pointer" target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://twitter.com/theguidingbee&ved=2ahUKEwjG7sGP6oWAAxWIumMGHX1vBJAQjjh6BAgNEAE&usg=AOvVaw03a772wUE2qVAZY2eWqQAf">
                    <Image src={Twitter} alt="twitter_icon" className="mx-6"/>
                </a>
                <a className="cursor-pointer" target="_blank" href="https://www.linkedin.com/company/guidingbee/">
                    <Image src={Linkedin} alt="facebook_icon"/>
                </a>

            </div>
        </div>
    )
}

export default Footer;