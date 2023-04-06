import { createContext, useReducer} from 'react';


//we will write here our initial state
const INITIAL_STATE = {
    //its going to include user, null becasuse we didnot login, false this is going to decide the begingin and ending of this process,its going to be false first because we are not fetching anything at the beginning, error is false also because there is no error at the beginning
    user:null,
    isFetching:false,
    error:false,
};
//after that we can create our context, createContext(indicate the initial state )

export const AuthContext = createContext(INITIAL_STATE);

//let create this wrapper 
export const AuthContextProvider = ({children}) => {
    //we are going to use reducer, [its going to be reducer state or updated state, and dipatch ]
    const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

    return(
        //{user:state.user,}} this came from reducer (const [state, dispatch]) from here. additionally we will add this dispatch, so now how we are going to wrapp this application? 
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
            }}>
            {children}  
        </AuthContext.Provider>
    )
}