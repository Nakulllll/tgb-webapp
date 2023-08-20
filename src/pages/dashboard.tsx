import Layout from "@/pages/_layout";
import Image from "next/image";
import User from "./../../public/wrapper/user.png";
import People from "./../../public/people.svg";
import ViewAll from "./../../public/view-all.svg";

import {scheduledCalls, topMentors} from "./../data/dashboard";

import Analytics from "./../../public/categories/analytics.png";
import Funding from "./../../public/categories/funding.png";
import Customer from "./../../public/categories/customer.png";
import Marketing from "./../../public/categories/marketing.png";

import BlueBee from "./../../public/hero-blue-bee.svg";
import YellowHex from "./../../public/hexagon.svg";

const Dashboard = () => {
    return (
        <div>
            <Layout>
            <div className="bg-[#F1F4F9] w-[100vw]">
                <div className="hero-section bg-[#0A204A] relative h-[35rem] rounded-b-[50px] md:rounded-b-[200px]">
                    <div className="mx-20 py-10 flex flex-col items-start">
                        <p className="text-white font-bold text-3xl">Hi Souvik!</p>
                        <p className="text-white font-bold text-xl">It’s a great day to learn something new!</p>
                    </div>
                    <Image src={BlueBee} alt="blue-bee" className="absolute -z-10  -top-56 left-0 md:right-1/3 items-center"/>
                    <Image src={YellowHex} alt="blue-bee" className="hidden md:block absolute -z-24 -top-10 right-0 items-center"/>
                    <div className="flex flex-col items-center text-center justify-center mx-10 gradient-text">
                        <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">Let’s</h1>
                        <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">Elevate</h1>
                        <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">Your</h1>
                        <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">Startup</h1>
                    </div>
                </div>

                <div className="mx-5 md:mx-20 py-10 flex flex-col items-start text-[#14142B] ">
                    <p className="font-bold text-2xl">Scheduled Calls</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-x-10 lg:gap-x-20">
                        {scheduledCalls.map(call => (
                            <div
                                key={call.id}
                                className="flex flex-row items-start gap-10 bg-white shadow rounded-2xl px-6 lg:px-12 py-6 my-6"
                            >
                                <Image src={User} alt="User" />
                                <div className="flex flex-col justify-between">
                                    <p className="text-black text-xl font-semibold">{call.name}</p>
                                    <p className="text-[#6C6C6C]">{call.role}</p>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p className="text-[#0A204A]">
                                        {call.date}, {call.time}
                                    </p>
                                    <p className="text-[#EB4335] font-semibold">{call.remainingTime}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mx-5 md:mx-20 py-10 flex flex-col items-start text-[#14142B] ">
                    <div className="flex flex-row justify-between w-full">
                        <p className="font-bold text-2xl">Top Mentors</p>
                        <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
                            <p className="text-[#FDB813] font-bold">View All</p>
                            <Image src={ViewAll} alt="view more" className="w-5"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start gap-x-4 w-full">
                        {topMentors.map(mentor => (
                            <div
                                key={mentor.id}
                                className="flex flex-col items-start gap-10 bg-white shadow rounded-2xl w-full px-6 py-3 my-6"
                            >
                                <img src={mentor.image} alt="User" className="w-full h-auto rounded-2xl"/>
                                <div className="flex flex-col justify-between w-full">
                                    <p className="text-[#0A204A] text-xl font-semibold">
                                        {mentor.name}
                                    </p>
                                    <div className="flex flex-row justify-between items-stretch w-full">
                                        <p className="text-[#6C6C6C] font-semibold">{mentor.role}</p>
                                        <div className="flex flex-row gap-2">
                                            <Image src={People} alt="People" className="w-4"/>
                                            <p className="text-[#6C6C6C] font-semibold">{mentor.number}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-5 md:mx-20 py-10 flex flex-col items-start text-[#14142B] ">
                    <div className="flex flex-row justify-between w-full">
                        <p className="font-bold text-2xl">Explore Categories</p>
                        <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
                            <p className="text-[#FDB813] font-bold">View All</p>
                            <Image src={ViewAll} alt="view more" className="w-5"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-start gap-x-4 w-full my-6">
                        <Image src={Analytics} alt="Analytics" className="w-full py-5"/>
                        <Image src={Funding} alt="Funding" className="w-full  py-5"/>
                        <Image src={Customer} alt="Customer" className="w-full  py-5"/>
                        <Image src={Marketing} alt="Marketing" className="w-full  py-5"/>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    );
}

export default Dashboard;