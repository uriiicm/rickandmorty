// store.js
import { createStore } from 'redux';
// Definir un reducer para manejar el estado de la paginación
const initialState = {
    currentPage: 1,
  };
  
function paginationReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.payload };
      default:
        return state;
    }
  }
  
  // Crear la tienda Redux
  const store = createStore(paginationReducer);
  
  export default store;