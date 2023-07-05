import { useState } from 'react';
import Image from 'next/image';
import ContactUsImg from '../../../public/images/contactus.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e : any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        // Perform your API request using the formData object
        // You can replace the console.log with your API request code
        console.log(formData);
    };

    return (
        <div className="flex flex-col items-center mx-10 md:mx-32">
            <h1 className="py-5 text-secondary-heading md:text-primary-heading font-bold">Contact Us</h1>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 p-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-2 mb-4 border border-black rounded-2xl"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-2 mb-4 border border-black rounded-2xl"
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full p-2 mb-4 border border-black rounded-2xl"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={4}
                        className="w-full p-2 mb-4 border border-black rounded-2xl"
                    />
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-44 px-4 py-3 my-2 bg-primary rounded-3xl hover:bg-button_hover transition-all"
                    >
                        Send
                    </button>
                </div>
                <div className="mr-0 my-10 lg:mr-48">
                    <Image src={ContactUsImg} alt="Contact Us" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
