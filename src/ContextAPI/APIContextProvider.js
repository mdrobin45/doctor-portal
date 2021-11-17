import React, { createContext} from 'react';
import useFetchData from '../Hooks/useFetchData';
import useFirebase from '../Hooks/useFirebase';

export const APIContext = createContext();
const APIContextProvider = ({ children }) =>
{
    const dataFetch = useFetchData();
    const auth = useFirebase();
    return (
        <APIContext.Provider value={{dataFetch,auth}}>
            {children}
        </APIContext.Provider>
    );
};

export default APIContextProvider;