import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SweetAlert from "react-bootstrap-sweetalert";
import {useDispatch, useSelector} from "react-redux";
import {Foften} from "./Actions/allAction";

const Forgot = () => {
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const users = useSelector((state) => state.UserReducer.data);
    // console.log("users",users);

    const navigate = useNavigate();
    const forget = () => {
        if (userLogin.email && userLogin.password) {
            const loginSuccess = users.findIndex(user => user.email === userLogin.email);

            if (users[loginSuccess]?.email === userLogin.email) {
                (users[loginSuccess].password = userLogin.password);
                {
                    window.alert(" Password Changed successfully");
                }
                dispatch(Foften(userLogin));
                if (loginSuccess === -1) {
                    window.alert("Registration ID doesn't match Please Create the account");
                }
            } else {
                window.alert("Enter the valid username and password");
            }
        }

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
                        <h2>Forgot Page</h2>
                    </Grid>

                    <TextField fullWidth label='email' type="email" name="email"
                               placeholder="Enter Your email"
                               autoComplete="off" value={userLogin.email} onChange={dataChange}/>

                    <TextField fullWidth label='Password' type="password" name="password"
                               placeholder="Enter your password" autoComplete="off"
                               value={userLogin.password} onChange={dataChange}/>

                    <Button type='submit' onClick={() => forget()} color='primary' variant="contained" style={btnStyle}
                            fullWidth>Forget Password</Button>
                    <Button type='submit' component={Link} to="/" color='primary' variant="contained" style={btnStyle}
                            fullWidth>Login</Button>
                </Paper>
            </Grid>
        </>
    )
};
export default Forgot;

