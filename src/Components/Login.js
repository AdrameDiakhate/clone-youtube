import {React,useState} from 'react';
import {auth , provider } from "../firebase";
import { Button } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../Styles/Login.css";
import { useSelector } from 'react-redux';
import { signin, signout } from '../redux/actions/loginAction';
import { useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';

function Login() {

    const [isLogedIn, setIsLogedIn] = useState(false);
    
    const user = useSelector(state => state.loginReducer.signin);

    //console.log(user)

    console.log(user.photoURL)

    const dispatch = useDispatch();


    return (
        <div className="login">
            {isLogedIn ?
            <div > <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            :
            <Button variant="outlined" startIcon={<PersonOutlineIcon/>} className="login-button" onClick={()=>{
                dispatch(signin)
                setIsLogedIn(true)
            }}>
                Se Connecter
            </Button>
            }
        </div>
    )
}

export default Login;
