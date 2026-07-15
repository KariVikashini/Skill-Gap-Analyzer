import { getProfile, saveProfile } from "../../services/profileService";
import { useState,useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({

    id: "",

    name: "",

    email: "",

    role: "",

    phone: "",

    dob: "",

    gender: "",

    college: "",

    degree: "",

    department: "",

    year: "",

    cgpa: "",

    domain: "",

    jobRole: "",

    bio: "",

    image: ""

});

  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const loggedUser =
        JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
        loadProfile(loggedUser.id);
    }

}, []);
const loadProfile = async (userId) => {

    try {

        const response = await getProfile(userId);

        if (response.data.success) {

            setUser({

                id: userId,

                name: response.data.name || "",

                email: response.data.email || "",

                role: response.data.role || "",

                phone: response.data.phone || "",

                dob: response.data.dob || "",

                gender: response.data.gender || "",

                college: response.data.college || "",

                degree: response.data.degree || "",

                department: response.data.department || "",

                year: response.data.year || "",

                cgpa: response.data.cgpa || "",

                domain: response.data.domain || "",

                jobRole: response.data.jobRole || "",

                bio: response.data.bio || "",

                image: localStorage.getItem(`profileImage_${userId}`) || ""

            });

            if (response.data.skills) {

                setSkills(response.data.skills.split(","));

            }

        }

    }

    catch (error) {

        console.log(error);

    }

};

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const addSkill = () => {
    if (
      skillInput.trim() !== "" &&
      !skills.includes(skillInput.trim())
    ) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleImage = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    const imageData = reader.result;

    localStorage.setItem(`profileImage_${user.id}`, imageData);

    setUser(prev => ({
      ...prev,
      image: imageData
    }));
  };

  reader.readAsDataURL(file);
};
  const calculateProgress = () => {
    let completed = 0;

    const fields = [
      user.name,
      user.email,
      user.phone,
      user.dob,
      user.gender,
      user.college,
      user.degree,
      user.department,
      user.year,
      user.cgpa,
      user.domain,
      user.jobRole,
      user.bio
    ];

    fields.forEach((field) => {
      if (field !== "") completed++;
    });

    if (skills.length > 0) completed++;
    if (user.image !== "") completed++;

    return Math.round((completed / 15) * 100);
  };

  const handleSave = async () => {

    try {

        const response = await saveProfile({

            id: user.id,

            phone: user.phone,

            dob: user.dob,

            gender: user.gender,

            college: user.college,

            degree: user.degree,

            department: user.department,

            year: user.year,

            cgpa: user.cgpa,

            domain: user.domain,

            jobRole: user.jobRole,

            skills: skills.join(","),

            bio: user.bio

        });

        alert(response.data.message);

    }

    catch (error) {

        console.log(error);

        alert("Unable to save profile");

    }

};

  return (
    <div className="profile-page">

      <div className="profile-top">

        <div className="profile-avatar-card">

          <div className="avatar">

            {user.image ? (
              <img src={user.image} alt="profile" />
            ) : (
              user.name.charAt(0).toUpperCase()
            )}

          </div>

          <label className="upload-btn">
  📷 Change Photo
  <input
    type="file"
    accept="image/*"
    hidden
    onChange={handleImage}
  />
</label>

          <h3>{user.name}</h3>

<p className="user-role">{user.role}</p>

<p className="user-email">{user.email}</p>

        </div>

        <div className="profile-progress-card">

          <h3>Profile Completion</h3>

<div className="progress mb-4">
  <div
    className="progress-bar"
    style={{ width: `${calculateProgress()}%` }}
  >
    {calculateProgress()}%
  </div>
</div>

<div className="completion-list">

  <div>✅ Personal Information</div>

  <div>✅ Academic Information</div>

  <div>✅ Career Preferences</div>

  <div>✅ Skills</div>

  <div>✅ About Me</div>

</div>

<p className="completion-text">
  Complete your profile to receive accurate career recommendations.
</p>

        </div>

      </div>

      <div className="profile-card">

        <h3>Personal Information</h3>

        <div className="profile-grid">

          <div>
            <label>Full Name</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              value={user.email}
              disabled
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Gender</label>

            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>

          </div>

        </div>

      </div>

      <div className="profile-card">

        <h3>Academic Information</h3>

        <div className="profile-grid">

          <div>
            <label>College</label>

            <input
              name="college"
              value={user.college}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>Degree</label>

            <input
              name="degree"
              value={user.degree}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>Department</label>

            <input
              name="department"
              value={user.department}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>Year of Study</label>

            <select
              name="year"
              value={user.year}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>

          </div>

          <div>

            <label>CGPA</label>

            <input
              type="number"
              step="0.01"
              name="cgpa"
              value={user.cgpa}
              onChange={handleChange}
            />

          </div>

        </div>

      </div>

      <div className="profile-card">

        <h3>Career Preferences</h3>

        <div className="profile-grid">

          <div>

            <label>Interested Domain</label>

            <select
              name="domain"
              value={user.domain}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Java Full Stack</option>
              <option>Python</option>
              <option>Cloud Computing</option>
              <option>Data Science</option>
              <option>AI / ML</option>
              <option>Cyber Security</option>
              <option>DevOps</option>
              <option>UI / UX</option>
            </select>

          </div>

          <div>

            <label>Preferred Job Role</label>

            <input
              name="jobRole"
              value={user.jobRole}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="skill-section">

          <label>Skills</label>

          <div className="skill-input">

            <input
              value={skillInput}
              onChange={(e) =>
                setSkillInput(e.target.value)
              }
              placeholder="Add Skill"
            />

            <button onClick={addSkill}>
              Add
            </button>

          </div>

          <div className="skill-list">

            {skills.map((skill) => (
              <div
                className="skill-chip"
                key={skill}
              >
                {skill}

                <span
                  onClick={() => removeSkill(skill)}
                >
                  ×
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="profile-card">

        <h3>About Me</h3>

        <textarea
          rows="5"
          name="bio"
          value={user.bio}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
        />

      </div>

      <div className="save-btn-container">

        <button
          className="save-btn"
          onClick={handleSave}
        >
          Save Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;