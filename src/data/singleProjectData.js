// Import images
import Image1 from '../images/requirement.png';
import Image2 from '../images/requirement2.png';
import Image3 from '../images/requirement3.png';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Business Trip Mobile Application Bridgestone',
		publishDate: 'March 2024',
		tags: 'Mobile Application Test',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Test Case',
			img: Image1,
		},
		{
			id: 2,
			title: 'Test Case',
			img: Image2,
		},
		{
			id: 3,
			title: 'Test Case',
			img: Image3,
		},
	],
	ProjectInfo: {
		CompanyInfo: [
			
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
    	'Ensure the optimal functioning of the Business Trip Bridgestone mobile application through thorough testing, detecting and documenting bugs, and ensuring the security and compatibility of the application across various devices and operating systems.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Qase io',
					'TestRail',
					'Telegram',
					'Phone',
					'Apptim',
					'Slack',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
    {
        id: 1,
        details:
            'Design and implement a comprehensive testing plan to ensure all features of the Business Trip Bridgestone mobile application function correctly.',
    },
    {
        id: 2,
        details:
            'Identify and document bugs and issues in the application through manual testing.',
    },
    {
        id: 3,
        details:
            'Conduct compatibility testing to ensure the application works well on various devices and mobile operating systems using performance testing.',
    },
    {
        id: 4,
        details:
            'Ensure the application has complete features such as fleet, transportation, and hotel booking, travel schedule management, expense management, and travel reporting.',
    },
],


		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://x.com/',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
