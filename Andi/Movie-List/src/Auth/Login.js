import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../Context/AuthContext";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const { setUser } = useContext(AuthContext);
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const newError = { ...error };
    const newInput = { ...input };
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "username":
        if (!value) {
          newError[name] = "Username required!";
        } else {
          newError[name] = "";
        }
        break;
      case "password":
        if (!value) {
          newError[name] = "Password required!";
        } else {
          newError[name] = "";
        }
        break;

      default:
        break;
    }

    newInput[name] = value;

    setInput(newInput);
    setError(newError);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = input;

    if (!username && !password) {
      return setError({
        username: "Username required!",
        password: "Password required!",
      });
    }

    if (!username) {
      return setError({
        username: "Username required!",
      });
    }

    if (!password) {
      return setError({
        password: "Password required!",
      });
    }

    if (username && password) {
      axios
        .post("https://backendexample.sanbersy.com/api/login", input)
        .then((res) => {
          if (res.data === "invalid username or password") {
            return toast.error("Invalid Username or Password!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              transition: Slide,
            });
          }
          toast.success("Login success!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
          });

          setUser(res.data);
          setInput({ username: "", password: "" });
          setError({ username: "", password: "" });

          localStorage.setItem("user", JSON.stringify(res.data));
          props.history.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something wrong!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
          });
        });
    }
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  variant="outlined"
                  label="Username"
                  value={input.username}
                  helperText={error.username}
                  error={error.username ? true : false}
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="password"
                  label="Password"
                  type="password"
                  value={input.password}
                  helperText={error.password}
                  error={error.password ? true : false}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(Login);
