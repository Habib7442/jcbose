import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = onSnapshot(
      collection(db, "feedback"),
      (snapshot) => {
        setReviews(snapshot.docs.map((doc) => doc.data()));
        return getReviews;
      },
      []
    );
  }, []);

  return (
    <div className="all-reviews-container bg-slate-300">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">{review?.designation}</p>
                  <p className="text-gray-900 text-lg leading-6">{review?.name}</p>
                  <p className="text-gray-600 text-sm mb-4">{review?.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllReviews;
