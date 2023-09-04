import Layout from "@/pages/_layout";
import Select from 'react-select';

import One from "./../../public/one.svg";
import Two from "./../../public/two.svg";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import socketIOClient, {Socket} from "socket.io-client";
import {useRouter} from "next/router";
import countryOptions from "./../data/countryOptions";

const customStyles = {
    option: (provided : any, state : any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#0A204A' : 'white',
        color: state.isFocused ? 'white' : 'black',
        cursor: 'pointer',
    }),
};

const ai = () => {
    const [message, setMessage] = useState("");
    const [socket, setSocket] = useState<Socket | null>(null);
    const [botResponses, setBotResponses] = useState<string[]>([]);
    const responseContainerRef = useRef<HTMLDivElement | null>(null);
    const [text, setText] = useState("Send Request");

    const router = useRouter();

    const handleRouteRequest = () => {
        router.push("/mentors");
    }

    const handleSendRequest = () => {
        if (socket) {
            setText("Hold on loading..");
            socket.emit('sendMessage', message);
            setText("Send request");
        }
    }

    const handleTextareaChange = (e : any) => {
        setMessage(e.target.value);
    }


    useEffect(() => {
        if (socket) {
            socket.on('message', (response) => {
                console.log('Received response from server:', response);
                const startIndex = response.indexOf("bot:") + 3;
                const extractedText = response.substring(startIndex).trim();
                setBotResponses(prevResponses => [...prevResponses, extractedText]);
            });
        }

        // Clean up the event listener when the component unmounts
        return () => {
            if (socket) {
                socket.off('message');
            }
        };
    }, [socket]);

    useEffect(() => {
        // Auto-scroll to the bottom of the response container when new responses come in
        if (responseContainerRef.current) {
            responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
        }
    }, [botResponses]);


    useEffect(() => {
        const socketInstance = socketIOClient('http://localhost:8000');
        setSocket(socketInstance);

        // Clean up the WebSocket connection when the component unmounts
        return ()  => {
            if (socketInstance) {
                socketInstance.disconnect();
            }
        };
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center text-center mx-10">
                <h1 className="text-2xl md:text-6xl text-[#0F172A] font-bold mt-10">Complete research for</h1>
                <h1 className="text-2xl md:text-6xl text-[#0F172A] font-bold mb-10">your startup idea</h1>

                <div className="flex flex-col items-start pt-20">
                    <div>
                        { botResponses.length > 0 &&
                            <div className="max-h-[60vh] overflow-y-auto">
                                <div className="flex flex-col items-center my-4 w-[30rem] text-left" ref={responseContainerRef}>
                                    {botResponses.map((response, index) => (
                                        <div key={index} className="text-black py-3 px-10 w-full mx-10 my-4 bg-gray-300 rounded-2xl">
                                            {response}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        <div className="flex flex-row items-center justify-start gap-x-2 md:gap-x-4 mt-10">
                            <Image src={One} alt="One"/>
                            <p className="text-[#000000]">Industry name <span className="text-[#64748B]"> (type industry you want to get information)</span></p>
                        </div>
                        <textarea
                            className="w-full my-10 active:border-blue-600 rounded-2xl text-gray-600 h-28 p-3"
                            placeholder="Enter about your business here!"
                            value={message}
                            onChange={handleTextareaChange} // Update the message state on input change
                        /></div>
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
                    </div>
                    <button
                        onClick={handleSendRequest}
                        className="w-full px-4 py-2 bg-[#0A204A] text-white rounded-xl mb-10"
                    >
                        {text}
                    </button>
                    <button
                        onClick={handleRouteRequest}
                        className="w-full px-4 py-2 bg-[#0A204A] text-white rounded-xl mb-20"
                    >
                        Connect to Mentor Bee
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default ai