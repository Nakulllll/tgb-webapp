import { Collapse, Text, Grid } from "@nextui-org/react";

const Faq = () => {
    return (
        <>
        <div className="mx-10 md:mx-80 flex flex-col items-center my-10 text-center">
            <h1 className="text-secondary-heading md:text-primary-heading font-bold">Frequently Asked Questions</h1>

            <Grid.Container gap={2}>
            <Grid>
                <Collapse.Group splitted>
                    <Collapse title="What is The Guiding Bee?" bordered>
                        <Text>
                            The Guiding Bee is a platform designed to connect mentees with experienced mentors who can provide guidance and support in their journey. Our platform aims to help businesses grow and succeed by connecting them with mentors who have expertise in various industries and disciplines.
                        </Text>
                    </Collapse>
                    <Collapse title="How does the mentorship process work on the platform?">
                        <Text>
                            Once a mentee joins the platform, they can search for mentors based on their area of expertise and experience. The platform then provides the mentee with a list of relevant mentors who can best support their needs. Mentors and mentees can then communicate and schedule regular mentorship sessions via phone call, video call or chat.
                        </Text>
                    </Collapse>
                    <Collapse title=" What benefits can mentors and mentees expect from participating in the platform?">
                        <Text>
                            Mentors can expect to build valuable relationships with mentees, gain exposure to new and innovative ideas, and make a positive impact in the entrepreneurial community. Mentees can expect to receive personalized feedback and support, gain valuable insights into their business, and improve their chances of success.
                        </Text>
                    </Collapse>
                    <Collapse title="What kind of support can mentees expect from their mentor? ">
                        <Text>
                            Mentees can expect their mentor to provide guidance, feedback, and support on various aspects of their business, including product development, marketing, fundraising, and more. Mentors will also provide valuable insights into their own experiences and provide guidance on how to overcome common challenges in starting a business.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Grid>
        </Grid.Container>
        </div>
        </>
    )
}

export default Faq;