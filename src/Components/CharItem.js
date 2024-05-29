import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    background-color: #000;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 2%;
    margin-bottom: 15px;
`;

const LeftSeparator = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
`;

const RightSeparator = styled.View`
    flex-direction: column;
    width: 70%;
    height: 100%;
    padding: 5%;
`;

const CharImage = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 32.5px;
`;

const CharName = styled.Text`
    font-size: 21px;
    width: 90%;
    text-align: left;
    color: #FFF;
`;

const CharStatusDead = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #F00;
    position: absolute;
    top: 40%;
    right: 10%;
`;

const CharStatusUnknown = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffda00;
    position: absolute;
    top: 40%;
    right: 10%;
`;

const CharStatusAlive = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #45c354;
    position: absolute;
    top: 40%;
    right: 10%;
`;

export default ({data}) => {
    const navigation = useNavigation();

    const navigateDeails = () => {
        navigation.navigate('CharDetails',{CharId:data.id});
    }

    return(
        <Container onPress={navigateDeails}>
            <LeftSeparator>
                <CharImage source={{uri: data.image}}/>
            </LeftSeparator>
            <RightSeparator>
                <CharName>{data.name}</CharName>
                {data.status == "unknown" &&
                    <CharStatusUnknown/>
                }
                {data.status == "Alive" &&
                    <CharStatusAlive/>
                }
                {data.status == "Dead" &&
                    <CharStatusDead/>
                }
            </RightSeparator>
        </Container>
    )
}