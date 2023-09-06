import Layout from "@/pages/_layout";
import Image from "next/image";
import Filter from "./../../public/filter.svg";

import Star from "./../../public/star.svg";
import Suitcase from "./../../public/case.svg";
import Rupee from "./../../public/rupee.svg";
import { useEffect, useState } from "react";
import LinkedIn from "../../public/wrapper/linkedin.svg";
import { db, firebase } from "../../firebase";

const Mentors = () => {
  const [allMentorList, setAllMentorList] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMentorList = async () => {
      try {
        const querySnapshot = await db
          .collection("mentors")
          .where("isVerified", "==", true)
          .get();
        const mentorData = querySnapshot.docs.map((doc) => doc.data());

        // @ts-ignore
        setAllMentorList(mentorData);
        console.log(mentorData);
      } catch (error) {
        console.error("Error fetching mentor list: ", error);
      }
    };

    getMentorList();
  }, []);

  return (
    <Layout>
      <div className="bg-[#F1F4F9] flex flex-col w-[100vw] items-start">
        <div className="mx-10 md:mx-20 py-10 w-[85vw] md:w-[90vw]">
          <div className="py-10 flex flex-col items-start">
            <p className="text-[#14142B] font-bold text-3xl">Hi Souvik!</p>
            <p className="text-[#6C6C6C] font-bold text-xl">
              It’s a great day to learn something new!
            </p>
          </div>
          <div className="flex flex-row w-full gap-x-6 items-center justify-between">
            <input
              type="search"
              placeholder="Find Mentors"
              className="w-full h-16 text-[#6C6C6C] px-5 rounded-2xl shadow border-gray-500"
            />
            <button className="flex flex-row bg-white items-center justify-between w-full md:w-[20vw] h-16 text-[#6C6C6C] px-5 rounded-2xl shadow border-gray-500">
              <Image src={Filter} alt="" />
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
            {allMentorList.map((mentor: any) => (
              <div
                key={mentor.uid}
                className="flex flex-col justify-between pb-8 items-start gap-5 bg-white shadow rounded-2xl w-full px-6 py-3 my-6 h-[36rem] relative"
              >
                <img
                  src={mentor.Image}
                  alt="User"
                  className="rounded-2xl h-64 w-full object-cover"
                />
                <div className="absolute top-6 right-10 bg-white rounded-full p-2 shadow">
                  <div className="flex flex-row items-center justify-between gap-x-2">
                    <p className="text-[#0A204A] font-semibold">
                      {mentor.Rating}
                    </p>
                    <Image src={Star} alt="Star" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-full">
                  <div className="flex flex-col justify-start w-full">
                    <p className="text-[#0A204A] text-xl font-semibold">
                      {mentor["First Name"]} {mentor["Last Name"]}
                    </p>
                    <div className="flex flex-row gap-2">
                      <Image src={Suitcase} alt="People" className="w-4" />
                      <p className="text-[#6C6C6C] font-semibold">
                        {mentor.Description.slice(0, 35)}...
                      </p>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center justify-start w-full -translate-x-1.5">
                      <Image src={Rupee} alt="People" className="w-10" />
                      <p className="text-[#FFAB00] font-semibold">
                        {mentor["Start Price Range"] +
                          "-" +
                          mentor["End Price Range"]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center text-[#6C6C6C] bg-[#FAFAFA] w-full px-5 rounded-2xl">
                  <div>
                    <p>Experience</p>
                    <p className="text-[#545454] font-bold">
                      {mentor["Experience in Years"]} years
                    </p>
                  </div>
                  <div>
                    <a href={mentor["LinkedIn URL"]} target="_blank">
                      <Image
                        src={LinkedIn}
                        alt="LinkedIn"
                        className="w-8 h-8"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mentors;
