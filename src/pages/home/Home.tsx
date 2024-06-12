import { Footer } from "../../layout/footer/Footer"
import { Header } from "../../layout/header/Header"
import { BannerCarOffer } from "./components/BannerCarOffer"
import { CatalogCar } from "./components/CatalogCar"
import { Search } from "./components/Search"
import { Spacing } from "./components/Spacing"


export const Home = () => {
    return <>
        <Header />
        <main className="flex flex-col">
            <Search />
            <BannerCarOffer/>
            <Spacing/>
            <CatalogCar/>
            <Footer/>
        </main>
    </>
}