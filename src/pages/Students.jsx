import React, { useState } from "react";

const plantIcons = {
  Rose: "🌹",
  Tulip: "🌷",
  Sunflower: "🌻",
  Lavender: "🪻"
};

// Dynamic UI - the preview card updates as soon as an input changes
function Students() {
  const [student, setStudent] = useState({
    name: "",
    regNo: "",
    department: "",
    year: "1",
    plant: "Rose",
    hours: 3
  });

  const update = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

  return (
    <div className="students">
      <div className="card">
        <h2>Student Details</h2>

        <label>Name</label>
        <input name="name" value={student.name} onChange={update} placeholder="Enter student name" />

        <label>Register Number</label>
        <input name="regNo" value={student.regNo} onChange={update} placeholder="Enter register number" />

        <label>Department</label>
        <input name="department" value={student.department} onChange={update} placeholder="Enter department" />

        <label>Year</label>
        <select name="year" value={student.year} onChange={update}>
          <option value="1">First Year</option>
          <option value="2">Second Year</option>
          <option value="3">Third Year</option>
          <option value="4">Fourth Year</option>
        </select>

        <label>Favourite Plant</label>
        <select name="plant" value={student.plant} onChange={update}>
          {Object.keys(plantIcons).map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <label>Garden Club hours per week: {student.hours}</label>
        <input
          type="range"
          name="hours"
          min="0"
          max="10"
          value={student.hours}
          onChange={update}
        />
      </div>

      <div className="card preview">
        <div className="login-emoji">{plantIcons[student.plant]}</div>
        <h2>{student.name || "Student Name"}</h2>
        <p><b>Register No:</b> {student.regNo || "-"}</p>
        <p><b>Department:</b> {student.department || "-"}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>Favourite Plant:</b> {student.plant}</p>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${student.hours * 10}%` }}></div>
        </div>
        <p className="center">{student.hours} hours / week in the garden</p>
      </div>
    </div>
  );
}

export default Students;
