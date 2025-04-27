import { Separator } from "@/components/ui/separator"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"

const Header = () => {
    const switchTheme = () => {
        console.log('Theme Switch')
    }

    const switchLang = () => {
        console.log('Lang Switch')
    }
    return (
        <header className="py-4 space-y-8">
            <div className="container">
                <div className="flex h-5 items-center justify-end space-x-4 text-sm text-[#777777]">
                    <button onClick={switchTheme} className="hover:no-underline px-0 cursor-pointer font-medium text-sm">DARK MODE</button>
                    <Separator orientation="vertical" className="!w-0.5 bg-[#777777] !h-4" />
                    <button onClick={switchLang} className="hover:no-underline px-0 cursor-pointer font-medium text-sm"><span><span>TÜRKÇE</span>'YE GEÇ</span></button>
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
