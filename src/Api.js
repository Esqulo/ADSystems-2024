const BASE_API = 'https://rickandmortyapi.com/api';

export default {
    getCharacters: async(page) => {
        try{
            const req = await fetch(`${BASE_API}/character/?page=${page}`,{
                method: 'GET',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
            });
            return await req.json();
        }catch(e){
            console.log(e)
        }
    },
    getCharacterDetail: async(CharId) => {
        try{
            const req = await fetch(`${BASE_API}/character/${CharId}`,{
                method: 'GET',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
            });
            return await req.json();
        }catch(e){
            console.log(e)
        }
    }
}