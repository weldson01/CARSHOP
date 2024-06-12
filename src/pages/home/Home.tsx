import { Header } from "../../layout/header/Header"
import { BannerCarOffer } from "./components/BannerCarOffer"
import { Search } from "./components/Search"


export const Home = () => {
    return <>
        <Header />
        <main className="flex flex-col">
            <Search />
            <BannerCarOffer/>
        </main>
    </>
}