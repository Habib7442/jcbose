import React from "react";
import FacultyData from "../../Faculty";
import NonTeachingData from "../../NonTeaching";

const Faculty = () => {
  return (
    <div className=" bg-gray-200 p-8 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Teaching Staff</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-6 bg-gray-100">Sl. No.</th>
              <th className="py-2 px-6 bg-gray-100">Name</th>
              <th className="py-2 px-6 bg-gray-100">Qualification Details</th>
              <th className="py-2 px-6 bg-gray-100">Designation</th>
              <th className="py-2 px-6 bg-gray-100">Image</th>
            </tr>
          </thead>
          <tbody>
            {FacultyData.map((data) => (
              <tr key={data.id}>
                <td className="py-3 px-6">{data.id}</td>
                <td className="py-3 px-6">{data.name}</td>
                <td className="py-3 px-6">{data.qualification}</td>
                <td className="py-3 px-6">{data.designation}</td>
                <td className="py-3 px-6">
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={data.img}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-8">
        Non-Teaching Staff
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-6 bg-gray-100">Sl. No.</th>
              <th className="py-2 px-6 bg-gray-100">Name</th>
              <th className="py-2 px-6 bg-gray-100">Qualification Details</th>
              <th className="py-2 px-6 bg-gray-100">Designation</th>
              <th className="py-2 px-6 bg-gray-100">Image</th>
            </tr>
          </thead>
          <tbody>
            {NonTeachingData.map((data) => (
              <tr key={data.id}>
                <td className="py-3 px-6">{data.id}</td>
                <td className="py-3 px-6">{data.name}</td>
                <td className="py-3 px-6">{data.qualification}</td>
                <td className="py-3 px-6">{data.designation}</td>
                <td className="py-3 px-6">
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={data.img}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Faculty;
