import Layout from "./_layout";
import { useState } from "react";
import Image from "next/image";
import Pic from "../../public/pic.png";

const Chat = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Layout>
      <div className="text-[#130F26] bg-white px-10 py-20 mx-10 my-20 rounded-2xl">
        <div className="flex flex-row">
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-x-64 items-center">
              <p className="text-2xl">Contacts</p>
              <p className="text-[#6C6C6C] text-xl">34</p>
            </div>
            <input
              className="text-[#6C6C6C] rounded-lg px-3 py-2 border border-gray-500 my-3"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <p className="py-1"></p>
            <div className="flex flex-row py-2 justify-between">
              <div className="flex flex-row gap-4 ">
                <Image src={Pic} alt="img" className="object-cover" />
                <div>
                  <p className="text-xl">John Doe</p>
                  <p className="text-[#6C6C6C]">Hello</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-5">
                  <p className="bg-[#FFCC91] rounded text-black px-2 flex items-center">
                    New
                  </p>
                  <p className="bg-[#ed932c] w-6 h-6 flex flex-row items-center justify-center rounded-full">
                    3
                  </p>
                </div>
                <p className="text-[#6C6C6C] pl-6 my-1">12:55 am</p>
              </div>
            </div>
            <div className="flex flex-row py-2 justify-between">
              <div className="flex flex-row gap-4 ">
                <Image src={Pic} alt="img" className="object-cover" />
                <div>
                  <p className="text-xl">John Doe</p>
                  <p className="text-[#6C6C6C]">Hello</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-5">
                  <p className="bg-[#FFCC91] rounded text-black px-2 flex items-center">
                    New
                  </p>
                  <p className="bg-[#ed932c] w-6 h-6 flex flex-row items-center justify-center rounded-full">
                    3
                  </p>
                </div>
                <p className="text-[#6C6C6C] pl-6 my-1">12:55 am</p>
              </div>
            </div>
            <div className="flex flex-row py-2 justify-between">
              <div className="flex flex-row gap-4 ">
                <Image src={Pic} alt="img" className="object-cover" />
                <div>
                  <p className="text-xl">John Doe</p>
                  <p className="text-[#6C6C6C]">Hello</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-5">
                  <p className="bg-[#FFCC91] rounded text-black px-2 flex items-center">
                    New
                  </p>
                  <p className="bg-[#ed932c] w-6 h-6 flex flex-row items-center justify-center rounded-full">
                    3
                  </p>
                </div>
                <p className="text-[#6C6C6C] pl-6 my-1">12:55 am</p>
              </div>
            </div>
            <div className="flex flex-row py-2 justify-between">
              <div className="flex flex-row gap-4 ">
                <Image src={Pic} alt="img" className="object-cover" />
                <div>
                  <p className="text-xl">John Doe</p>
                  <p className="text-[#6C6C6C]">Hello</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-5">
                  <p className="bg-[#FFCC91] rounded text-black px-2 flex items-center">
                    New
                  </p>
                  <p className="bg-[#ed932c] w-6 h-6 flex flex-row items-center justify-center rounded-full">
                    3
                  </p>
                </div>
                <p className="text-[#6C6C6C] pl-6 my-1">12:55 am</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
