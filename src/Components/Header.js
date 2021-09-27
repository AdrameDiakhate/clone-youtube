import { React , useEffect, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import "../Styles/Header.css";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Avatar } from '@material-ui/core';
import Login from '../Components/Login';
import { auth } from '../firebase';

const Header=()=>{

    //const user=auth.currentUser;
    //Des le 1er chargement de la page on a le rendu
    //Ensuite on execute le useEffect
    //Ensuite,on execute cleanup pour demonter le component
    //Ensuite on lit les changement d'etat pour monter le component
    //Ainsi de suite,useEffect

    const [user,setUser]=useState();
    
    if (auth.currentUser) {
        setUser(auth.currentUser);
        console.log(auth.currentUser);
    }

    useEffect(() => {
        //let mounted=true;
         if(auth.currentUser){
            console.log(user.email);
            console.log("Use effect");
            setUser(auth.currentUser);
         }
         return()=>{
             console.log('Hello cleanup')
            //  setUser(user.currentUser);
         }
    },[user])

  return (
      <div className="header">
            <div className="header-left">
                <MenuRoundedIcon/>
                <img src="../YOUTUBE_LOGO.png" alt="logo-youtube" className="logo-youtube"/>
            </div>

            <div className="header-center">
                <div className="header-input-search">
                    <input type="text" className="input-search" placeholder="Rechercher"/>
                     <SearchIcon className="search-icon" />
                </div>
                <MicRoundedIcon className="micro-round-icone"/>
            </div>
            <div className="header-right">
                <VideoCallOutlinedIcon className="right-icon" />
                <AppsOutlinedIcon className="right-icon" />
                <NotificationsOutlinedIcon className="right-icon" />
                {(user!==null || user!==undefined) ? <Login/>: <Avatar alt="profile picture" src={user.photoURL} className="right-icon" />}
            </div>
      </div>
  )
}

export default Header;
