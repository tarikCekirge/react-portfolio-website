import { useAppSelector } from '@/store/hook';
import BlockTitle from '../blockTitle'
import ProjectCard from '../projectCard'
import { selectLanguageData } from '@/store/features/ui';


interface Project {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    viewSiteLink: string;
}

interface LanguageData {
    ProjectsBlock: {
        title: string;
        projects: Project[];
    };
}

const ProjectsBlock = () => {

    const languageData = useAppSelector(selectLanguageData);
    if (!languageData) return null;

    const { ProjectsBlock: projectsData } = languageData as LanguageData;
    const { title, projects } = projectsData || {};


    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <BlockTitle>{title || "Projeler"}</BlockTitle>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects &&
                        projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                githubLink={project.githubLink}
                                viewSiteLink={project.viewSiteLink}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsBlock
