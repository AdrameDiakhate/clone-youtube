import {React,useState,useEffect} from 'react';
import '../Styles/RecommendedVideos.css';
import Suggestion from './Suggestion';
import VideosRow from './VideosRow';
import instance from '../api/FetchData';


function RecommendedVideos() {


  //Récupération des donnees de l'api Youtube

  //Etat des videos de la page d'accueil
  const [homeVideo,setHomeVideo]=useState([]);


  //Récupère les données des vidéos de la page d'accueil depuis l'api Youtube à chaque rechargement de page
  
  useEffect(() => {
        instance.get("/videos").then(
        (resp)=>{
        setHomeVideo(resp.data.items);
        }
    )
  }, [setHomeVideo])

  //console.log(homeVideos)

    return (
        <div className="recommendedVideos">
            <Suggestion selected/>
            <div className="videos-section">
                {/* image={image} titleVideo={titleVideo} channelName={channelName} view={view} videoDate={videoDate} */}
                <VideosRow homeVideo={homeVideo} />

            </div>
        </div>
    )
}
export default RecommendedVideos;
