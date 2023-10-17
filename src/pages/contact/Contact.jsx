import Feedback from "../../components/feedback/Feedback";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative bg-slate-300">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-center justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6356.7138000354835!2d92.58599470266027!3d24.881718395504908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374fd3b820fb5c97%3A0xa3721ee1a960292c!2sJ.%20C.%20BOSE%20SENIOR%20SECONDARY%20SCHOOL!5e0!3m2!1sen!2sin!4v1697433620306!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full bg-white p-10">
          <h1 className="text-gray-900 text-2xl mb-2 font-medium title-font">
            Contact Information
          </h1>
          <p className="mt-1">
            <strong>School Name:</strong> J.C BOSE SENIOR SECONDARY SCHOOL
          </p>
          <p className="mt-1">
            <strong>Address:</strong> Chowrangee, Katigorah Part-3, P.O- Katigorah, District, Cachar, Assam Pin- 788804
          </p>
          <p className="mt-1">
            <strong>Stream:</strong> Arts & Commerce
          </p>
          <p className="mt-1">
            <strong>Contact:</strong> 8750277834, 9101344868
          </p>
          <p className="mt-1">
            <strong>Email:</strong> jcbosejuniorcollege@gmail.com
          </p>
          
          <Feedback />
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
