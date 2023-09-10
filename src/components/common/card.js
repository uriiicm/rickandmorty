import { useState,useEffect } from 'react';
import {getCharacter} from '../../services/rickandmorty';
import { useSelector } from 'react-redux';
function CardRick(){
    const [rickList,setRickList]= useState([]);
    const currentPage = useSelector((state) => state.currentPage);
    useEffect(()=>{
        async function fetchData(){
            try{
                const data = await getCharacter(currentPage);
                setRickList(data.results)
            }catch(error){
                console.error('Error fetching user data: ',error)
            }
        }
        fetchData();
    },[currentPage]);

    return (
        
        <div className="grid grid-cols-6 gap-5 p-20">
            {rickList.map((charter)=>(
                <div  key={charter.id} className="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                 <div className="flex flex-row px-2 py-3 mx-3">

                    <div className="flex flex-col mt-1 mb-2 ml-4">
                        <div className="text-sm text-gray-600">{charter.name}</div>
                        <div className="flex w-full mt-1">
                            <div className="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                Especie:
                            </div>
                            <div className="text-xs text-gray-600">
                                {charter.species}
                            </div>
                        </div>
                    </div>
                
                </div>
                 <div className="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                        <img className="w-[300px] h-[300px] rounded-full shadow-2xl object-cover " alt={charter.name}
                            src={charter.image}/>
                 </div>
                 <div className="mb-5 border-t border-gray-100">
                        <div className="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                            <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Género:<div
                                    className="ml-1 text-gray-500 text-ms"> {charter.gender}</div>
                            </div>
                            <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Estatus: <div
                                    className="ml-1 text-gray-500 text-ms">{charter.status}</div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            ))} 
        </div>
        
    )
}



export default CardRick;