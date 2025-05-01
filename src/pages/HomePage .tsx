import HeroBlock from "@/components/blocks/HeroBlock"
import ProfileBLock from "@/components/blocks/ProfileBLock"
import ProjectsBlock from "@/components/blocks/ProjectsBlock"
import SkillsBlock from "@/components/blocks/SkillsBlock"
import { Separator } from "@/components/ui/separator"


const HomePage = () => {
    return (
        <>
            <HeroBlock />
            <SkillsBlock />
            <Separator className="data-[orientation=horizontal]:bg-[#BAB2E7]" />
            <ProfileBLock />
            <Separator className="data-[orientation=horizontal]:bg-[#BAB2E7]" />
            <ProjectsBlock />
        </>
    )
}

export default HomePage 
