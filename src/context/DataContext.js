import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { format } from 'date-fns';

export const DataContext = createContext();

export function DataProvider({ children }) {







	return (
		<DataContext.Provider value={{}}>
			{children}
		</DataContext.Provider>
	);
}