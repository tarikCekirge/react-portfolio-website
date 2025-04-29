import { useAppSelector } from '@/store/hook';
import BlockTitle from '../blockTitle'
import ProjectCard from '../projectCard'
import { selectLanguageData } from '@/store/features/ui';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay'



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
                <BlockTitle>{title}</BlockTitle>
                <div className="">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}>
                        <CarouselContent className="-ml-6 md:-ml-12">
                            {projects &&
                                projects.map((project, index) => (
                                    <CarouselItem key={index} className="pl-6 md:pl-12 md:basis-1/2 lg:basis-1/3">
                                        <ProjectCard
                                            image={project.image}
                                            title={project.title}
                                            description={project.description}
                                            technologies={project.technologies}
                                            githubLink={project.githubLink}
                                            viewSiteLink={project.viewSiteLink}
                                        />
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                        <div className='relative mt-8 flex items-center justify-center gap-6'>
                            <CarouselPrevious className='relative left-auto rounded-sm cursor-pointer disabled:cursor-auto' />
                            <CarouselNext className='relative right-auto rounded-sm cursor-pointer disabled:cursor-auto' />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default ProjectsBlock
