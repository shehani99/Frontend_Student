import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentList from './Components/StudentList';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import './index.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentList />} />
      <Route path="/add" element={<AddStudent />} />
      <Route path="/edit/:id" element={<EditStudent />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);