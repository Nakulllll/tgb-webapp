import { useState } from "react";
import Image from "next/image";
import Logo from "./../../public/logo/logo.svg";
import Gradient from "./../../public/gradient-box.svg";

const Signin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOTP = () => {
    };

    const handleVerify = () => {
    };

    const handleResendOTP = () => {
    };

    return (
        <div className="flex flex-row">
            <div className="w-[100vw] md:w-[50vw] h-full flex flex-col py-20 text-center justify-center items-center">

                <Image src={Logo} alt="logo"/>
                <h1 className="text-[#333333] text-4xl font-extrabold">Sign In</h1>
                <h4 className="text-[#6C6C6C] text-xl py-3">Please fill in your details</h4>

                <div className="px-36 py-20">
                    <div className="flex flex-col items-start w-full">
                        <h4>Enter your phone number</h4>
                        <div className="flex w-full gap-4">
                            <input
                                className="border border-[#D5DAE1] text-[#333333] rounded-2xl px-4 py-2 w-full"
                                type="number"
                                placeholder="Phone number (+91)"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <button
                                className="bg-[#0A204A] text-white w-64 rounded-2xl px-5 py-3"
                            >
                               Send OTP
                            </button>
                        </div>
                            <div className="flex flex-col items-start mt-4 w-full">
                                <p className="text-[#6C6C6C]">
                                    Didn't receive OTP?{" "}
                                    <a href="#" onClick={handleResendOTP}>
                                        Resend OTP
                                    </a>
                                </p>
                            </div>


                        <div className="flex flex-col items-start mt-4 w-full">
                            <h4>Enter verification code</h4>
                            <div className="flex w-full gap-4">
                                <input
                                    className="border border-[#D5DAE1] text-[#333333] rounded-2xl px-4 py-2 w-full"
                                    type="number"
                                    placeholder="Verification code"
                                />
                            </div>
                            <button
                                className="bg-[#0A204A] w-full my-4 text-white rounded-2xl px-5 py-3"

                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={Gradient} className="hidden md:flex w-[50vw] h-[100vh] object-cover" alt="Login"/>
        </div>
    );
};

export default Signin;



/*
* import { useState } from "react";
import Image from "next/image";
import Logo from "./../../public/logo/logo.svg";
import Gradient from "./../../public/gradient-box.svg";
import { router } from "next/client";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [isSendingOTP, setIsSendingOTP] = useState(false); // Added loader state for sending OTP
    const [isVerifying, setIsVerifying] = useState(false); // Added loader state for verifying

    const handleSendOTP = () => {
        setIsSendingOTP(true); // Show loader when sending OTP
        // Simulate API call or any asynchronous operation
        setTimeout(() => {
            setOtpSent(true);
            setIsSendingOTP(false); // Hide loader
        }, 2000);
    };

    const handleVerify = () => {
        setIsVerifying(true); // Show loader when verifying
        // Simulate API call or any asynchronous operation
        setTimeout(() => {
            // Handle verification logic here
            setIsVerifying(false); // Hide loader
        }, 2000);
        router.push('/dashboard')
    };

    const handleResendOTP = () => {
        setIsSendingOTP(true); // Show loader when resending OTP
        // Simulate API call or any asynchronous operation
        setTimeout(() => {
            setIsSendingOTP(false); // Hide loader
        }, 2000);
    };

    return (
        <div className="flex flex-row">
            <div className="w-[100vw] md:w-[50vw] h-full flex flex-col py-20 text-center justify-center items-center">

                <Image src={Logo} alt="logo"/>
                <h1 className="text-[#333333] text-4xl font-extrabold">Sign In</h1>
                <h4 className="text-[#6C6C6C] text-xl py-3">Please fill in your details</h4>

                <div className="px-36 py-20">
                    <div className="flex flex-col items-start w-full">
                        <h4>Enter your phone number</h4>
                        <div className="flex w-full gap-4">
                            <input
                                className="border border-[#D5DAE1] text-[#333333] rounded-2xl px-4 py-2 w-full"
                                type="number"
                                placeholder="Phone number (+91)"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <button
                                className={`bg-[#0A204A] text-white w-64 rounded-2xl px-5 py-3 ${isSendingOTP ? 'opacity-70 cursor-not-allowed' : ''}`}
                                onClick={handleSendOTP}
                                disabled={isSendingOTP} // Disable button when loading
                            >
                                {isSendingOTP ? "Sending..." : "Send OTP"}
                            </button>
                        </div>
                        {isSendingOTP && <div className="mt-2 text-[#0A204A]">Sending OTP...</div>}
                        {otpSent && (
                            <div className="flex flex-col items-start mt-4 w-full">
                                <p className="text-[#6C6C6C]">
                                    Didn't receive OTP?{" "}
                                    <a href="#" onClick={handleResendOTP}>
                                        Resend OTP
                                    </a>
                                </p>
                            </div>
                        )}


                        <div className="flex flex-col items-start mt-4 w-full">
                            <h4>Enter verification code</h4>
                            <div className="flex w-full gap-4">
                                <input
                                    className="border border-[#D5DAE1] text-[#333333] rounded-2xl px-4 py-2 w-full"
                                    type="number"
                                    placeholder="Verification code"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                />
                            </div>
                            <button
                                className={`bg-[#0A204A] w-full my-4 text-white rounded-2xl px-5 py-3 ${isVerifying ? 'opacity-70 cursor-not-allowed' : ''}`}
                                onClick={handleVerify}
                                disabled={isVerifying}
                            >
                                {isVerifying ? "Verifying..." : "Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={Gradient} className="hidden md:flex w-[50vw] h-[100vh] object-cover" alt="Login"/>
        </div>
    );
};

export default Login;

* */