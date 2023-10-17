import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const submitFeedback = async () => {
    if (name && designation && message) {
      try {
        const res = await addDoc(collection(db, "feedback"), {
          name,
          designation,
          message,
        });
        setSubmitted(true);
        alert("Feedback has been successfully submitted!");
      } catch (error) {
        console.error("Error submitting feedback: ", error);
      }
    } else {
      alert("Please fill in all the details.");
    }
  };

  return (
    <div>
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font mt-5">
        Feedback Form
      </h2>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Designation
        </label>
        <input
          type="text"
          id="designation"
          name="designation"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      {submitted ? (
        <p>Feedback submitted! Thank you.</p>
      ) : (
        <button
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={submitFeedback}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Feedback;
