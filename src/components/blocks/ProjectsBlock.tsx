import BlockTitle from '../blockTitle'
import ProjectCard from '../projectCard'

const ProjectsBlock = () => {
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <BlockTitle >Projects</BlockTitle>
                <div className='grid lg:grid-cols-3 gap-12'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>

            </div>
        </section>
    )
}

export default ProjectsBlock
