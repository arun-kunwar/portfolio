import Profile from "./images/profile.png";

function Home() {
  return (
    <>
      {/* Computer */}
      <div className="hidden md:flex flex-row h-screen mx-auto w-full pl-[5rem] pt-[6rem] bg-gradient-to-r from-gray-50 to-gray-200">
        <div className="flex-1">
          <div className="mb-4 pl-4 border-l-4 border-l-red-400 ">
          <p className="text-red-500 font-semibold">Do you need a website?</p>
          <h1 className="pt-2 font-semibold  text-4xl">
            I'm Arun Kunwar,
            <br /> a web developer!
          </h1>
          </div>
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
      <div className="flex flex-col  items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-6 rounded-lg shadow-lg md:hidden">
  <div className="mt-10">
    <img
      src={Profile}
      alt="Profile of Arun Kunwar"
      className="w-[180px] h-[180px] rounded-full shadow-md"
    />
  </div>
  <p className="text-red-500 font-semibold mt-4 text-center">
    Do you need a website?
  </p>
  <h1 className="pt-2 font-semibold text-2xl text-center leading-tight">
    I'm Arun Kunwar,
    <br /> a web developer!
  </h1>
  <div className="max-w-[90%] pt-5 text-center">
    <p className="text-gray-700 leading-relaxed">
      I specialize in crafting beautiful, functional websites tailored to your needs. Let’s create something amazing together!
    </p>
    <button
              onClick={() =>
                (window.location.href = "mailto:arunkunar069@gmail.com")
              }
              className="mt-4 text-white border rounded-2xl px-6 py-3 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300"
            >
      Contact me
    </button>
  </div>
</div>

    </>
  );
}

export default Home;
