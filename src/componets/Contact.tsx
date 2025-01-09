export default function Contact() {
  return (
    <section className="bg-white py-20">
      <div className=" bg-gray-900 h-[55vh]  mx-auto shadow-md rounded-lg md:hidden ">
        <div className="">
          <form action="">
            <div>
              <h1 className="uppercase text-2xl font-bold text-white pt-5 pl-3">
                {" "}
                Contact me
              </h1>
            </div>
            <div className=" pt-8 pl-4">
              <label htmlFor="Full Name" className="block text-sm text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-gray-300 bg-gray-900 border-b-2 w-[65%] text-white focus:outline-none "
                required
              />
            </div>
            <div className=" pt-8 pl-4">
              <label htmlFor="email" className="block text-sm text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-gray-300 bg-gray-900 border-b-2 w-[65%]  text-white focus:outline-none "
                required
              />
            </div>
            <div className="pt-8 pl-4">
              <label htmlFor="message" className="block text-sm text-white">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border-gray-300 bg-gray-900 border-b-2 w-[65%]  py-2 text-white rounded-sm focus:outline-none"
              ></textarea>
            </div>
            <div>
              <button className=" mt-10 ml-3 text-black border rounded-2xl px-6 py-3 bg-white hover:bg-gray-500 ">
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Laptop */}

      <div className="hidden md:grid grid-cols-2 bg-gray-900 h-[60vh] w-[75%] mx-auto  rounded-lg">
        <div className="">
          <h1 className="uppercase text-3xl font-bold text-white pl-16 pt-16">
            {" "}
            Contact me
          </h1>
          <p className="text-white pl-16 pt-3 font-semibold">Tell me about your project!</p>
          <p className="text-white pl-16 pt-3 leading-relaxed">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            sequi, ut quaerat placeat officia molestiae est <br /> ipsa delectus.
          </p>
        </div>
        {/* left side */}
        <div className="ml-32 mt-6">
          <form action="">
          <div className=" pt-6 pl-4">
              <label htmlFor="Full Name" className="block text-sm text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-gray-300 bg-gray-900 border-b-2 w-[75%] text-white focus:outline-none "
                required
              />
            </div>
            <div className=" pt-6 pl-4">
              <label htmlFor="email" className="block text-sm text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-gray-300 bg-gray-900 border-b-2 w-[75%]  text-white focus:outline-none "
                required
              />
            </div>
            <div className="pt-4 pl-4">
              <label htmlFor="message" className="block text-sm text-white">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border-gray-300 bg-gray-900 border-b-2 w-[75%]  py-2 text-white rounded-sm focus:outline-none"
              ></textarea>
            </div>
            <div>
              <button className=" mt-6 ml-3 text-black border rounded-3xl px-6 py-3 bg-white hover:bg-gray-500 ">
                Get in touch
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
