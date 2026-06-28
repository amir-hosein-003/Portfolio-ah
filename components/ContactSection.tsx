const ContactSection = () => {
  return (
    <section id="contact" className="h-auto px-32 py-16">
      <h3 className="text-4xl text-center font-bold">Contact me</h3>
      <p className="text-center text-base-content/70 mt-4">
        I'm always open to new opportunities and discussions.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-28">
        <div className="">
          <div className="flex flex-col gap-6">
            <div className="w-full flex flex-row items-center gap-6">
              <input
                type="text"
                placeholder="enter your name"
                className="w-full border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
              />
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
              />
            </div>
            <input
              type="subject"
              placeholder="e.g. Get in touch, Questions, Feedback"
              className="border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
            />
            <textarea
              placeholder="message"
              className="min-h-32 w-full border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
            />
            <button type="submit" className="btn btn-primary btn-lg rounded-xl">
              Submit
            </button>
          </div>
        </div>
        <div className=" h-32 bg-red-50"></div>
      </div>
    </section>
  );
};

export default ContactSection;
