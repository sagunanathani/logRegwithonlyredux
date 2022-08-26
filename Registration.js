import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
import {Grid, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch, useSelector} from "react-redux";
import {Registrations} from "./Actions/allAction";

const Registration = () => {
    const dispatch = useDispatch();
    // const reduxUser = useSelector(state => state);
    // console.log("reduxUser",reduxUser);
    const [userRegistration, setUserRegistration] = useState({
        firstName: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        checkbox: ""
    });

    const navigate = useNavigate();

    const ToLogin = (e) => {
        e.preventDefault();
        dispatch(Registrations(userRegistration));
        console.log("userRegistration",userRegistration);

        setUserRegistration({
            firstName: "",
            email: "",
            password: "",
            phone: "",
            gender: "",
            checkbox: ""
        })
    };

    const dataChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({...userRegistration, [name]: value});
    };

    const paperStyle = {padding: '30px 20px', width: 300, margin: "20px auto"};
    const headerStyle = {margin: 0};
    const avatarStyle = {backgroundColor: '#1bbd7e'};
    const marginTop = {marginTop: 5};
    const btnStyle = {margin: '8px 0'};
    return (
        <>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <h2 style={headerStyle}>Registration Page</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account
                            !</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label='FullName' type="firstName" name="firstName"
                                   placeholder="Enter Your FullName" autoComplete="off"
                                   value={userRegistration.firstName} onChange={dataChange}/>

                        <TextField fullWidth label='Email ID' type="email" name="email" placeholder="Enter Your email"
                                   autoComplete="off" value={userRegistration.email} onChange={dataChange}/>

                        <TextField fullWidth label='Password' type="password" name="password"
                                   placeholder="Enter your password" autoComplete="off"
                                   value={userRegistration.password} onChange={dataChange}/>

                        <TextField fullWidth label='Phone Number' pattern="[0-9]" maxLength="10" type="phone" name="phone"
                                   placeholder="Enter your phone number" autoComplete="off"
                                   value={userRegistration.phone} onChange={dataChange}/>

                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup type="radio" aria-label="gender" name="gender" style={{display: 'initial'}}
                                        onChange={dataChange}>
                                <FormControlLabel name="gender" value="female" control={<Radio/>} label="Female"/>
                                <FormControlLabel name="gender" value="male" control={<Radio/>} label="Male"/>
                            </RadioGroup>
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox name="checkbox" type="checkbox" required={true} defaultChecked={false} onChange={dataChange}/>}
                            label="I accept the terms and conditions."
                        />

                        <Button onClick={ToLogin} type='submit' color='primary' variant="contained" style={btnStyle}
                                fullWidth>Registration</Button>
                        <Button type='submit' component={Link} to="/" color='primary' variant="contained"
                                style={btnStyle} fullWidth>Login</Button>
                    </form>
                </Paper>
            </Grid>
        </>
    )
};
export default Registration;



