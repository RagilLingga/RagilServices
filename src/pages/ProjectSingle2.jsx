import ProjectGallery2 from '../components/projects/ProjectGallery2';
import ProjectHeader2 from '../components/projects/ProjectHeader2';
import { motion } from 'framer-motion';
import { SingleProjectProvider2 } from '../context/SingleProjectContext2';
import ProjectInfo2 from '../components/projects/ProjectInfo2';
import ProjectRelatedProjects2 from '../components/projects/ProjectRelatedProjects2';

const ProjectSingle2 = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider2>
				<ProjectHeader2 />
				<ProjectGallery2 />
				<ProjectInfo2 />
				<ProjectRelatedProjects2 />
			</SingleProjectProvider2>
		</motion.div>
	);
};

export default ProjectSingle2;
