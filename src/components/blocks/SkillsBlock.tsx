import { useAppSelector } from "@/store/hook";
import BlockTitle from "../blockTitle"
import SkillCard from "@/components/skillCard"
import { selectLanguageData } from "@/store/features/ui";


const SkillsBlock = () => {

    const languageData = useAppSelector(selectLanguageData);

    if (!languageData) return null;

    const { SkillsBlock } = languageData;
    const { title, skills } = SkillsBlock || {};

    if (!skills) return null;
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <BlockTitle>{title}</BlockTitle>
                <div className="grid gap-6 md:gap-8 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill: { title: string; content: string }, index: number) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            content={skill.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsBlock
