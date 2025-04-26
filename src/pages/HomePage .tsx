import HeroBlock from "@/components/blocks/HeroBlock"
import ProfileBLock from "@/components/blocks/ProfileBLock"
import SkillsBlock from "@/components/blocks/SkillsBlock"
import { Separator } from "@/components/ui/separator"


const HomePage = () => {
    return (
        <>
            <HeroBlock />
            <SkillsBlock />
            <Separator className="max-w-[calc(71.25rem_-_2rem)] mx-auto" decorative={false} />
            <ProfileBLock />
            <Separator className="max-w-[calc(71.25rem_-_2rem)] mx-auto" decorative={false} />
        </>
    )
}

export default HomePage 
