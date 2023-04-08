import React from "react";
import "./Faculty.scss";
import faculty from "../../Faculty";
import nonTeaching from "../../NonTeaching";

const Faculty = () => {
  return (
    <div className="faculty">
      <h1 className="teaching_staff">Teaching Staff</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sl. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Qualification Details</th>
            <th scope="col">Designation</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td className="faculty__name">{data.name}</td>
              <td>{data.qualification}</td>
              <td>{data.designation}</td>
              <td>
                <img
                  style={{ width: "10rem", height: "10rem" }}
                  src={data.img}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="teaching_staff py-3">Non Teaching Staff</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sl. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Qualification Details</th>
            <th scope="col">Designation</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {nonTeaching.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td className="faculty__name">{data.name}</td>
              <td>{data.qualification}</td>
              <td>{data.designation}</td>
              <td>
                <img
                  style={{ width: "10rem", height: "10rem" }}
                  src={data.img}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty;
