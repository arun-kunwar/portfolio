import Profile from "./images/profile.png";

function Home() {
  return (
    <>
      {/* Computer */}
      <div className="hidden md:flex flex-row h-screen mx-auto w-full pl-[5rem] pt-[6rem] bg-gradient-to-r from-gray-50 to-gray-200">
        <div className="flex-1">
          <p className="text-red-500 font-semibold">Do you need a website?</p>
          <h1 className="pt-2 font-semibold text-4xl">
            I'm Arun Kunwar,
            <br /> a web developer!
          </h1>
          <div className="max-w-[500px] pt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              aut nisi consequatur voluptatibus iusto maxime voluptatem aliquam
              officia! Voluptatum repellendus aliquam nobis velit eum
              accusantium sint!
            </p>
            <button
              onClick={() =>
                (window.location.href = "mailto:arunkunar069@gmail.com")
              }
              className="mt-4 text-white border rounded-2xl p-3 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-transform transform hover:scale-105"
            >
              Contact me
            </button>
          </div>
        </div>

        <div className="flex mr-24 mb-14">
          <img
            src={Profile}
            alt="Profile"
            className="w-[320px] h-[320px] rounded-full shadow-lg"
          />
        </div>
      </div>
      {/* Mobile phone */}
      <div className="flex flex-col items-center justify-center md:hidden bg-gradient-to-b from-gray-50 to-gray-200 p-6 rounded-lg shadow-lg">
        <div className="mt-10">
          <img
            src={Profile}
            alt="Profile"
            className="w-[220px] h-[220px] rounded-full shadow-md"
          />
        </div>
        <p className="text-red-500 font-semibold mt-4">
          Do you need a website?
        </p>
        <h1 className="pt-2 font-semibold text-3xl text-center leading-tight">
          I'm Arun Kunwar,
          <br /> a web developer!
        </h1>
        <div className="max-w-[500px] pt-5 text-center">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            aut nisi consequatur voluptatibus iusto maxime voluptatem aliquam
            officia! Voluptatum repellendus aliquam nobis velit eum accusantium
            sint!
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:arunkunar069@gmail.com")
            }
            className="mt-4 text-white border rounded-2xl p-3 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-transform transform hover:scale-105"
          >
            Contact me
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
