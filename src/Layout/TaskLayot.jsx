import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TaskLayot = () => {
    const navigate=useNavigate()
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={()=>{navigate("/task1")}}>Task1</Button>
            <Button onClick={()=>{navigate("/task2")}}>Task2</Button>
            <Button onClick={()=>{navigate("/task3")}}>Task3</Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Outlet />
    </div>
  );
};

export default TaskLayot;
