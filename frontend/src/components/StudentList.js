import React from "react";

<<<<<<< HEAD

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.course}
            </li>
          ))
        )}
=======
const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="text-center">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.image && <img src={`http://localhost:5000${student.image}`} alt="Student" width="50" />}
            <strong>{student.name}</strong> - {student.course}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
>>>>>>> 783a195 (Initial commit)
      </ul>
    </div>
  );
};

<<<<<<< HEAD

export default StudentList;
=======
export default StudentList;
>>>>>>> 783a195 (Initial commit)
