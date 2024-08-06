// Import images
import Image1 from '../images/requirement6.png';
import Image2 from '../images/requirement7.png';
import Image3 from '../images/requirement5.png';
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

export const singleProjectData2 = {
	ProjectHeader: {
		title: 'Project Website App Bridgestone',
		publishDate: 'April 2024',
		tags: 'Website App Test',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Test Case',
			img: Image1,
		},
		{
			id: 2,
			title: 'Defect',
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
    	'Ensure the Bridgestone web application functions optimally through comprehensive testing, detecting and documenting bugs, and ensuring the security and compatibility of the application across various browsers and platforms.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Qase io',
					'TestRail',
					'Telegram',
					'Chrome',
					'Jmeter',
					'Slack',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
ProjectDetails: [
    {
        id: 1,
        details:
            'Designing and implementing a comprehensive testing plan to ensure all features of the Bridgestone web application function correctly.',
    },
    {
        id: 2,
        details:
            'Identifying and documenting bugs and issues in the application through manual testing.',
    },
    {
        id: 3,
        details:
            'Conducting compatibility testing to ensure the application works well across various browsers and platforms, including performance testing.',
    },
    {
        id: 4,
        details:
            'Ensuring the application supports business trip management, allowing admins to approve or reject trip requests and cash advances, check security and waste, and manage housekeeping.',
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
