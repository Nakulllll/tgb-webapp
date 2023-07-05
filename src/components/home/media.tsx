import Image from "next/image";
import Media1 from "./../../../public/images/media/media1.png";
import Media2 from "./../../../public/images/media/media2.png";
import Media3 from "./../../../public/images/media/media3.png";
import Media4 from "./../../../public/images/media/media4.png";

const Media = () => {
    return (
        <>
            <div className="mx-10 md:mx-32 flex flex-col items-center text-center">
                <h1 className="text-primary-heading font-bold">Check out what media says about us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 items-center">
                    <div>
                        <Image src={Media1} alt="entrepreneur-stories" />
                    </div>
                    <div>
                        <Image src={Media2} alt="entrepreneur-hunt" />
                    </div>
                    <div>
                        <Image src={Media3} alt="india-hunt" />
                    </div>
                    <div>
                        <Image src={Media4} alt="bharat-saga" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Media;