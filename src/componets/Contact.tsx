export default function Contact() {
  return (
    <section className="bg-white py-16">
      <div className=" bg-gray-600 h-[55vh] md:py-[15%]  md:w-[75%] mx-auto shadow-md rounded-lg ">
        <div className="">
          <form action="">
            <div>
                 <h1 className="uppercase text-2xl font-bold text-white pt-5 pl-3"> Contact me</h1>
            </div>
            <div className=" pt-8 pl-4">
              <label htmlFor="Full Name" className="block text-sm text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-gray-300 bg-gray-600 border-b-2 w-[65%] text-white focus:outline-none "
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
                className="border-gray-300 bg-gray-600 border-b-2 w-[65%]  text-white focus:outline-none "
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
                className="border-gray-300 bg-gray-600 border-b-2 w-[65%]  py-2 text-white rounded-sm focus:outline-none"
              ></textarea>
            </div>
            <div>
             <button className=" mt-10 ml-3 text-black border rounded-2xl px-6 py-3 bg-white hover:bg-gray-500 ">Get in touch</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
