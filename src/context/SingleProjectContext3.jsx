import { useState, createContext } from 'react';
import { singleProjectData3 as singleProjectData3Json } from '../data/singleProjectData3';

const SingleProjectContext3 = createContext();

export const SingleProjectProvider3 = ({ children }) => {
	const [singleProjectData3, setSingleProjectData3] = useState(
		singleProjectData3Json
	);

	return (
		<SingleProjectContext3.Provider
			value={{ singleProjectData3, setSingleProjectData3 }}
		>
			{children}
		</SingleProjectContext3.Provider>
	);
};

export default SingleProjectContext3;
