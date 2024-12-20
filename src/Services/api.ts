import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

export const getStudents = () => axios.get(API_URL);
export const getStudentById = (id: number) => axios.get(`${API_URL}/${id}`);
export const addStudent = (student: any) => axios.post(API_URL, student);
export const updateStudent = (id: number, student: any) => axios.put(`${API_URL}/${id}`, student);
export const deleteStudent = (id: number) => axios.delete(`${API_URL}/${id}`);
