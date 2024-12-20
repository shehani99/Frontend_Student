import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../Services/api';

const AddStudent: React.FC = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    yearOfEnrollment: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addStudent(student);
      navigate('/');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Student</h1>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="yearOfEnrollment" type="number" placeholder="Year of Enrollment" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudent;