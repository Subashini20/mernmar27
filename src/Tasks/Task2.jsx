import { Box, Button, FormControl, InputLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { format } from "date-fns";

const Task2 = () => {
  const initialState = {
    title: "",
    description: "",
    content: "",
    dateofpost: "",
    catagory: "",
    author: "",
  };
  const [postData, setPostDate] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isValidated, setValidated] = useState(false);
  const onchangePost = (e) => {
    setPostDate({
      ...postData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: handleErrorMessage(e.target.name, e.target.value),
    });
  };
  // function handleDateChange(date) {
  //   if (date) {
  //     setSelectedDate(date);
  //     const formattedDate = format(new Date(date), "yyyy-MM-dd");
  //     setPostDate({ ...postData, dateofpost: formattedDate });
  //     setFormErrors({
  //       ...formErrors,
  //       dateofpost: handleErrorMessage("dateofpost", formattedDate),
  //     });
  //   }
  // }
  const handleErrorMessage = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "title":
      case "content":
      case "catagory":
      case "dateofpost":
        if (value === "") {
          errorMessage = "Required field";
        }
        break;
      default:
        break;
    }

    return errorMessage;
  };

  const handleValidation = () => {
    let errors = Object.keys(formErrors).filter((key) => {
      return formErrors[key] !== "";
    });

    if (errors.length === 0) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  const handleSubmitCheck = () => {
    let error = {};

    Object.keys(postData).forEach((key) => {
      error[key] = handleErrorMessage(key, postData[key]);
    });

    setFormErrors(error);
  };

  const submitCheck = (event) => {
    event.preventDefault();

    handleSubmitCheck();
    if (isValidated) {
      if (
        postData.title !== "" &&
        postData?.dateofpost !== "" &&
        postData?.content !== "" &&
        postData?.catagory !== ""
      ) {
        console.log(postData, "Post data");
      } else {
        console.log(postData, "Data missing");
      }
    }
  };
  useEffect(() => {
    handleValidation();
  }, [postData, formErrors]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box>Blog content</Box>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        autoComplete="off"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="Title"
            defaultValue="Hello World"
            value={postData?.title}
            onChange={(e) => {
              onchangePost(e);
            }}
            name="title"
            error={formErrors.title ? true : false}
          />
          <TextField
            id="outlined-disabled"
            label="Description"
            defaultValue="Hello World"
            multiline
            maxRows={4}
            value={postData?.description}
            name="description"
            onChange={(e) => {
              onchangePost(e);
            }}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Content"
            type="text"
            autoComplete="current-password"
            multiline
            maxRows={10}
            name="content"
            error={formErrors.content ? true : false}
            value={postData?.content}
            onChange={(e) => {
              onchangePost(e);
            }}
          />
          <TextField
            required
            type={"date"}
            id="outlined-required"
            defaultValue="Hello World"
            value={postData?.dateofpost}
            onChange={(e) => {
              onchangePost(e);
            }}
            name="dateofpost"
            error={formErrors.dateofpost ? true : false}
          >
            <InputLabel htmlFor="outlined-required">Title</InputLabel>
          </TextField>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Published Date"
                value={selectedDate}
                name="dateofpost"
                error={formErrors.dateofpost ? true : false}
                required
                onChange={(e) => {
                  handleDateChange(e);
                }}
              />
            </DemoContainer>
          </LocalizationProvider> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={postData?.catagory}
              label="Catagory"
              error={formErrors.catagory ? true : false}
              onChange={(e) => {
                onchangePost(e);
              }}
              required
              name="catagory"
            >
              <MenuItem value={"Technology"}>Technology</MenuItem>
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Travel"}>Travel</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-required"
            label="Author"
            defaultValue="Hello World"
            name="author"
            error={formErrors.author ? true : false}
            value={postData?.author}
            onChange={(e) => {
              onchangePost(e);
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ alignSelf: "center" }}
            variant="contained"
            onClick={(e) => {
              submitCheck(e);
            }}
          >
            Task1
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Task2;
