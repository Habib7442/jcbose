import cardImg from "../../CardImg";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-500">
      <h2 className="text-center text-4xl font-bold font-serif text-gray-200 pt-2">Gallery</h2>

      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-2">
          {cardImg.map((image) => (
            <div key={image.id} className="p-2 w-1/2 md:w-1/3 lg:w-1/4">
              <a href={image.img} target="_blank" rel="noopener noreferrer">
                <img
                  alt={`gallery-${image.id}`}
                  className="w-full h-full object-cover object-center block rounded-lg shadow-lg"
                  src={image.img}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
