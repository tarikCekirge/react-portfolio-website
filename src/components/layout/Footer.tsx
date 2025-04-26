import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const Footer = () => {
    return (
        <footer className="py-12 lg:py-16 xl:py-24 bg-gray-50">
            <div className="container">
                <h5 className=" text-center md:text-left text-3xl md:text-4xl lg:text-5xl max-w-xl font-semibold text-gray-700">Let’s work together on your next product.</h5>
                <div className="flex flex-col items-center justify-between mt-4 md:mt-12 lg:mt-14">
                    <div className="flex items-center justify-center lg:justify-between">
                        <Button variant={'link'} asChild className="text-pink-700 hover:text-pink-700/85  px-0 text-xl font-medium hover:no-underline -ml-6 md:ml-0">
                            <Link to={'mailto:tcekirge@gmail.com'}><span>👉</span> <span className="underline underline-offset-[5px]">tcekirge@gmail.com</span></Link>
                        </Button>
                    </div>
                    <div className=" flex items-center text-lg gap-5">
                        <Link target="_blank" to={'https://github.com/tarikCekirge'} className="text-gray-900">Personal Blog</Link>
                        <Link target="_blank" to={'https://github.com/tarikCekirge'} className=" text-jade-600">Github</Link>
                        <Link target="_blank" to={'https://github.com/tarikCekirge'} className=" text-blue-600">Github</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
