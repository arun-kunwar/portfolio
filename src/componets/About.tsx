import { TiTick } from "react-icons/ti";

function About() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section*/}
        <div>
          <h2 className="text-4xl font-bold mb-6 border-l-4 border-red-500 pl-4">
            About Me
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to my page! I am passionate about delivering exceptional
            results, combining creativity and technical expertise. My journey
            spans over a decade, marked by successful projects and happy
            clients.
          </p>
          <button className="mt-5 text-white border rounded-2xl px-6 py-3 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300">
            Read more
          </button>
        </div>

        {/* Right Section */}
        <div className=" m-0 md:ml-40">
          <ul className="space-y-8">
            <li className="flex items-center">
              <TiTick className="text-red-500 mr-4 text-3xl" />
              <div>
                <span className="text-4xl font-bold text-gray-800">90%</span>
                <p className="text-lg text-gray-600 font-medium">
                  Client Satisfaction
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <TiTick className="text-red-500 mr-4 text-3xl" />
              <div>
                <span className="text-4xl font-bold text-gray-800">10</span>
                <p className="text-lg text-gray-600 font-medium">
                  Years of Experience
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <TiTick className="text-red-500 mr-4 text-3xl" />
              <div>
                <span className="text-4xl font-bold text-gray-800">80+</span>
                <p className="text-lg text-gray-600 font-medium">
                  Successful Projects
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
