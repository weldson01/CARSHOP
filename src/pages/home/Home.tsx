import { Header } from "../../layout/header/Header"
import { Search } from "./components/Search"


export const Home = () => {
    return <>
        <Header />
        <main className="flex flex-col">
            <Search />
        </main>
    </>
}