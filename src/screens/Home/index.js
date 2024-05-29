import React, {useState, useEffect} from "react";
import Api from "../../Api";


import CharItem from "../../Components/CharItem";
import {
    Container,
    CustomList
} from './styles';


export default () => {

    const [charList, setCharList] = useState([]);
    const [page, setPage] = useState(1);

    const getCharacters = async () => {
        let characters = await Api.getCharacters(page);
        setCharList([...charList, ...characters.results]);
        setPage(page+1);
    }

    useEffect(()=>{
        getCharacters();
    },[])

    return(
        <Container>
            <CustomList 
                data={charList}
                keyExtractor={item => String(item.id)}
                renderItem={({item})=> 
                    <CharItem data={item}/>
                }
                onEndReached={getCharacters}
                onEndReachedThreshold={0.5}
            />
        </Container>
    );
}