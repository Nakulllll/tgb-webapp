import Layout from "@/pages/_layout";
import Image from "next/image";
import User from "./../../public/wrapper/user.png";
import ViewAll from "./../../public/view-all.svg";
import allCategories from "@/data/categoryImages";

import YellowHex from "./../../public/hexagon.svg";
import { useEffect, useState } from "react";
import { db } from "./../../firebase";

import { Spinner } from "@nextui-org/react";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({} as any);
  const [allMentorList, setAllMentorList] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMentorList = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const uid = user.uid;

        const querySnapshot = await db
          .collection("mentors")
          .where("isVerified", "==", true)
          .get();
        const mentorData = querySnapshot.docs.map((doc) => doc.data());

        const querySnapshotUser = await db.collection("users").doc(uid).get();
        const userData = querySnapshotUser.data();

        // @ts-ignore
        //setName(userData["First Name"] + " " + userData["Last Name"]);

        //console.log(name);

        // @ts-ignore
        setAllMentorList(mentorData.slice(0, 5));
        setUser(userData);
        console.log(userData);
        console.log(mentorData);
      } catch (error) {
        console.error("Error fetching mentor list: ", error);
      }
      setLoading(false);
    };

    getMentorList();
  }, []);

  // @ts-ignore
  return (
    <div>
      <Layout>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Spinner color="primary" size="lg" />
          </div>
        ) : (
          <div className="bg-[#F1F4F9] w-[100vw]">
            <div className="hero-section bg-[#0A204A] relative h-[35rem] rounded-b-[50px] md:rounded-b-[200px]">
              <div className="-z-50">
                <div className="mx-20 py-10 flex flex-col items-start">
                  <p className="text-white font-bold text-3xl md:text-5xl pb-4">
                    Welcome to Guiding Bee!
                  </p>
                  <p className="text-white font-bold text-xl md:text-3xl">
                    It's a great day to learn something new!
                  </p>
                </div>
                <Image
                  src={YellowHex}
                  alt="blue-bee"
                  className="hidden md:block absolute -z-24 -top-10 right-0 items-center"
                />
                <Image
                  src={YellowHex}
                  alt="blue-bee"
                  className="hidden md:block absolute -z-24 -bottom-10 rotate-180 left-0 items-center"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mx-10 gradient-text">
                <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">
                  Let's
                </h1>
                <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">
                  Elevate
                </h1>
                <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">
                  Your
                </h1>
                <h1 className="text-6xl md:text-7xl font-extrabold gradient-text">
                  Startup
                </h1>
              </div>
            </div>

            <div className="mx-5 md:mx-20 py-10 flex flex-col items-start text-[#14142B]">
              <p className="font-bold text-2xl">Scheduled Calls</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-start gap-x-0 md:gap-x-10 lg:gap-x-20">
                <p className="py-5">No scheduled calls</p>
              </div>
            </div>

            <div className="mx-5 md:mx-20 py-10 flex flex-col items-start text-[#14142B] ">
              <div className="flex flex-row justify-between w-full">
                <p className="font-bold text-2xl">Top Mentors</p>
                <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
                  <p className="text-[#FDB813] font-bold">View All</p>
                  <Image src={ViewAll} alt="view more" className="w-5" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start w-full gap-x-0 md:gap-x-4">
                {allMentorList.map((mentor: any) => (
                  <div
                    key={mentor.uid}
                    className="flex flex-col items-start gap-10 bg-white shadow rounded-2xl w-full px-6 py-3 my-6 h-[26rem]"
                  >
                    <img
                      src={mentor.Image}
                      alt="User"
                      className="rounded-2xl h-64 w-full object-cover"
                    />
                    <div className="flex flex-col justify-between w-full">
                      <p className="text-[#0A204A] text-xl font-semibold">
                        {mentor["First Name"]} {mentor["Last Name"]}
                      </p>
                      <div className="flex flex-row justify-between items-stretch w-full">
                        <p className="text-[#6C6C6C] font-semibold">
                          Exp: {mentor["Experience in" + " Years"]} years
                        </p>
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
                  <button
                    className="text-[#FDB813] font-bold"
                    onClick={toggleCategories}
                  >
                    {showAllCategories ? "View Less" : "View All"}
                  </button>
                  <Image src={ViewAll} alt="view more" className="w-5" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-start gap-x-4 w-full my-6">
                {showAllCategories
                  ? allCategories.map((category) => (
                      <a
                        key={category.id}
                        href={`/mentors/${category.id}`}
                        className="w-full py-5"
                      >
                        <Image src={category.imageSrc} alt={category.alt} />
                      </a>
                    ))
                  : allCategories.slice(0, 8).map((category) => (
                      <a
                        key={category.id}
                        href={`/mentors/${category.id}`}
                        className="w-full py-5"
                      >
                        <Image src={category.imageSrc} alt={category.alt} />
                      </a>
                    ))}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Dashboard;
