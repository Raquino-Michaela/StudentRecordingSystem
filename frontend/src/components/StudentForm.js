import React, { useState } from "react";
<<<<<<< HEAD

=======
import axios from "axios";
>>>>>>> 783a195 (Initial commit)

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
<<<<<<< HEAD
  const [message, setMessage] = useState("");


=======
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

>>>>>>> 783a195 (Initial commit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !course) {
      setMessage("Please fill in all fields.");
      return;
    }
<<<<<<< HEAD
    await addStudent(name, course); // Call function from App.js
    setName("");
    setCourse("");
    setMessage("Student added successfully!");
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
=======
    const formData = new FormData();
    formData.append("name", name);
    formData.append("course", course);
    if (image) formData.append("image", image);

    await addStudent(formData);
    setName("");
    setCourse("");
    setImage(null);
    setMessage("Student added successfully!");
  };

  return (
    <div className="text-center">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
>>>>>>> 783a195 (Initial commit)
        <button type="submit">Add Student</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

<<<<<<< HEAD

export default StudentForm;


=======
export default StudentForm;
>>>>>>> 783a195 (Initial commit)
