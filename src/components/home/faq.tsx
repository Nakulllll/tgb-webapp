import React, { useState } from "react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCollapse = (index : any) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const faqItems = [
        {
            question: "What is The Guiding Bee?",
            answer:
                "The Guiding Bee is a platform designed to connect mentees with experienced mentors who can provide guidance and support in their journey. Our platform aims to help businesses grow and succeed by connecting them with mentors who have expertise in various industries and disciplines.",
        },
        {
            question: "How does the mentorship process work on the platform?",
            answer:
                "Once a mentee joins the platform, they can search for mentors based on their area of expertise and experience. The platform then provides the mentee with a list of relevant mentors who can best support their needs. Mentors and mentees can then communicate and schedule regular mentorship sessions via phone call, video call or chat.",
        },
        {
            question: "What benefits can mentors and mentees expect from participating in the platform?",
            answer:
                "Mentors can expect to build valuable relationships with mentees, gain exposure to new and innovative ideas, and make a positive impact in the entrepreneurial community. Mentees can expect to receive personalized feedback and support, gain valuable insights into their business, and improve their chances of success.",
        },
        {
            question: "What kind of support can mentees expect from their mentor?",
            answer:
                "Mentees can expect their mentor to provide guidance, feedback, and support on various aspects of their business, including product development, marketing, fundraising, and more. Mentors will also provide valuable insights into their own experiences and provide guidance on how to overcome common challenges in starting a business.",
        },
    ];

    return (
        <div className="mx-3 md:mx-80 my-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-heading">
                Frequently Asked Questions
            </h1>

            <div className="mt-10 space-y-4">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay={index * 100}
                    >
                        <button
                            className="flex items-center text-left justify-between w-full p-4 focus:outline-none"
                            onClick={() => handleCollapse(index)}
                        >
                            <span className="text-lg font-medium">{item.question}</span>
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${
                                    activeIndex === index ? "transform rotate-180" : ""
                                }`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4">
                                <p className="text-sm">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
