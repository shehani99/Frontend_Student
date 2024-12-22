import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddUserForm from "@/components/myComponents/AddUser";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit-user" element={<AddUserForm />} />
    </Routes>
  );
};

export default Routers;
