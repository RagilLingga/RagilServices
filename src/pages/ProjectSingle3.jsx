import ProjectHeader3 from '../components/projects/ProjectHeader3';
import { motion } from 'framer-motion';
import { SingleProjectProvider3 } from '../context/SingleProjectContext3';
import ProjectGallery3 from '../components/projects/ProjectGallery3';
import ProjectInfo3 from '../components/projects/ProjectInfo3';
import ProjectRelatedProjects3 from '../components/projects/ProjectRelatedProjects3';

const ProjectSingle3 = () => {
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
			<SingleProjectProvider3>
				<ProjectHeader3 />
				<ProjectGallery3 />
				<ProjectInfo3 />
				<ProjectRelatedProjects3 />
			</SingleProjectProvider3>
		</motion.div>
	);
};

export default ProjectSingle3;
