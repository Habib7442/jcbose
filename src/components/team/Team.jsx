const Team = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-4 lg:flex-row flex-col items-center text-center">
          <div className="p-4 lg:w-1/3 flex-col">
            <div className="flex lg:flex-col items-center text-center">
              <img
                alt="team"
                className="w-40 h-56 object-cover mb-4"
                src="./president2.png"
              />
              <div className="ml-2">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  BISWAJIT MALAKAR
                </h2>
                <h3 className="text-gray-500 mb-2">President</h3>
                <p className="mb-4">Ex-Zilla Parishad, East Katigorah</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 flex-col">
            <div className="flex lg:flex-col items-center text-center">
              <img
                alt="team"
                className="w-40 h-56 object-cover mb-4"
                src="./didarul.png"
              />
              <div className="ml-2"> 
                <h2 className="title-font font-medium text-lg text-gray-900">
                  DIDARUL KARIM BARBHUIYA
                </h2>
                <h3 className="text-gray-500 mb-2">Principal</h3>
                <p className="mb-4">
                  MA Economics, B.ED JMI, New Delhi, 6 yrs experience
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 flex-col">
            <div className="flex lg:flex-col items-center text-center">
              <img
                alt="team"
                className="w-40 h-56 object-cover mb-4"
                src="./aah.png"
              />
              <div className="ml-2">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  ABDUL AHAD BARBHUIYA
                </h2>
                <h3 className="text-gray-500 mb-2">Educator</h3>
                <p className="mb-4">
                  M.Com, MA(Eco), PGDCA, PGDHRM, B.Ed, LLB, Paper published-02
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
