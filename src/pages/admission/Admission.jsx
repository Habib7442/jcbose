import { useState, useRef } from "react";
import "./Admission.scss";
import { db } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const [studentName, setStudentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [contact, setContact] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  // const [schoolLastAttended, setSchoolLastAttended] = useState("");
  const [classNames, setClassNames] = useState("");
  const [stream, setStream] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [signature, setSignature] = useState(null);
  const [educationalRecord, setEducationalRecord] = useState("");
  const [subjectTaken, setSubjectTaken] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [lastSchool, setLastSchool] = useState("");
  const [lastClass, setLastClass] = useState("");
  const [lastClassPercentage, setLastClassPercentage] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [profUrl, setProfUrl] = useState("");
  const [sigUrl, setSigUrl] = useState("");

  const navigate = useNavigate();

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]); // set the selected file in state
      setProfUrl(URL.createObjectURL(e.target.files[0])); // generate a URL for the selected file
    }
  };
  const handleSignatureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSignature(e.target.files[0]); // set the selected file in state
      setSigUrl(URL.createObjectURL(e.target.files[0])); // generate a URL for the selected file
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (profilePicture.size > 5 * 1024 * 1024) {
        alert("Image size should not exceed 5MB.");
        return;
      }
      if (signature.size > 5 * 1024 * 1024) {
        alert("Signature size should not exceed 5MB.");
        return;
      }
      if (
        studentName === "" ||
        dateOfBirth === "" ||
        fatherName === "" ||
        nationality === "" ||
        religion === "" ||
        contact === "" ||
        motherName === "" ||
        motherOccupation === "" ||
        permanentAddress === "" ||
        fatherOccupation === "" ||
        caste === "" ||
        lastSchool === "" ||
        lastClass === "" ||
        lastClassPercentage === "" ||
        isChecked === false ||
        profilePicture === null
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      // UPLOAD IMAGE TO FIREBASE STORAGE

      const profilePictureRef = ref(
        storage,
        `profile-pictures/${profilePicture.name + v4()}`
      );

      const signatureRef = ref(storage, `signature/${signature.name + v4()}`);

      uploadBytes(profilePictureRef, profilePicture).then(async (snapshot) => {
        const profilePictureUrl = await getDownloadURL(snapshot.ref);

        uploadBytes(signatureRef, signature).then(async (snapshot) => {
          const signatureUrl = await getDownloadURL(snapshot.ref);

          addDoc(collection(db, "posts"), {
            studentName: studentName,
            dateOfBirth: dateOfBirth,
            fatherName: fatherName,
            fatherOccupation: fatherOccupation,
            contact: contact,
            motherName: motherName,
            motherOccupation: motherOccupation,
            permanentAddress: permanentAddress,
            // schoolLastAttended: schoolLastAttended,
            profilePicture: profilePictureUrl,
            signature: signatureUrl,
            classNames: classNames,
            stream: stream,
            educationalRecord: educationalRecord,
            subjectTaken: subjectTaken,
            nationality: nationality,
            religion: religion,
            caste: caste,
            lastSchool: lastSchool,
            lastClass: lastClass,
            lastClassPercentage: lastClassPercentage,
          });
        });
      });
      navigate("/");
      alert("Form submitted successfully.");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(profUrl);

  return (
    <div className="admission container-fluid">
      <div className="inner__div">
        <div className="mb-3">
          <label className="file" htmlFor="file">
            Upload Image <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="file"
            id="profile-picture"
            onChange={handleProfilePictureChange}
            required
          />
          {profUrl && <img
            style={{ width: "10rem", height: "10rem", margin: "2rem 6rem" }}
            src={profUrl}
            alt=""
          />}
        </div>
        <small style={{ color: "darkblue" }}>
          (Size of the image should be less than 5MB)
        </small>
        <div className="mb-3">
          <label className="file" htmlFor="file">
            Upload Signature <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="file"
            id="profile-picture"
            onChange={handleSignatureChange}
            required
          />
          {sigUrl && <img
            style={{ width: "10rem", height: "10rem", margin: "2rem 6rem" }}
            src={sigUrl}
            alt=""
          />}
        </div>
        <small style={{ color: "darkblue" }}>
          (Size of the signature should be less than 5MB)
        </small>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            style={{ marginTop: "10px" }}
            className="form-label"
          >
            Name of the Student <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Name of the Student"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Date of Birth (DD/MM/YYYY){" "}
            <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="date"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Date of Birth"
            required
          />
        </div>
        <div className="mb-3">
          <span>
            Nationality <span style={{ color: "red" }}>* required</span>
          </span>
          <select
            class="form-select"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option>Indian</option>
            <option>Others</option>
          </select>
        </div>
        <div className="mb-3">
          <span>
            Religion <span style={{ color: "red" }}>* required</span>
          </span>
          <select
            class="form-select"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
            <option>Sikh</option>
            <option>Jain</option>
            <option>Others</option>
          </select>
        </div>
        {/* <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Religion <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Religion"
            required
          />
        </div> */}
        <div className="mb-3">
          <span>
            Caste <span style={{ color: "red" }}>* required</span>
          </span>
          <select
            class="form-select"
            value={caste}
            onChange={(e) => setCaste(e.target.value)}
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option>GEN</option>
            <option>SC</option>
            <option>ST</option>
            <option>OBC</option>
            <option>MOBC</option>
            <option>OTHERS</option>
          </select>
        </div>
        {/* <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Caste (SC/ST/OBC/GEN/MOBC){" "}
            <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={caste}
            onChange={(e) => setCaste(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Caste"
            required
          />
        </div> */}

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Fathers Name <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Father's Name"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Fathers Occupation <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={fatherOccupation}
            onChange={(e) => setFatherOccupation(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Father's Occupation"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Contact <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="number"
            className="form-control"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Contact"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Mothers Name <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Mother's Name"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Mothers Occupation <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={motherOccupation}
            onChange={(e) => setMotherOccupation(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Mother's Occupation"
            required
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Permanent address <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={permanentAddress}
            onChange={(e) => setPermanentAddress(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Permanent address"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            From which school you have passed your last class?{" "}
            <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={lastSchool}
            onChange={(e) => setLastSchool(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="From which school you have passed your last class?"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Previous Class Passed{" "}
            <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={lastClass}
            onChange={(e) => setLastClass(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Previous Class Passed"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Previous class percentage{" "}
            <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={lastClassPercentage}
            onChange={(e) => setLastClassPercentage(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Previous class percentage"
            required
          />
        </div>
        <div className="mb-3">
          <span>
            Which class you want to take admission?{" "}
            <span style={{ color: "red" }}>* required</span>
          </span>
          <select
            class="form-select"
            value={classNames}
            onChange={(e) => setClassNames(e.target.value)}
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option>IX</option>
            <option>X</option>
            <option>XI</option>
            <option>XII</option>
          </select>
        </div>
        {/* <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">
            Which class you want to take admission?
            <span style={{ color: "red" }}>* required</span>
          </label>
          <input
            type="number"
            className="form-control"
            value={classNames}
            onChange={(e) => setClassNames(e.target.value)}
            id="exampleFormControlInput2"
            placeholder="Enter Class (9, 10, 11, 12)"
            required
          />
        </div> */}
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">
            Stream (Commerce & Arts)
          </label>
          <input
            type="text"
            className="form-control"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            id="exampleFormControlInput2"
            placeholder="Enter Stream (Commerce or Arts)"
          />
        </div>

          
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Subjects to be taken.
          </label>
          <input
            type="text"
            className="form-control"
            value={subjectTaken}
            onChange={(e) => setSubjectTaken(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Subjects to be taken"
          />
        </div> 
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            required
          />
          <label class="form-check-label" for="flexCheckChecked">
            I do hereby declare that the information given above is correct. If
            any information is found incorrect,
            <br /> I shall be held liable for cancellation of my admission.
          </label>
        </div>
        <div className="buttons my-3">
          <button
            className="btn btn-outline-dark py-1 px-2"
            type="submit"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
