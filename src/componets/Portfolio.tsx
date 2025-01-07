function Portfolio() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
       
        <div className="mb-10">
          <h2 className="text-5xl font-bold pl-3 border-l-4 border-red-500">
            Client <br /> Reviews
          </h2>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="p-6 bg-gray-50 shadow-lg rounded-lg leading-relaxed">
            <h3 className="font-semibold text-lg mb-2">Arun</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis, consectetur enim unde illo aperiam deleniti autem
              maxime!
            </p>
          </article>
          <article className="p-6 bg-gray-50 shadow-lg rounded-lg leading-relaxed">
            <h3 className="font-semibold text-lg mb-2">Arun</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              odio ex id excepturi. Nisi exercitationem modi quam totam.
            </p>
          </article>
          <article className="p-6 bg-gray-50 shadow-lg rounded-lg leading-relaxed">
            <h3 className="font-semibold text-lg mb-2">Arun</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              deleniti nisi! Pariatur, recusandae sit odit nam officia repellat.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
