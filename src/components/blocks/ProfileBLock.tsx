import BlockTitle from "../blockTitle"

const ProfileBLock = () => {
    return (
        <section className="py-16">
            <div className="container">
                <BlockTitle >Profile</BlockTitle>
                <div className="flex">
                    <div className="space-y-2">
                        <h4 className="text-4xl mb-2"> Profile </h4>
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
                </div>

            </div>
        </section>
    )
}

export default ProfileBLock
