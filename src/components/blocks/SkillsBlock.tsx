import BlockTitle from "../blockTitle"
import SkillCard from "../SkillCard"

const SkillsBlock = () => {
    return (
        <section className="py-16">
            <div className="container">
                <BlockTitle >Skills</BlockTitle>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </div>
            </div>
        </section>
    )
}

export default SkillsBlock
