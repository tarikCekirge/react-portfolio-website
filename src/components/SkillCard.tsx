interface SkillCardProps {
    title: string;
    content: string;
}

const SkillCard = ({ title, content }: SkillCardProps) => {
    return (
        <article className="space-y-2 md:space-y-4 lg:space-y-6">
            <h4 className="text-2xl md:text-3xl text-primary-700 dark:text-primary-300 font-semibold">
                {title}
            </h4>
            <p className="text-sm text-muted-foreground dark:text-white">{content}</p>
        </article>
    );
};

export default SkillCard;
