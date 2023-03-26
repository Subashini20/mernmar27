import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TaskLayot from "../Layout/TaskLayot";
import Aboutpage from "../Tasks/Task1/Aboutpage";
import Contactpage from "../Tasks/Task1/Contactpage";
import Content1 from "../Tasks/Task1/Contents/Content1";
import Content2 from "../Tasks/Task1/Contents/Content2";
import Content3 from "../Tasks/Task1/Contents/Content3";
import Detailspage from "../Tasks/Task1/Detailspage";

import Homepage from "../Tasks/Task1/Homepage";
import Task1 from "../Tasks/Task1/March21";
import Task2 from "../Tasks/Task2";
import Task3 from "../Tasks/Task3";
import Signup from "../Tasks/Task3/Signup";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<TaskLayot />}>
        <Route path="task1" element={<Task1 />}>
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="contact" element={<Contactpage />} />
          <Route path="details" element={<Detailspage />}>
            <Route path="content1" element={<Content1 />} />
            <Route path="content2" element={<Content2 />} />
            <Route path="content3" element={<Content3 />} />
          </Route>
        </Route>
        <Route path="task2" element={<Task2 />} />
        <Route path="task3" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
