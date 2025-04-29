import { Button } from "@/components/ui/button"
import { selectLanguageData } from "@/store/features/ui"
import { useAppSelector } from "@/store/hook"
import { Link } from "react-router"

interface LinkData {
    name: string
    url: string,
    color: string
}

const Footer = () => {

    const languageData = useAppSelector(selectLanguageData)

    if (!languageData) return null

    const { Footer: footerData } = languageData || {}
    const { title, email, links } = footerData || {}
    return (
        <footer className="py-12 lg:py-16 xl:py-24 bg-gray-100 dark:bg-gray-650">
            <div className="container">
                <h5 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl max-w-xl font-semibold text-gray-700 dark:text-primary-100">
                    {title}
                </h5>
                <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-12 lg:mt-14">
                    <div className="flex items-center justify-center lg:justify-between">
                        <Button variant={'link'} asChild className="text-pink-700 hover:text-pink-700/85 dark:text-primary-250 dark:hover:text-primary-400 px-0 text-xl font-medium hover:no-underline -ml-6 md:ml-0">
                            <Link to={`mailto:${email}`}>👉 <span className="underline underline-offset-[5px]">{email}</span></Link>
                        </Button>
                    </div>
                    <div className="flex items-center text-lg gap-5">
                        {links?.map((link: LinkData, index: number) => (
                            <Link
                                key={index}
                                target="_blank"
                                to={link.url}
                                className={`font-medium ${link.color} hover:underline`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
