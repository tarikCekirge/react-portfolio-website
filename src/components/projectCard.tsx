
import heroImg from '@/assets/images/hero-img.jpg'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router'

const ProjectCard = () => {
    return (
        <article className='space-y-4'>
            <img src={heroImg} alt="Image" className=" w-full object-cover aspect-video " />
            <h4 className='text-3xl mb-2 font-medium text-primary-700 dark:text-primary-300'>Workintech</h4>
            <p className='text-sm text-muted-foreground dark:text-white leading-tight'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
            <div className='flex gap-2 justify-start flex-wrap'>
                <Button className='font-normal text-sm' variant={'outline'} size={'sm'}>react</Button>
                <Button className='font-normal text-sm' variant={'outline'} size={'sm'}>redux</Button>
                <Button className='font-normal text-sm' variant={'outline'} size={'sm'}>axios</Button>
            </div>
            <div className='flex items-center justify-between'>
                <Button asChild variant={'link'} className='underline p-0'>
                    <Link to={'https://github.com/tarikCekirge'}>Github</Link>
                </Button>
                <Button asChild variant={'link'} className='underline p-0'>
                    <Link to={'https://github.com/tarikCekirge'}>View Site</Link>
                </Button>
            </div>

        </article>

    )
}

export default ProjectCard
