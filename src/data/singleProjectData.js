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
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		CompanyInfo: [
			
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
    	'Memastikan aplikasi mobile Business Trip Bridgestone berfungsi dengan optimal melalui pengujian menyeluruh, mendeteksi dan mendokumentasikan bug, serta menjamin keamanan dan kompatibilitas aplikasi di berbagai perangkat dan sistem operasi.',
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
            'Merancang dan mengimplementasikan rencana pengujian komprehensif untuk memastikan semua fitur aplikasi mobile Business Trip Bridgestone berfungsi dengan baik.',
    },
    {
        id: 2,
        details:
            'Mengidentifikasi dan mendokumentasikan bug dan isu dalam aplikasi melalui pengujian manual.',
    },
    {
        id: 3,
        details:
            'Melakukan pengujian kompatibilitas untuk memastikan aplikasi bekerja dengan baik di berbagai perangkat dan sistem operasi mobile menggunakan performance testing.',
    },
    {
        id: 4,
        details:
            'Memastikan aplikasi memiliki fitur lengkap seperti pemesanan fleet, transportation, dan hotel, pengaturan jadwal perjalanan, pengelolaan pengeluaran, dan pelaporan perjalanan.',
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
