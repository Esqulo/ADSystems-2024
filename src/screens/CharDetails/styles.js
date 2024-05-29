import React from "react";
import styled from "styled-components";

export const Container = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    padding: 5%;
`;

export const SubContainer = styled.View`
    width: 100%;
    padding: 5%;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #000;
    flex-direction: column;
`;

export const SubContainerTitle = styled.Text`
    width: 100%;
    text-align: center;
    color: #FFF;
    font-size: 21px;
    padding-bottom: 10px;
`;

export const PersonalInfoLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const CharImage = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75px;
`;

export const CharName = styled.Text`
    margin-top: 15px;
    font-size: 30px;
    color: #000;
    font-weight: bold;
    text-align: center;
`;

export const InfoText = styled.Text`
    font-size: 15px;
    color: #FFF;
    padding-bottom: 5px;
`;