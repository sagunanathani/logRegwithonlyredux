import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch, useSelector} from "react-redux";
import {Logier} from "./Actions/allAction";

const Login = () => {
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const users = useSelector((state) => state.UserReducer.data);
    // console.log("users",users);

    const navigate = useNavigate();
    const handleSubmit = () => {
        if (userLogin.email && userLogin.password) {
            const loginSuccess = users.findIndex(user => user.email === userLogin.email);
            // console.log("loginSuccess-------->", loginSuccess);
            console.log(users.findIndex(user => user.email === userLogin.email));
            if (
                users[loginSuccess]?.email === userLogin.email &&
                users[loginSuccess]?.password === userLogin.password
            )
            {
                window.alert(" Login successfully");
            }

            if (loginSuccess === -1) {
                setUserLogin(false);
                window.alert("username is not match");

            console.log("userLogin", userLogin);
            }

            if (loginSuccess !== -1) {
                if (users[loginSuccess].password === userLogin.password) {

                    console.log('user login ');
                    setUserLogin(false);
                } else {
                    window.alert("password is not match");
                    console.log(' password not match')
                }
            }
            } else {
                window.alert("Enter the valid username and password");

            }
            dispatch(Logier(userLogin));
            setUserLogin({
                email: "",
                password: ""
            });
        };

    const dataChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({
            ...userLogin,
            [name]: value
        });
    };

    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: "20px auto"};
    const avatarStyle = {backgroundColor: '#1bbd7e'};
    const btnStyle = {margin: '8px 0'};
    return (
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Login Page</h2>
                    </Grid>

                    <TextField fullWidth label='UserName' type="email" name="email"
                               placeholder="Enter Your email"
                               autoComplete="off" value={userLogin.email} onChange={dataChange}  />

                    <TextField fullWidth label='Password' type="password" name="password"
                               placeholder="Enter your password" autoComplete="off" value={userLogin.password} onChange={dataChange}
                            />

                    <FormControlLabel
                        control={
                            <Checkbox name="checkedB" color="primary"/>
                        }
                        label="Remember me"
                    />


                    <Button type='submit' id="myDIV" onClick={()=>handleSubmit()} color='primary' variant="contained"
                            style={btnStyle}
                            fullWidth>Login</Button>
                    <Button type='submit' component={Link} to="/Forgot" color='primary' variant="contained"
                            style={btnStyle}
                            fullWidth>Forgot Password?</Button>
                    <Typography>
                        <p className="forget password text-right"></p>
                    </Typography>
                    <Typography> Do you have an account ?
                        <Button component={Link} to="/Registration" variant="contained" color="primary"
                                style={btnStyle}>
                            Registration
                        </Button>
                    </Typography>
                </Paper>
            </Grid>

        </>
    )
};
export default Login;



