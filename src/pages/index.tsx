import Layout from "./_layout";
import Contact from "@/components/home/contact";
import Media from "@/components/home/media";
import Customer from "@/components/home/customer";
import Faq from "@/components/home/faq";
import Mentor from "@/components/home/mentor";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Layout>
          <Mentor/>
          <Faq/>
          <Customer/>
          <Media/>
          <Contact/>
      </Layout>
    </main>
  )
}
