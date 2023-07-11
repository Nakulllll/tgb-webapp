import Image from "next/image";
import HeroImg from "./../../../public/images/hero.svg";
import Button from "@/components/ui/button";
import Google from "./../../../public/logo/play.png";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mx-16 md:ml-56 mt-14">
                    <h1 className="text-secondary-heading md:text-[64px] font-bold">Bee for your every</h1>
                    <h1 className="text-secondary-heading md:text-[64px] font-bold gradient_text">question mark?</h1>

                    <p className="text-normal-text md:text-big-text pt-3">Life is too short to learn from your mistakes,</p>
                    <p className="text-normal-text md:text-big-text pb-14">learn from someone else's mistakes</p>
                    <a href="https://play.google.com/store/apps/details?id=com.project.tgbdev" target="_blank">
                    <Image src={Google} alt="" className="w-48 h-auto"/>
                    </a>
                </div>
                <Image src={HeroImg} alt="" className="w-[28rem] md:w-[24rem] lg:w-[48rem] mt-14"/>
            </div>
        </>
    )
}

export default Hero;