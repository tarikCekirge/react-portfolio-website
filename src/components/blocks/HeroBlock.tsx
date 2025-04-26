import heroImg from '@/assets/images/hero-img.jpg'
import { Link } from 'react-router'
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



const HeroBlock = () => {
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 xl:gap-12">
                    <div className='flex-1 flex flex-col gap-4 xl:gap-[40px]'>
                        <span>Almila Su</span>
                        <h1 className='text-4xl md:text-xlg xl:text-7xl font-bold text-gray-700 dark:text-primary-300'> Creative thinker  Minimalism lover </h1>
                        <p className='text-muted-foreground dark:text-white text-lg leading-snug'>Hi, I’m Tarik. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                        <div className='flex items-center justify-start gap-3'>
                            <Button asChild size={'lg'}>
                                <Link to={'https://www.linkedin.com/in/tarikcekirge/'} target='_blank'> Hire me</Link>
                            </Button>
                            <Button asChild variant={'outline'} size={'lg'}>
                                <Link to={'https://github.com/tarikCekirge'} target='_blank'> <FaGithub size={26} />Github</Link>
                            </Button>
                            <Button asChild variant={'outline'} size={'lg'}>
                                <Link to={'https://www.linkedin.com/in/tarikcekirge/'} target='_blank'> <FaLinkedinIn />Linkedin</Link>
                            </Button>
                        </div>

                    </div>
                    <div className='rounded-[18px] overflow-hidden w-full max-w-lg lg:max-w-sm xl:max-w-md image-shadow -order-1 lg:order-none'>
                        <img className='w-full' src={heroImg} alt={"Tarık"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBlock
