import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField'; 
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const darkTheme = createMuiTheme({
  palette: {
    responsiveFontSizes: true,
    roundedCorners: true,
    type: 'dark',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1532105956626-9569c03602f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {

  const classes = useStyles();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={classes.paper}>
        <Avatar className={classes.avatar}> 
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography> 
        <Form onSubmit={handleLogin} ref={form}> 
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="username" 
                type="text" 
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
                autoFocus
                /> 
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                label="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                /> 
                <div className="form-group">
                  <Button   type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
               disabled={loading}>
                    
                    <span>Login</span>
                  </Button>
                </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
               invalid user id and password
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </div>
    </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default Login;