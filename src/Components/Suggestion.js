import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "../Styles/Suggestion.css";

function Suggestion({selected}) {
    return (
        <div className="suggestion">
            <Stack direction="row" spacing={1}>
                <Chip label="Mix" color="primary" style={{"backgroundColor":`${selected && "black"}`}}/>
                <Chip label="Musique" />
                <Chip label="Diffusion en direct" />
                <Chip label="Site Web" />
                <Chip label="Machine learning" />
                <Chip label="Deep Learning" />
                <Chip label="Cheikhou Tidjani" />
                <Chip label="Serigne Babacar Sy" />
                <Chip label="Al Maktoum" />
                <Chip label="Serigne Moustapha Sy" />
            </Stack>
        </div>
    )
}

export default Suggestion;
