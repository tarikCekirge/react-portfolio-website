import { useAppSelector } from "@/store/hook";
import BlockTitle from "../blockTitle"
import { selectLanguageData } from "@/store/features/ui";

interface Profile {
    [key: string]: string;
}

interface LanguageData {
    ProfileBlock: {
        title: string;
        profile: Profile;
    };
    AboutMeBlock: {
        title: string;
        content: string;
    };
}


const ProfileBLock = () => {

    const languageData = useAppSelector(selectLanguageData);

    if (!languageData) return null;

    const { ProfileBlock: profileData, AboutMeBlock: aboutMeData } = languageData as LanguageData;
    const { title: profileTitle, profile } = profileData || {};
    const { title: aboutMeTitle, content } = aboutMeData || {};
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                {/* Profile Block Title */}
                <BlockTitle>{profileTitle}</BlockTitle>
                <div className="grid lg:grid-cols-[1fr_2fr] gap-6 md:gap-10 lg:gap-12">
                    {/* Profile Information */}
                    <div>
                        <h4 className="text-3xl mb-2 md:mb-3 font-medium text-primary-700 dark:text-primary-300"> {profileTitle} </h4>
                        {profile && Object.entries(profile).map(([key, value]) => (
                            <div className="grid grid-cols-[2fr_3fr] gap-4" key={key}>
                                <h6 className="font-semibold">{key}</h6>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>

                    {/* About Me Block */}
                    <div className="space-y-1">
                        <h4 className="text-3xl mb-2 md:mb-3 font-medium text-primary-700 dark:text-primary-300"> {aboutMeTitle} </h4>
                        <div className="space-y-3 text-muted-foreground dark:text-white [&>p]:leading-snug">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfileBLock
