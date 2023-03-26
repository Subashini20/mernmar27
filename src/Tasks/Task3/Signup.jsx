import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./style.css";
import Apicall from "./Services/Apicall";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      Lastname: "",
      email: "",
      password: "",
      errors: {
        fname: "",
        lname: "",
        password: "",
        email: "",
      },
    };
  }
  handlechange = async (e) => {
    var errors1 = { ...this.state.errors };

    if (e.target.value === "") {
      errors1[e.target.name] = "Required";
    } else {
      var check = this.validation_form(e.target.name, e.target.value);
      if (check === false) {
        errors1[e.target.name] = "Please enter valid " + e.target.name;
      } else {
        errors1[e.target.name] = "";
      }
    }
    await this.setState({ errors: errors1, [e.target.name]: e.target.value });
    // console.log(this.state);
  };
  validation_form(name, value) {
    // console.log( name)
    if (name === "email") {
      // console.log(name)
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (regex.test(value) == false) {
        return false;
      } else {
        this.setState({ email: value });
        return true;
      }
    }
    if (name === "fname" || name === "lname") {
      // console.log(value.length)
      if (value.length < 5) {
        return false;
      } else {
        {
          name === "fname"
            ? this.setState({ firstName: value })
            : this.setState({ Lastname: value });
        }
        return true;
      }
    }
    if (name === "password") {
      let regexp = new RegExp("^(?=.*[A-Za-z])[A-Za-zd]{8,}$");
      if (regexp.test(value) == false) {
        return false;
      } else {
        this.setState({ password: value });
        return true;
      }
    }
  }
  submit(e) {
    const { firstName, Lastname, email, password } = this.state;
    if (firstName != "" && Lastname != "" && email != "" && password != "") {
      const newUsers = {
        id: 20 + Math.floor(Math.random() * 100),
        firstName: this.state.firstName,
        Lastname: this.state.Lastname,
        email: this.state.email,
        password: this.state.password,
      };
      Apicall.post("/members", JSON.stringify(newUsers), {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.state);
    } else {
      alert("Please enter all the fields");
    }
  }
  render() {
    return (
      <>
        <Box className="outline_box">
          <Grid
            container
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ position: "relative", top: "10px" }}
            >
              Sign up
            </Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <TextField
                id="outlined-basic"
                label="First_name"
                variant="outlined"
                className="inputBox"
                helperText={this.state.errors.fname ?? "Enter the first name"}
                size="small"
                onChange={(e) => this.handlechange(e)}
                name="fname"
                required
                error={this.state.errors.fname}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Last_name"
                variant="outlined"
                className="inputBox"
                helperText={this.state.errors.lname ?? "Enter the last name"}
                size="small"
                onChange={(e) => this.handlechange(e)}
                name="lname"
                error={this.state.errors.lname}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="inputBox"
                helperText= {this.state.errors.email ?? "Enter the email"}
                name="email"
                size="small"
                onChange={(e) => this.handlechange(e)}
                required
                error={this.state.errors.email}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="inputBox"
                helperText={this.state.errors.password ?? "Enter the password"}
                size="small"
                name="password"
                onChange={(e) => this.handlechange(e)}
                required
                error={this.state.errors.password}

              />
            </Grid>
          </Grid>
          <p style={{ marginLeft: "75px" }}>
            Already have an account <a href="#">Sign in</a>
          </p>
          <Grid
            container
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" onClick={(e) => this.submit(e)}>
              Sign up
            </Button>
          </Grid>
        </Box>
      </>
    );
  }
}
export default Signup;
