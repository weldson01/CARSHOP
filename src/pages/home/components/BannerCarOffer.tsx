import { LinkButton } from "../../../components/LinkButton"
import carImg from "/src/assets/CarBanner1.jpg"

export const BannerCarOffer = () => {

    return (
        <div className="min-w-full relative pt-16">
            <img src={carImg} className="min-w-full max-h-fit absolute top-0" />
            <div className="absolute w-full">
                <div className="flex w-full justify-center gap-32">
                    <div className="w-96  rounded-xl overflow-hidden drop-shadow-md">
                        <img src={carImg} className="max-w-7xl h-img_tall left-10 aspect-video" />
                        <div className="bg-primary h-28 pl-2 pt-2">
                            <p className="text-white text-2xl uppercase">Honda Civic</p>
                        </div>
                    </div>
                    <div className="w-72 flex flex-col gap-10">
                        <h2 className="uppercase text-6xl pl-2 bg-primary w-64 text-white">
                            Melhor
                        </h2>
                        <h2 className="uppercase text-6xl pl-2 bg-primary w-80 text-white">
                            Oferta Do
                        </h2>
                        <h2 className="uppercase text-6xl pl-2 bg-primary w-32 text-white">
                            Dia
                        </h2>
                        <LinkButton path="/" text="Fazer Simulação"/>
                    </div>
                </div>
            </div>
        </div>

    )
}