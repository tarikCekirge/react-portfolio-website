
import { Button } from "@/components/ui/button"
import { Link } from 'react-router'

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    viewSiteLink: string;
}

const ProjectCard = ({
    image,
    title,
    description,
    technologies,
    githubLink,
    viewSiteLink
}: ProjectCardProps) => {
    return (
        <article className='space-y-4'>
            <img src={image} alt={title} className="w-full object-cover aspect-video" />
            <h4 className='text-3xl mb-2 font-medium text-primary-700 dark:text-primary-300'>{title}</h4>
            <p className='text-sm text-muted-foreground dark:text-white leading-tight'>{description}</p>
            <div className='flex gap-2 justify-start flex-wrap'>
                {technologies.map((tech, index) => (
                    <Button key={index} className='font-normal text-sm dark:bg-[#383838]' variant={'outline'} size={'sm'}>
                        {tech}
                    </Button>
                ))}
            </div>
            <div className='flex items-center justify-between'>
                <Button asChild variant={'link'} className='underline p-0'>
                    <Link to={githubLink}>Github</Link>
                </Button>
                <Button asChild variant={'link'} className='underline p-0'>
                    <Link to={viewSiteLink}>View Site</Link>
                </Button>
            </div>
        </article>
    )
}

export default ProjectCard
