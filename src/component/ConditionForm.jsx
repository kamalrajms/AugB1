import React, { useState } from "react";

export default function ConditionForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handChande = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //   const handChande2 = (e) => {
  //     const { name, checked } = e.target;
  //     setFormData({
  //         ...formData,
  //         [name]:checked
  //     })
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (!formData.userName || !formData.email || !formData.password) {
      setError("All the fields are required");
      return;
    }
    if (!formData.terms) {
      setError("accept the check box");
      return;
    }

    setError("");
    alert("form is submitted successfully");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>conditional form</h2>
        <div>{error && <h2 style={{ color: "red" }}>{error}</h2>}</div>

        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handChande}
          placeholder="enter a name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handChande}
          placeholder="enter a email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handChande}
          placeholder="enter a password"
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handChande}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
