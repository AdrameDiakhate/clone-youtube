import {React,useState,useEffect} from 'react';
import "../Styles/Videos.css";
import { Avatar } from '@material-ui/core';


function VideosRow({ homeVideo }) {

    const [videoArray,SetVideoArray]=useState({homeVideo}.homeVideo);
 

    console.log({videoArray});
    

    /*const [titleVideo,setTitleVideo]=useState();

    const [channelName,setChannelName]=useState();
  
    const [view,setView]=useState();
  
    const [videoDate,setVideoDate]=useState();
  
    const [image,setImage]=useState(); */


    useEffect(()=>{
        /*
        //SetVideoArray({homeVideo}.homeVideo);
       // SetVideoArray({homeVideo}.homeVideo);
        setTitleVideo({videoArray}.snippet.title);
        setChannelName(videoArray.snippet.channelTitle);
        setView(videoArray.snippet.title);
        setVideoDate(videoArray.snippet.publishedAt);
        setImage(videoArray.snippet.thumbnails.medium.url);
        console.log(videoArray.snippet.title)
        */
        SetVideoArray({homeVideo}.homeVideo);
    },[])

    return (
        {homeVideo}.homeVideo.map(
            (video)=>{
                return (
                    <div className="videos" key={video.id}>
                        <img src={video.snippet.thumbnails.medium.url} className="imageVideo" alt="image1"/>

                        <div className="videos-infos">
                            <Avatar src="" alt="Channel Image" className="channel-image"/>
                            
                            <div className="videos-text">
                                <h4>{video.snippet.title}</h4>
                                <p> {video.snippet.channelTitle} </p>
                                <p>153 k vues . Il y a 3 ans{video.snippet.date}</p>
                            </div>
    
                         </div>
                     </div>
                )
            }
        ) 
    )
}

export default VideosRow;
