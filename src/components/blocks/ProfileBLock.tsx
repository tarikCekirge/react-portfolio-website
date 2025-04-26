import BlockTitle from "../blockTitle"

const ProfileBLock = () => {
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <BlockTitle >Profile</BlockTitle>
                <div className="grid lg:grid-cols-[1fr_2fr] gap-6 md:gap-10 lg:gap-12">
                    <div className="space-y-1">
                        <h4 className="text-3xl mb-2 md:mb-3 font-semibold text-primary-700"> Profile </h4>
                        <div className="grid grid-cols-[2fr_3fr] gap-4">
                            <h6 className="font-semibold"> Doğum Tarihi</h6>
                            <p>24.03.1996</p>
                        </div>
                        <div className="grid grid-cols-[2fr_3fr] gap-4">
                            <h6 className="font-semibold"> İkamet Şehri</h6>
                            <p>Ankara</p>
                        </div>
                        <div className="grid grid-cols-[2fr_3fr] gap-4">
                            <h6 className="font-semibold"> Eğitim Durumu</h6>
                            <p>Hacettepe Ünv.  Biyoloji
                                Lisans, 2016</p>
                        </div>
                        <div className="grid grid-cols-[2fr_3fr] gap-4">
                            <h6 className="font-semibold">Tercih Ettiği Rol</h6>
                            <p>Frontend, UI</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-3xl mb-2 md:mb-3 font-semibold text-primary-700"> About Me </h4>
                        <div className="space-y-3 text-muted-foreground [&>p]:leading-snug">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                            <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProfileBLock
