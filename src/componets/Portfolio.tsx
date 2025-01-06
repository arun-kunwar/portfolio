function Portfolio() {
  return (
    <div className="bg-white py-5 px-6">
      <div className="max-w-7xl mx-auto  ">
        <div>
          <h2 className=" text-4xl font-bold pl-3 border-l-4 border-l-red-500">
            {" "}
            Client Reviews
          </h2>
        </div>
        <div className="max-w-[250px] md:max-w-3xl  gap-10  flex flex-col items-center md:flex md:flex-row">
        <div className=" leading-relaxed">
          <h2>Arun</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, consectetur enim unde illo aperiam deleniti autem
            maxime quasi!
          </p>
        </div>
       
        <div className=" lead">
          <h1>Arun</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odio
            ex id excepturi. Nisi exercitationem modi quam totam.{" "}
          </p>
        </div>
        <div className="">
          <h1>Arun</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            deleniti nisi! Pariatur, recusandae sit odit nam officia repellat.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
