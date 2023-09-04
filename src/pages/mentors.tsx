import Layout from "@/pages/_layout";
import Image from "next/image";
import Filter from "./../../public/filter.svg";

import GTM from "./../../public/category-icons/fluent-mdl2_market.png";
import Marketing from "./../../public/category-icons/Vector.png";
import MVP from "./../../public/category-icons/fePrototype2.png";
import Valuation from "./../../public/category-icons/Group 37219.png";
import Pitch  from "./../../public/category-icons/Group 37332.png";
import Patent from "./../../public/category-icons/fluent-emoji-high-contrast_copyright.png";
import Legal from "./../../public/category-icons/mdi_legal.png";
import TeamManager from "./../../public/category-icons/Vector-1.png";
import {topMentors} from "@/data/mentors";
import People from "../../public/people.svg";

import Star from "./../../public/star.svg";
import Suitcase from "./../../public/case.svg";
import Rupee from "./../../public/rupee.svg";


const Mentors = () => {
    return (
        <Layout>
            <div className="bg-[#F1F4F9] flex flex-col w-[100vw] items-start">
                <div className="mx-10 md:mx-20 py-10 w-[85vw] md:w-[90vw]">
                    <div className="py-10 flex flex-col items-start">
                        <p className="text-[#14142B] font-bold text-3xl">Hi Souvik!</p>
                        <p className="text-[#6C6C6C] font-bold text-xl">It’s a great day to learn something new!</p>
                    </div>
                    <div className="flex flex-row w-full gap-x-6 items-center justify-between">
                        <input
                            type="search"
                            placeholder="Find Mentors"
                            className="w-full h-16 text-[#6C6C6C] px-5 rounded-2xl shadow border-gray-500"
                        />
                        <button className="flex flex-row bg-white items-center justify-between w-full md:w-[20vw] h-16 text-[#6C6C6C] px-5 rounded-2xl shadow border-gray-500">
                            <Image src={Filter} alt=""/>
                            <p>Filters</p>
                        </button>
                    </div>
                    {/*<div className="text-[#0A204A] py-10 flex flex-row justify-between">
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={Marketing} alt="Marketing"/>
                            <p>Marketing</p>
                        </div>
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={Pitch} alt="Pitch"/>
                            <p>Pitch</p>
                        </div>
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={MVP} alt="MVP"/>
                            <p>MVP</p>
                        </div>
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={GTM} alt="GTM"/>
                            <p>GTM</p>
                        </div>
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={Valuation} alt="Valuation"/>
                            <p>Valuation</p>
                        </div>
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={Patent} alt="Patent"/>
                            <p>Patent</p>
                        </div>
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={Legal} alt="Legal"/>
                            <p>Legal</p>
                        </div>
                        <div className="flex flex-col items-center text-lg font-bold">
                            <Image src={TeamManager} alt="TeamManager"/>
                            <p>TeamManager</p>
                        </div>
                    </div>*/}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-x-4 w-full pt-10">
                        {topMentors.map((mentor: any) => (
                            <div
                                key={mentor.id}
                                className="flex flex-col h-[32rem] justify-between pb-8 items-start gap-10 bg-white shadow rounded-2xl w-full px-6 py-3 my-6 relative"
                            >
                                <img src={mentor.image} alt="User" className="w-full h-auto rounded-2xl"/>
                                <div
                                    className="absolute top-6 right-10 bg-white rounded-full p-2 shadow"
                                >
                                    <div className="flex flex-row items-center justify-between gap-x-2">
                                        <p className="text-[#0A204A] font-semibold">{mentor.rating}</p>
                                        <Image src={Star} alt="Star"/>
                                    </div>
                                </div>
                                <div  className="flex flex-row justify-between items-start w-full">
                                    <div className="flex flex-col justify-between w-full">
                                        <p className="text-[#0A204A] text-xl font-semibold">
                                            {mentor.name}
                                        </p>
                                        <div className="flex flex-row gap-2">
                                            <Image src={Suitcase} alt="People" className="w-4"/>
                                            <p className="text-[#6C6C6C] font-semibold">{mentor.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-1 items-center justify-end w-full">
                                        <Image src={Rupee} alt="People" className="w-12"/>
                                        <p className="text-[#FFAB00] font-semibold">{mentor.earnings}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between text-[#6C6C6C] bg-[#FAFAFA] w-full px-5 px-3 rounded-2xl">
                                    <div>
                                        <p>Experience</p>
                                        <p className="text-[#545454] font-bold">{mentor.experience}</p>
                                    </div>
                                    <div>
                                        <p>Mentored</p>
                                        <p className="text-[#545454] font-bold">{mentor.mentored}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Mentors;