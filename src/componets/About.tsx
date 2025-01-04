import { TiTick } from "react-icons/ti";

function About() {
  return (
    <>
      <div className="h-screen w-full mx-auto flex flex-row">
        <div className="flex-1">
          <h1 className="pt-20 pl-20 font-bold text-4xl">About Me</h1>
          <div className="max-w-[550px] pl-20 pt-5 font-semibold leading-relaxed">
            <p>
              Welcome to my page! I am passionate about delivering exceptional results, combining creativity and technical expertise. My journey spans over a decade, marked by successful projects and happy clients.
            </p>
            <button className="mt-5 text-white border rounded-2xl p-3 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-transform transform hover:scale-105 cursor-pointer">
              Read more
            </button>
          </div>
        </div>
        <div className="min-w-[400px] mt-24">
          <ul className="space-y-4">
            <li className="flex items-center">
              <TiTick className="text-green-500 mr-2" />
              <span className="border-b-2 border-gray-300 inline-block ">
                90% Client Satisfaction
              </span>
            </li>
            <li className="flex items-center">
              <TiTick className="text-green-500 mr-2" />
              <span className="border-b-2 border-gray-300 inline-block">
                10 Years of Experience
              </span>
            </li>
            <li className="flex items-center">
              <TiTick className="text-green-500 mr-2" />
              <span className="border-b-2 border-gray-300 inline-block">
                10 Successful Projects
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
