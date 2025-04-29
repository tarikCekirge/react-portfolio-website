import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroImg from '@/assets/images/hero-img.jpg'
import { useAppSelector } from "@/store/hook";
import { selectLanguageData } from "@/store/features/ui";


type Social = {
    logo: string;
    alt_text: string;
    link: string;
};
const Hero = () => {
    const languageData = useAppSelector(selectLanguageData);

    if (!languageData) return null;

    const { HeroBlock } = languageData;
    const { greeting, intro, content, socials } = HeroBlock;

    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 xl:gap-12">
                    <div className='flex-1 flex flex-col gap-4 xl:gap-[40px]'>
                        <div className="flex items-center gap-2.5">
                            <span className="inline-block w-[61px] lg:w-[102px] h-[1px] bg-primary-700 dark:bg-primary-300"></span><span className="text-primary-700 dark:text-primary-300">{greeting}</span>
                        </div>
                        <h1 className='text-4xl md:text-xlg xl:text-7xl font-bold text-gray-700 dark:text-primary-300'>
                            {intro}
                        </h1>
                        <p className='text-muted-foreground dark:text-white text-lg leading-snug'>
                            {content}
                        </p>
                        <div className='flex items-center justify-start gap-3'>
                            {socials?.map((social: Social, idx: number) => (
                                <Button asChild size={'lg'} variant={idx === 0 ? 'default' : 'outline'} key={idx} className={idx !== 0 ? 'dark:bg-[#383838]' : ''}>
                                    <Link

                                        to={social.link}
                                        target='_blank'
                                    >
                                        {social.logo === 'FaGithub' && <FaGithub size={26} />}
                                        {social.logo === 'FaLinkedinIn' && <FaLinkedinIn size={26} />}
                                        {social.alt_text}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className='rounded-[18px] overflow-hidden w-full max-w-lg lg:max-w-sm xl:max-w-md image-shadow -order-1 lg:order-none'>
                        <img className='w-full' src={heroImg} alt="Hero Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
