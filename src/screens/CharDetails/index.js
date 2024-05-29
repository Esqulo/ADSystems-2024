import React, {useState, useEffect} from "react";
import {useRoute} from '@react-navigation/native';
import Api from "../../Api";

import EpisodeLine from '../../Components/EpisodeLine';

import {
    Container,
    CharImage,
    CharName,
    InfoText,
    SubContainer,
    SubContainerTitle,
    PersonalInfoLine
} from './styles';

export default () => {
    const route = useRoute();

    const [receveivedInfo, setReceivedInfo] = useState({
        charId: route.params.CharId
    });
    const [charInfo, setCharInfo] = useState([]);

    const getCharacterInfo = async () => {
        let charInfo = await Api.getCharacterDetail(receveivedInfo.charId);
        setCharInfo(charInfo);
    }

    useEffect(()=>{
        getCharacterInfo();
    },[])

    return(
        <Container contentContainerStyle={{alignItems:'center'}}>
            <CharImage source={{uri: charInfo.image}}/>
            <CharName>{charInfo.name}</CharName>
            <SubContainer>
                <SubContainerTitle>Informações</SubContainerTitle>
                <PersonalInfoLine>
                    <InfoText>Tipo:</InfoText>
                    <InfoText>{charInfo.species}</InfoText>
                </PersonalInfoLine>
                <PersonalInfoLine>
                    <InfoText>Localização:</InfoText>
                    {charInfo.location &&
                        <InfoText>{charInfo.location.name}</InfoText>
                    }
                </PersonalInfoLine>
            </SubContainer>
            
            {charInfo.episode &&
                <SubContainer>
                    <SubContainerTitle>Episódios</SubContainerTitle>
                    {charInfo.episode.map((item,key)=>(
                        <EpisodeLine data={item} key={key}/>
                    ))}
                </SubContainer>
            }
        </Container>
    )
}