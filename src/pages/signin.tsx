import { useState } from "react";
import Image from "next/image";
import Logo from "./../../public/logo/logo.svg";
import Gradient from "./../../public/gradient-box.svg";
import { useRouter } from "next/router";
import { firebase, auth, db } from "../../firebase";

const Signin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");

  const router = useRouter();

  const handleSendOTP = () => {
    if (phoneNumber === "" || phoneNumber.length < 10) return;
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "send-code-button",
      {
        size: "invisible",
      }
    );

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((verificationId) => {
        // @ts-ignore
        setVerificationId(verificationId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleVerifyCode = () => {
    if (verificationId) {
      // @ts-ignore
      console.log(verificationId.verificationId);
      console.log(verificationCode);

      const credential = firebase.auth.PhoneAuthProvider.credential(
        // @ts-ignore
        verificationId.verificationId,
        verificationCode
      );

      auth
        .signInWithCredential(credential)
        .then((userCredential) => {
          const user = userCredential.user;
          const userDoc = db.collection("users").doc(user!.uid);
          if (!userDoc) {
            localStorage.setItem("user", JSON.stringify(user));
            router.push(`/signup?uid=${user!.uid}`);
          } else {
            localStorage.setItem("user", JSON.stringify(user));
            router.push("/dashboard");
          }
          // ...
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("Verification ID is not set.");
    }
  };

  return (
    <div className="flex flex-row text-black">
      <div className="w-[100vw] md:w-[50vw] h-full flex flex-col py-20 text-center justify-center items-center">
        <Image src={Logo} alt="logo" />
        <h1 className="text-[#333333] text-4xl font-extrabold">Sign In</h1>
        <h4 className="text-[#6C6C6C] text-xl py-3">
          Please fill in your details
        </h4>

        <div className="px-36 py-20">
          <div className="flex flex-col items-start w-full">
            <h4>Enter your phone number</h4>
            <div className="flex w-full gap-4">
              <input
                type="tel"
                className="border border-[#D5DAE1] text-[#333333] rounded-2xl px-4 py-2 w-full"
                placeholder="Phone number (+91)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button
                id="send-code-button"
                className="bg-[#0A204A] text-white w-64 rounded-2xl px-5 py-3"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            </div>
            <div className="flex flex-col items-start mt-4 w-full">
              <p className="text-[#6C6C6C]">
                Didn't receive OTP?{" "}
                <a href="#" onClick={handleVerifyCode}>
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
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <button
                className="bg-[#0A204A] w-full my-4 text-white rounded-2xl px-5 py-3"
                onClick={handleVerifyCode}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={Gradient}
        className="hidden md:flex w-[50vw] h-[100vh] object-cover"
        alt="Login"
      />
    </div>
  );
};

export default Signin;
