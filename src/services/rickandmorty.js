import axios from 'axios';
const apiUrl= 'https://rickandmortyapi.com/api/character';

export const getCharacter =async ()=>{
    try{
        const response = await axios.get(`${apiUrl}`);
        return response.data;
    }catch(error){
       throw error;
    }
}