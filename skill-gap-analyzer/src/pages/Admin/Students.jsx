import { useState, useEffect } from "react";
import { getStudents } from "../../services/studentService";
import "./Students.css";
import {
  FaUserGraduate,
  FaUserCheck,
  FaFileAlt,
  FaClock,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";


function Students() {
const [students, setStudents] = useState([]);
useEffect(() => {
    loadStudents();
}, []);

const loadStudents = async () => {
    try {
        const response = await getStudents();
        setStudents(response.data);
    } catch (error) {
        console.error("Error fetching students:", error);
    }
};

  const [showForm, setShowForm] = useState(false);

  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    department: "",
    resume: "Pending",
    status: "Active",
  });

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = () => {

    if (
      !newStudent.name ||
      !newStudent.email ||
      !newStudent.department
    ) {
      alert("Please fill all fields.");
      return;
    }

    const student = {
      id: students.length + 101,
      ...newStudent,
    };

    setStudents([...students, student]);

    setNewStudent({
      name: "",
      email: "",
      department: "",
      resume: "Pending",
      status: "Active",
    });

    setShowForm(false);
  };
  return (
    <div className="students-page">

      {/* Header */}

      <div className="students-header">
        <div>
          <h2>Students Management</h2>
          <p>Manage all registered students.</p>
        </div>

        <button
  className="btn btn-primary add-btn"
  onClick={() => setShowForm(!showForm)}
>
  <FaPlus />
  {showForm ? " Close Form" : " Add Student"}
</button>
      </div>

      {/* Statistics */}

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <div className="stats-card">
            <div>
              <h6>Total Students</h6>
              <h3>{students.length}</h3>
            </div>

            <FaUserGraduate className="card-icon blue" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="stats-card">
            <div>
              <h6>Active</h6>
              <h3>{students.length}</h3>
            </div>

            <FaUserCheck className="card-icon green" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="stats-card">
            <div>
              <h6>Resume Uploaded</h6>
              <h3>{students.length}</h3>
            </div>

            <FaFileAlt className="card-icon purple" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="stats-card">
            <div>
              <h6>Pending Resume</h6>
              <h3>{students.filter((s) => s.resume === "Pending").length}</h3>
            </div>

            <FaClock className="card-icon orange" />
          </div>
        </div>

      </div>
    {
showForm && (

<div className="student-form-card">

<h4>Add New Student</h4>

<div className="row">

<div className="col-md-6 mb-3">

<label>Name</label>

<input
className="form-control"
name="name"
value={newStudent.name}
onChange={handleChange}
/>

</div>

<div className="col-md-6 mb-3">

<label>Email</label>

<input
className="form-control"
type="email"
name="email"
value={newStudent.email}
onChange={handleChange}
/>

</div>

<div className="col-md-6 mb-3">

<label>Department</label>

<select
className="form-select"
name="department"
value={newStudent.department}
onChange={handleChange}
>

<option value="">Select</option>

<option>CSE</option>

<option>IT</option>

<option>ECE</option>

<option>EEE</option>

</select>

</div>

<div className="col-md-6 mb-3">

<label>Resume Status</label>

<select
className="form-select"
name="resume"
value={newStudent.resume}
onChange={handleChange}
>

<option>Uploaded</option>

<option>Pending</option>

</select>

</div>

<div className="col-md-6 mb-4">

<label>Status</label>

<select
className="form-select"
name="status"
value={newStudent.status}
onChange={handleChange}
>

<option>Active</option>

<option>Inactive</option>

</select>

</div>

</div>

<div className="d-flex gap-3">

<button
className="btn btn-primary"
onClick={handleAddStudent}
>

Save Student

</button>

<button
className="btn btn-secondary"
onClick={() => setShowForm(false)}
>

Cancel

</button>

</div>

</div>

)
}
      {/* Search */}

      <div className="search-card">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search students..."
          />

        </div>

      </div>

      {/* Table */}

      <div className="table-card">

        <table className="table align-middle">

          <thead>

            <tr>

            <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>

            </tr>

          </thead>

          <tbody>
  {students.map((student) => (
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>

      <td>
        <span className="badge bg-primary">
          {student.role}
        </span>
      </td>

      <td>
        <button className="action-btn view">
          <FaEye />
        </button>

        <button className="action-btn edit">
          <FaEdit />
        </button>

        <button className="action-btn delete">
          <FaTrash />
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>

      </div>

    </div>
  );
}

export default Students;