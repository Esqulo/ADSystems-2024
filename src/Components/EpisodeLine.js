import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const InfoText = styled.Text`
    font-size: 15px;
    color: #FFF;
    padding-bottom: 5px;
`;

export default ({data}) => {

    const[episode,setEpisode] = useState('');

    async function fetchEpisode (){
        try{
            const req = await fetch(data,{
                method: 'GET',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
            });
            let episodeInfo = await req.json();
            setEpisode(episodeInfo.name)
        }catch(e){
            console.log(e)
        }
    }

    fetchEpisode();

    return(
        <InfoText>{episode}</InfoText>
    )
}