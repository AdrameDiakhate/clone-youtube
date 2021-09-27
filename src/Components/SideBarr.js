import React from 'react';
import '../Styles/SideBarr.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SideBarrRow from './SideBarrRow';


function SideBarr() {
    return (
        <div className="sideBarr">
            <SideBarrRow Icon={HomeIcon} title="Accueil" selected/>
            <SideBarrRow Icon={ExploreIcon} title="Explorer"/>
            <SideBarrRow Icon={SubscriptionsIcon} title="Abonnements"/>
            <SideBarrRow Icon={VideoLibraryIcon} title="Bibliothèque"/>
        </div>
    )
}

export default SideBarr;
