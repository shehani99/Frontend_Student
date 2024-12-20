import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStudents, deleteStudent } from '../Services/api';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      <button onClick={() => navigate('/add')}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Year of Enrollment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: any) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>{student.yearOfEnrollment}</td>
              <td>
                <button onClick={() => navigate(`/edit/${student.id}`)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
