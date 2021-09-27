import React from 'react';
import '../Styles/SideBarrRow.css';


function SideBarrRow({Icon,title,selected}) {
    return (
        <div className="sideBarrRow">
             <Icon className={`icon-sideBarr ${selected && "selected"}`}/>
            <h2 className="title-sideBarr"> {title} </h2>
        </div>
    )
}

export default SideBarrRow
