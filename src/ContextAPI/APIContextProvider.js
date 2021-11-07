import React, { createContext, useEffect, useState } from 'react';
import useFetchData from '../Hooks/useFetchData';

export const APIContext = createContext();
const APIContextProvider = ({children}) =>
{
    const dataFetch = useFetchData();
    return (
        <APIContext.Provider value={dataFetch}>
            {children}
        </APIContext.Provider>
    );
};

export default APIContextProvider;