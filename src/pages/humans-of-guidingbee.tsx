import Layout from "@/pages/_layout";

import Blog from "./../../public/blog.png"
import Blog1 from "./../../public/blog1.png"
import Blog2 from "./../../public/blog2.png"
import Image from "next/image";
import Bee from "./../../public/logo/logo.svg";
import Sample from "./../../public/sample.png";
const HumansOfGuidingbee = () => {
    return (
        <Layout>
            <div className="w-full text-black px-20">
            <h1 className="text-black opacity-80 text-4xl py-10">Latest</h1>
            <hr className="py-5"/>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-32 pb-10">
                <Image src={Blog} alt="blog"/>
                <div>
                    <h2 className="text-3xl">What We’re Reading: The problem with hashtags</h2>
                    <p className="text-xl py-5">And stories on Guiding Bee</p>
                    <div className="flex flex-row gap-4">
                        <Image src={Bee} alt=""/>
                        <div>
                            <p className="font-bold">Joe Rogan</p>
                            <p>Aug 18</p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <h1 className="text-black opacity-80 text-xl pt-10 pb-4">What We're Reading</h1>
                <hr className="py-5"/>
                <div className="flex flex-col md:flex-row justify-between pb-10 gap-10">
                    <div className="w-full bg-white py-10 px-4 rounded-2xl">
                        <Image src={Blog1} alt="" className="w-full pb-5"/>
                        <p className="text-[#0A204A] text-2xl font-semibold">Discover more with updated Topic Pages</p>
                        <p className="opacity-60 text-lg">Uncover the best stories, lists, and more with Medium’s new topic pages.</p>
                        <div className="flex flex-row gap-x-3 pt-3">
                            <Image src={Sample} alt="" className="w-16"/>
                            <div className="text-[#696969] w-full">
                                <p>Mona Thakur</p>
                                <p>Jul 6</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white py-10 px-4 rounded-2xl">
                        <Image src={Blog1} alt="" className="w-full pb-5"/>
                        <p className="text-[#0A204A] text-2xl font-semibold">Discover more with updated Topic Pages</p>
                        <p className="opacity-60 text-lg">Uncover the best stories, lists, and more with Medium’s new topic pages.</p>
                        <div className="flex flex-row gap-x-3 pt-3">
                            <Image src={Sample} alt="" className="w-16"/>
                            <div className="text-[#696969] w-full">
                                <p>Mona Thakur</p>
                                <p>Jul 6</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white py-10 px-4 rounded-2xl">
                        <Image src={Blog1} alt="" className="w-full pb-5"/>
                        <p className="text-[#0A204A] text-2xl font-semibold">Discover more with updated Topic Pages</p>
                        <p className="opacity-60 text-lg">Uncover the best stories, lists, and more with Medium’s new topic pages.</p>
                        <div className="flex flex-row gap-x-3 pt-3">
                            <Image src={Sample} alt="" className="w-16"/>
                            <div className="text-[#696969] w-full">
                                <p>Mona Thakur</p>
                                <p>Jul 6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="pb-10">
                    <h1 className="text-black opacity-80 text-xl pt-10 pb-4">Previous Week’s Hottest</h1>
                    <hr className="py-5"/>
                    <div className="flex flex-col pb-10">
                        <div className="flex flex-col-reverse md:flex-row w-full justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Updated Guidelines for Boost</h2>
                                <h5 className="text-xl">How Medium curators assess story quality, and how to think about it in your writing</h5>
                                <div className="flex flex-row gap-x-3 pt-3">
                                    <Image src={Sample} alt="" className="w-16"/>
                                    <div className="text-[#696969] w-full">
                                        <p>Mona Thakur</p>
                                        <p>Jul 6</p>
                                    </div>
                                </div>
                            </div>
                            <Image src={Blog2} alt="" className="w-full h-60 md:w-60 md:h-36 object-cover mb-10 md:mb-0"/>
                        </div>
                    </div>
                    <hr className="py-5"/>
                    <div className="flex flex-col pb-10">
                        <div className="flex flex-col-reverse md:flex-row w-full justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Updated Guidelines for Boost</h2>
                                <h5 className="text-xl">How Medium curators assess story quality, and how to think about it in your writing</h5>
                                <div className="flex flex-row gap-x-3 pt-3">
                                    <Image src={Sample} alt="" className="w-16"/>
                                    <div className="text-[#696969] w-full">
                                        <p>Mona Thakur</p>
                                        <p>Jul 6</p>
                                    </div>
                                </div>
                            </div>
                            <Image src={Blog2} alt="" className="w-full h-60 md:w-60 md:h-36 object-cover mb-10 md:mb-0"/>
                        </div>
                    </div>
                    <hr className="py-5"/>
                    <div className="flex flex-col pb-10">
                        <div className="flex flex-col-reverse md:flex-row w-full justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Updated Guidelines for Boost</h2>
                                <h5 className="text-xl">How Medium curators assess story quality, and how to think about it in your writing</h5>
                                <div className="flex flex-row gap-x-3 pt-3">
                                    <Image src={Sample} alt="" className="w-16"/>
                                    <div className="text-[#696969] w-full">
                                        <p>Mona Thakur</p>
                                        <p>Jul 6</p>
                                    </div>
                                </div>
                            </div>
                            <Image src={Blog2} alt="" className="w-full h-60 md:w-60 md:h-36 object-cover mb-10 md:mb-0"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HumansOfGuidingbee;