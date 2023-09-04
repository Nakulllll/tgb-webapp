const Join = () => {
    return (
        <>
            <div className="mx-10 md:mx-32 text-black text-center px-10 md:px-32 gradient_two font-bold text-big-text py-14">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <h1 className="text-secondary-heading md:text-primary-heading py-4">Ready to join?</h1>
                        <p className="">Join The Guiding Bee mentorship platform today to empower your entrepreneurial journey with expert guidance</p>
                    </div>
                    <button
                        type="submit"
                        className="w-44 h-16 px-4 py-3 my-4 bg-primary rounded-3xl hover:bg-button_hover transition-all"
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    )
}

export default Join;