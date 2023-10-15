import React, {createContext,useReducer} from "react";
import AppReducer from './AppReducer';





//initial state
const initialState = {
    transactions : 
    [
  
]
}

//create context

export const GlobalContext = createContext(initialState);

//provider components 

export const GlobalProvider =({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions 
function DeleteTransaction (id){
    dispatch({
    type : 'DELETE_TRANSACTION',
    payload : id
    });
}

function addTransaction (transaction){
    dispatch({
    type : 'ADD_TRANSACTION',
    payload : transaction
    });
}

 return(
    <GlobalContext.Provider value={{
        transactions : state.transactions,
        DeleteTransaction,addTransaction
    }}>
{children}

    </GlobalContext.Provider>
 )
}

export default GlobalProvider