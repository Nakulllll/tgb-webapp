import Layout from "./_layout";
import Contact from "@/components/home/contact";
import Media from "@/components/home/media";
import Customer from "@/components/home/customer";
import Faq from "@/components/home/faq";
import Mentor from "@/components/home/mentor";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import WeIdea from "@/components/home/weidea";
import Join from "@/components/home/join";
import Image from "next/image";

import LightRings from "./../../public/images/rings-right.png";
import RightRings from "./../../public/images/rings-left-dark.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative overflow-hidden">
      <Layout>
          <Hero/>
          {/*



          <Customer/>

          */}


          <Stats/>

          <Image src={LightRings} alt="" className="absolute -left-32 top-[65rem] -z-10 rotate-180"/>
          <div className="mx-10 md:mx-32 text-white text-center px-5 md:px-32 gradient_two font-bold text-big-text py-14">
              <p>Unlock your entrepreneurial potential with instant mentorship. Connect with experienced professionals and skyrocket your startup success. Discover a world of growth opportunities now.</p>
          </div>

          <WeIdea/>
          <Image src={LightRings} alt="" className="absolute -right-32 top-[170rem] -z-10"/>
          <Join/>
          <Mentor/>
          <Faq/>
          <Image src={RightRings} alt="" className="absolute -left-32 top-[220rem] -z-10"/>
          <Media/>
          <Contact/>
      </Layout>
    </main>
  )
}
