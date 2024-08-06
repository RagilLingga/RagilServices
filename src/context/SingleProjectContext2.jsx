import { useState, createContext } from 'react';
import { singleProjectData2 as singleProjectData2Json } from '../data/singleProjectData2';

const SingleProjectContext2 = createContext();

export const SingleProjectProvider2 = ({ children }) => {
	const [singleProjectData2, setSingleProjectData2] = useState(
		singleProjectData2Json
	);

	return (
		<SingleProjectContext2.Provider
			value={{ singleProjectData2, setSingleProjectData2 }}
		>
			{children}
		</SingleProjectContext2.Provider>
	);
};

export default SingleProjectContext2;
