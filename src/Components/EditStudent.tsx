import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentById, updateStudent } from '../Services/api';

const EditStudent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await getStudentById(Number(id));
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateStudent(Number(id), student);
      navigate('/');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Student</h1>
      {student && (
        <>
          <input name="firstName" value={student.firstName} onChange={handleChange} />
          <input name="lastName" value={student.lastName} onChange={handleChange} />
          <input name="email" value={student.email} onChange={handleChange} />
          <input name="department" value={student.department} onChange={handleChange} />
          <input name="yearOfEnrollment" type="number" value={student.yearOfEnrollment} onChange={handleChange} />
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default EditStudent;