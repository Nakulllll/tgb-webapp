import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./../../public/logo/logo.svg";
import Gradient from "../../public/gradient-box.svg";
import { UserData } from "@/interfaces/user";
import { fieldOptionsWithImages } from "./../data/buttonImages";
import { useRouter } from "next/router";

import { firebase, auth, db, storage } from "./../../firebase";

const Signup = () => {
  const [stage, setStage] = useState<number>(1);
  const [userData, setUserData] = useState<UserData>({
    categories: [],
    specialization: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    title: "",
    company: "",
    organization: "",
    experience: "",
    stage: "",
    photo: "",
    additionalInfo: "",
  });

  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleNext = async () => {
    if (stage === 3) {
      userData.categories = selectedFields;

      // @ts-ignore
      const userId = auth.currentUser.uid;

      const fieldMappings = {
        "First Name": userData.firstName,
        "Last Name": userData.lastName,
        Email: userData.email,
        "Phone Number": userData.phone,
        "LinkedIn URL": userData.linkedin,
        Title: userData.title,
        Company: userData.company,
        Organization: userData.organization,
        "Experience (in yrs)": userData.experience,
        "Stage (eg. early, revenue etc)": userData.stage,
        Specialization: userData.specialization,
        "Additional information": userData.additionalInfo,
        Image: userData.photo,
        Categories: userData.categories.join(", "),
        "Date of Birth": "25/07/1992",
        "Position in Business": userData.title,
        "Registered On": "2023-05-19 20:51:59.410923",
        uid: userId,
        "Scheduled Calls": [],
        isVerified: false,
      };

      try {
        // @ts-ignore
        console.log(fieldMappings);
        const userDocRef = db.collection("users").doc(userId);
        await userDocRef.set(fieldMappings);

        localStorage.setItem("user", JSON.stringify(fieldMappings));
        // Redirect to the dashboard after the data is successfully written
        router.push("/dashboard");
      } catch (error) {
        console.error("Error writing data to Firestore:", error);
      }
    }
    setStage(stage + 1);
  };

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const storageRef = storage.ref();

    const fileRef = storageRef.child(
      // @ts-ignore
      `users/profile/${auth.currentUser!.uid}/dp/${selectedFile.name}`
    );

    try {
      await fileRef.put(selectedFile);
      alert("File uploaded successfully.");

      // You can now retrieve the download URL if needed
      const downloadURL = await fileRef.getDownloadURL();
      userData.photo = downloadURL;
      console.log("Download URL:", downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const handleFieldClick = (field: string) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter((item) => item !== field));
    } else {
      setSelectedFields([...selectedFields, field]);
    }
  };

  const isFieldSelected = (field: string) => {
    return selectedFields.includes(field);
  };

  return (
    <div className="flex flex-row text-black">
      <div className="w-[100vw] md:w-[50vw] h-[100vh] overflow-x-hidden flex flex-col py-20 text-center justify-center items-center overflow-y-auto">
        <div className="px-10 lg:px-20 h-[100vh] md:w-[50vw]">
          {stage === 1 && (
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col items-center w-full justify-center pb-3">
                <Image src={Logo} alt="logo" />
                <h1 className="text-[#333333] text-4xl font-extrabold">
                  Sign Up
                </h1>
                <h4 className="text-[#6C6C6C] text-xl py-3">
                  Welcome to Guiding Bee!
                </h4>
              </div>
              <h4 className="text-[#333333] font-bold ml-2 pt-4 py-2">
                First Name
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="text"
                placeholder="First Name"
                required
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">Last Name</h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="text"
                required
                placeholder="Last Name"
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">
                Phone Number
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="number"
                required
                placeholder="Phone Number"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">Email ID</h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="email"
                required
                placeholder="Email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">
                LinkedIn URL
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="url"
                required
                placeholder="LinkedIn URL"
                value={userData.linkedin}
                onChange={(e) =>
                  setUserData({ ...userData, linkedin: e.target.value })
                }
              />
            </div>
          )}
          {stage === 2 && (
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-row items-center gap-4">
                <Image src={Logo} alt="logo" />
                <h4 className="text-[#333333] font-bold text-2xl my-8">
                  Hello, {userData.firstName}! Let's get started.
                </h4>
              </div>
              <div className="flex flex-col items-start w-full pb-10">
                <div className="flex flex-row items-center justify-between gap-3">
                  <div className="prof-pic-up mar-r">
                    {userData.photo ? (
                      <img
                        className="w-auto h-32 rounded-full"
                        src={userData.photo}
                        alt="Profile Preview"
                      />
                    ) : (
                      <img
                        className="w-auto h-32 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWH8bZEkYpeo_CfQx4qOTiJwLqEHI5rE8dVBHqPpM&s"
                        alt="Default Profile"
                      />
                    )}
                  </div>
                  <input type="file" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload</button>
                </div>
              </div>

              <h4 className="text-[#333333] font-bold ml-2 mt-4 pb-2">
                Current Title
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-full px-4 py-2 w-full mb-3"
                type="text"
                placeholder="Current Title"
                value={userData.title}
                onChange={(e) =>
                  setUserData({ ...userData, title: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">
                Current Company/Org
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="url"
                placeholder="Current Company"
                value={userData.company}
                onChange={(e) =>
                  setUserData({ ...userData, company: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">
                Experience (in yrs)
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="url"
                placeholder="Experience"
                value={userData.experience}
                onChange={(e) =>
                  setUserData({ ...userData, experience: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">
                Stage (eg. early, revenue etc)
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="url"
                placeholder="Stage"
                value={userData.stage}
                onChange={(e) =>
                  setUserData({ ...userData, stage: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">
                Specialization
              </h4>
              <input
                className="border border-[#D5DAE1] rounded-2xl px-4 py-2 w-full mb-3"
                type="url"
                placeholder="Specialization"
                value={userData.specialization}
                onChange={(e) =>
                  setUserData({ ...userData, specialization: e.target.value })
                }
              />

              <h4 className="text-[#333333] font-bold ml-2 pb-2">
                Additional information
              </h4>
              <textarea
                className="border border-[#D5DAE1] rounded-2xl h-40 px-4 py-2 w-full mb-3"
                placeholder="Additional Info"
                value={userData.additionalInfo}
                onChange={(e) =>
                  setUserData({ ...userData, additionalInfo: e.target.value })
                }
              />
            </div>
          )}
          {stage === 3 && (
            <div className="flex flex-col items-start w-full mb-5">
              <div className="flex flex-row items-center gap-4 w-full">
                <h4 className="text-[#333333] font-bold text-2xl my-8">
                  Please choose your fields of concern.
                </h4>
              </div>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {fieldOptionsWithImages.map((field, index) => (
                  <button
                    key={index}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm transition-all ${
                      isFieldSelected(field.name) ? "bg-[#FDB813]" : "bg-white"
                    }`}
                    onClick={() => handleFieldClick(field.name)}
                  >
                    {isFieldSelected(field.name)}
                    <div className="flex items-center">
                      <Image
                        src={field.image}
                        alt={field.name}
                        className="mr-2"
                      />

                      {field.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
          <button
            className="bg-[#0A204A] text-white w-full rounded-2xl px-5 py-3 my-5"
            onClick={handleNext}
          >
            {stage !== 3 ? "Next" : "Finish"}
          </button>
        </div>
      </div>
      <Image
        src={Gradient}
        className="overflow-hidden hidden md:flex w-[50vw] h-[100vh] object-cover"
        alt="signup-img"
      />
    </div>
  );
};

export default Signup;
