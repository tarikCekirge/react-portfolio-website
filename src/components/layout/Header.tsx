import { Separator } from "@/components/ui/separator"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"

import { toggleTheme, setLanguage, selectTheme, selectLanguage } from '@/store/features/ui';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { cn } from "@/lib/utils";


const Header = () => {

    const dispatch = useAppDispatch();
    const currentTheme = useAppSelector(selectTheme);
    const currentLanguage = useAppSelector(selectLanguage);


    const themeButtonText = currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE';
    const languageButtonText = currentLanguage === 'en';

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    const handleLanguageToggle = () => {
        const nextLanguage = currentLanguage === 'en' ? 'tr' : 'en';
        dispatch(setLanguage(nextLanguage));

    };
    return (
        <header className="py-4 space-y-8">
            <div className="container">
                <div className="flex h-5 items-center justify-end space-x-4 text-sm text-[#777777]">
                    <button
                        onClick={handleThemeToggle}
                        className="hover:no-underline px-0 cursor-pointer font-medium text-sm flex gap-2 dark:text-gray-200"
                        aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        <span className="mode-swither">
                            <span className={cn("moon", currentTheme)}></span>
                        </span>  {themeButtonText}
                    </button>
                    <Separator orientation="vertical" className="!w-0.5 bg-[#777777] !h-4" />
                    <button
                        onClick={handleLanguageToggle}
                        className="hover:no-underline px-0 cursor-pointer font-medium text-sm"
                        aria-label={`Switch language to ${currentLanguage === 'en' ? 'Turkish' : 'English'}`}
                    >
                        {languageButtonText ? (
                            <>
                                SWITCH TO <span className="lang">TURKISH</span>

                            </>
                        ) : (
                            <>
                                <span className="lang">İNGİLİZCE</span>'YE GEÇ
                            </>
                        )}
                    </button>
                </div>
            </div>
            <nav className="container items-center flex justify-end space-x-8">
                <Button asChild className="rounded-full size-12  text-primary-500 hover:text-[#EEEBFF] text-2xl font-semibold bg-[#EEEBFF] mr-auto"><Link className="rotate-[30deg]" to={'/'}>T</Link></Button>
                <Button className="p-0 text-gray-600 text-lg" variant={'link'} asChild><Link to={'#skills'}>Skills</Link></Button>
                <Button className="p-0 text-gray-600 text-lg" variant={'link'} asChild><Link to={'#skills'}>Projects</Link></Button>
                <Button className=" text-lg" variant={'outline'} >Hire me</Button>
            </nav>
        </header>
    )
}

export default Header
