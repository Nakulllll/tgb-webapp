import Image from "next/image";
import HeroImg from "./../../../public/images/hero.svg";
import Button from "@/components/ui/button";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mx-10 md:ml-32 my-14">
                    <h1 className="text-secondary-heading md:text-[64px] font-bold">Bee for your every</h1>
                    <h1 className="text-secondary-heading md:text-[64px] font-bold gradient_text">question mark?</h1>

                    <p className="text-normal-text md:text-big-text pt-3">Life is too short to learn from your mistakes,</p>
                    <p className="text-normal-text md:text-big-text pb-14">learn from someone else's mistakes</p>
                    <Button child={"Download App"}/>
                </div>
                <Image src={HeroImg} alt="" className="w-[32rem] md:w-[28rem] lg:w-[48rem] my-14"/>
            </div>
        </>
    )
}

export default Hero;