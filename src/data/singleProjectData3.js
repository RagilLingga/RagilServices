// Import images
import Image1 from '../images/requirement9.png';
import Image2 from '../images/requirement10.png';
import Image3 from '../images/requirement11.png';
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

export const singleProjectData3 = {
	ProjectHeader: {
		title: 'AHM Dashboard Website Loyalty Managements',
		publishDate: 'June 2024',
		tags: 'Website App Test',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Selenium Web Drivers',
			img: Image1,
		},
		{
			id: 2,
			title: 'Asana',
			img: Image2,
		},
		{
			id: 3,
			title: 'Bsin',
			img: Image3,
		},
	],
	ProjectInfo: {
		CompanyInfo: [
			
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
    	'Verify that the AHM Loyalty Management web dashboard operates smoothly and efficiently by conducting thorough testing, identifying and documenting any issues, and ensuring the applications security and compatibility across multiple browsers and platforms.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Qase io',
					'Asana',
					'Telegram',
					'Chrome',
					'Jmeter',
                    'K6 Performance Tools',
					'Slack',
                    'Selenium Web Drivers',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
ProjectDetails: [
    {
        id: 1,
        details:
            'Developing and executing a thorough testing strategy to validate all functionalities of the AHM Loyalty Management web dashboard.',
    },
    {
        id: 2,
        details:
            'Detecting and documenting any defects or issues found during manual testing and automation testing of the dashboard.',
    },
    {
        id: 3,
        details:
            'Performing compatibility testing to ensure optimal performance and usability across different browsers and platforms, including load and performance assessments.',
    },
    {
        id: 4,
        details:
            'Verifying that the dashboard effectively supports features such as tracking customer loyalty points, managing customer data, administering employee roles and permissions, and performing CRUD operations on employee records.',
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
