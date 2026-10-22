import React, { useState } from "react";

// Returns an error message for every field that is missing or invalid
function validate(f) {
  const e = {};

  if (!f.name.trim()) e.name = "Full name is required.";
  else if (!/^[A-Za-z ]+$/.test(f.name.trim()))
    e.name = "Name must contain letters and spaces only.";

  if (!f.email) e.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "Enter a valid email address.";

  if (!f.password) e.password = "Password is required.";
  else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(f.password))
    e.password = "Use an uppercase letter, a lowercase letter, a number and at least 8 characters.";

  if (!f.age) e.age = "Age is required.";
  else if (!/^\d+$/.test(f.age) || Number(f.age) < 18 || Number(f.age) > 30)
    e.age = "Age must be between 18 and 30.";

  if (!f.mobile) e.mobile = "Mobile number is required.";
  else if (!/^\d{10}$/.test(f.mobile)) e.mobile = "Enter exactly 10 digits.";

  if (!f.gender) e.gender = "Please select a gender.";
  if (!f.state) e.state = "Please select a state.";

  return e;
}

// Reusable registration form component
function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobile: "",
    gender: "",
    state: ""
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(form);
  const valid = Object.keys(errors).length === 0;

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  // A field counts as "visited" once the user leaves it
  const markTouched = (e) => setTouched({ ...touched, [e.target.name]: true });

  // Show the error only after the field has been visited
  const showError = (field) =>
    touched[field] && errors[field] ? <small>{errors[field]}</small> : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) setSubmitted(true);
  };

  return (
    <div className="card">
      <h2>Join The Green Thumb Journal</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          onBlur={markTouched}
          placeholder="Enter your name"
        />
        {showError("name")}

        <label>Email Address</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          onBlur={markTouched}
          placeholder="Enter your email"
        />
        {showError("email")}

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={updateField}
          onBlur={markTouched}
          placeholder="Minimum 8 characters"
        />
        {showError("password")}

        <label>Age</label>
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={updateField}
          onBlur={markTouched}
          placeholder="Enter age (18-30)"
        />
        {showError("age")}

        <label>Mobile Number</label>
        <input
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={updateField}
          onBlur={markTouched}
          placeholder="10-digit mobile number"
        />
        {showError("mobile")}

        <label>Gender</label>
        <select
          name="gender"
          value={form.gender}
          onChange={updateField}
          onBlur={markTouched}
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {showError("gender")}

        <label>State</label>
        <select
          name="state"
          value={form.state}
          onChange={updateField}
          onBlur={markTouched}
        >
          <option value="">Select state</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
        </select>
        {showError("state")}

        <button type="submit" disabled={!valid}>
          Submit Registration
        </button>

        {submitted && (
          <p className="success">Registration completed successfully! Welcome to the garden 🌱</p>
        )}
      </form>
    </div>
  );
}

export default RegistrationForm;
