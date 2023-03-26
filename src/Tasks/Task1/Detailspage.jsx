import { Box, Button } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Detailspage = () => {
  const navItems = [
    {
      pagename: " Content 1",
      onClick: () => {
        navigate("content1");
      },
    },
    {
      pagename: " Content 2 ",
      onClick: () => {
        navigate("content2");
      },
    },
    {
      pagename: " Content 3 ",
      onClick: () => {
        navigate("content3");
      },
    },
  ];
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: "120px",
        height: "100%",
        minHeight: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>Detailspage</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {navItems.map((item) => (
          <Button key={item}  onClick={item.onClick}>
            {item.pagename}
          </Button>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
};

export default Detailspage;
