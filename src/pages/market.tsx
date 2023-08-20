import Layout from "@/pages/_layout";
import Select from 'react-select';

import One from "./../../public/one.svg";
import Two from "./../../public/two.svg";
import Image from "next/image";

const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'cn', label: 'China' },
    { value: 'jp', label: 'Japan' },
    { value: 'de', label: 'Germany' },
    { value: 'in', label: 'India' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'fr', label: 'France' },
    { value: 'it', label: 'Italy' },
    { value: 'br', label: 'Brazil' },
    { value: 'ca', label: 'Canada' },
    { value: 'kr', label: 'South Korea' },
    { value: 'ru', label: 'Russia' },
    { value: 'au', label: 'Australia' },
    { value: 'es', label: 'Spain' },
    { value: 'mx', label: 'Mexico' },
    { value: 'id', label: 'Indonesia' },
    { value: 'nl', label: 'Netherlands' },
    { value: 'tr', label: 'Turkey' },
    { value: 'sa', label: 'Saudi Arabia' },
    { value: 'ch', label: 'Switzerland' },
];

const customStyles = {
    option: (provided : any, state : any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#0A204A' : 'white', // Change background color on hover
        color: state.isFocused ? 'white' : 'black',
        cursor: 'pointer',
    }),
};

const Market = () => {
    function handleSendRequest() {

    }

    return (
        <div className="bg-[#F1F4F9]">
            <Layout>
            <div className="flex flex-col items-center text-center mx-10">
                <h1 className="text-2xl md:text-6xl text-[#0F172A] font-bold mt-10">Complete research for</h1>
                <h1 className="text-2xl md:text-6xl text-[#0F172A] font-bold mb-10">your startup idea</h1>

                <div className="flex flex-col items-start py-20">
                    <div>
                    <div className="flex flex-row items-center justify-start gap-x-2 md:gap-x-4">
                        <Image src={One} alt="One"/>
                        <p className="text-[#000000]">Industry name <span className="text-[#64748B]"> (type industry you want to get information)</span></p>
                    </div>
                    <textarea className="w-full my-10 active:border-blue-600 rounded-2xl text-gray-600 h-28 p-3" placeholder="Enter about your business here!"/>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-row items-center justify-start gap-x-2 md:gap-x-4">
                            <Image src={Two} alt="Two"/>
                            <p className="text-[#000000]">Select Country</p>
                        </div>
                        <Select
                            styles={customStyles}
                            options={countryOptions}
                            className="w-full my-10 rounded-3xl shadow text-gray-600 text-left"
                        />
                        <button
                            onClick={handleSendRequest}
                            className="w-full px-4 py-2 bg-[#0A204A] text-white rounded-xl"
                        >
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export default Market;