import axios from 'axios';
const apiUrl= 'https://rickandmortyapi.com/api/character?page=';
export async function getCharacter(page){
    try{
        const response = await axios.get(`${apiUrl}${page}`);
        return response.data;
    }catch(error){
       throw error;
    }
}