const Stats = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row my-10 items-center justify-between text-center mx-10 md:mx-32 px-10 lg:px-32">
                <div className="my-10 md:my-0">
                    <p className="text-secondary-heading">Onboarded</p>
                    <p className="text-primary-heading font-bold">70+</p>
                    <p className="text-dark_blue_text text-big-text">Expert Mentors & Consultants</p>
                </div>
                <div className="w-0.5 hidden md:block h-28 bg-black mx-10">
                </div>
                <div className="my-10 md:my-0">
                    <p className="text-secondary-heading">Experts from</p>
                    <p className="text-primary-heading font-bold">30+</p>
                    <p className="text-dark_blue_text text-big-text">Domains and Industries</p>
                </div>
                <div className="w-0.5 hidden md:block h-28 bg-black mx-10">
                </div>
                <div className="my-10 md:my-0">
                    <p className="text-secondary-heading">Consulted and scaled</p>
                    <p className="text-primary-heading font-bold">100+</p>
                    <p className="text-dark_blue_text text-big-text">Founders and Enthusiasts</p>
                </div>
            </div>
        </>
    )
}

export default Stats;